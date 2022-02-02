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

type IHomeContext = {
  favList: ICidades[] | null;
  setFavlist: Dispatch<SetStateAction<ICidades[] | null>>;
};
import { ICidades } from "../interfaces/cidade.interface";

//Context
export const HomeContext = createContext({} as IHomeContext);

export default function HomeProvider({ children }: props) {
  const [favList, setFavlist] = useState<ICidades[] | null>(null);

  //Salva a lista de favoritos no async storage
  useEffect(() => {
    !!favList &&
      (async () => {
        const jsonValue = JSON.stringify(favList);
        await AsyncStorage.setItem("@Sparta_FavList", jsonValue)
      })();
  }, [favList]);

  //Retorna a lista salva em memoria
  useEffect(() => {
    (async () => {
      const jsonValue = await AsyncStorage.getItem("@Sparta_FavList");

      if (!!jsonValue) {
        setFavlist(JSON.parse(jsonValue));
      }
    })();
  }, []);

  return (
    <HomeContext.Provider
      value={{
        favList,
        setFavlist,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
