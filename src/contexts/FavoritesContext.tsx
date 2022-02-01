import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Interfaces
type props = {
  children: ReactNode;
};
import { ICidadesSearch } from "../interfaces/cidadeSearch.interface";

type IFavoritesContext = {
  favList: ICidadesSearch[] | null;
  setFavlist: Dispatch<SetStateAction<ICidadesSearch[] | null>>;
};

//Context
export const FavoritesContext = createContext({} as IFavoritesContext);

export default function FavoritesProvider({ children }: props) {
  const [favList, setFavlist] = useState<ICidadesSearch[] | null>(null);

  //Salva a lista de favoritos no async storage
  useEffect(() => {
    !!favList &&
      (async () => {
        const jsonValue = JSON.stringify(favList);
        await AsyncStorage.setItem("@Sparta_FavList", jsonValue).then(() =>
          console.log("Salvo no storage")
        );
      })();
  }, [favList]);

  //Retorna a lista salva em memoria
  useEffect(() => {
    (async () => {
      const jsonValue = await AsyncStorage.getItem("@Sparta_FavList");

      if (!!jsonValue) {
        setFavlist(JSON.parse(jsonValue));
        console.log("Lista Carregada");
      }
    })();
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favList,
        setFavlist,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
