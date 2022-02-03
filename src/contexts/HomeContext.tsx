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
  homeList: ICidades[] | null;
  setHomeList: Dispatch<SetStateAction<ICidades[] | null>>;
};
import { ICidades } from "../interfaces/cidade.interface";

//Context
export const HomeContext = createContext({} as IHomeContext);

export default function HomeProvider({ children }: props) {
  const [homeList, setHomeList] = useState<ICidades[] | null>(null);

  //Salva a lista de favoritos no async storage
  useEffect(() => {
    !!homeList &&
      (async () => {
        const jsonValue = JSON.stringify(homeList);
        await AsyncStorage.setItem("@Sparta_FavList", jsonValue);
      })();
  }, [homeList]);

  //Retorna a lista salva em memoria
  useEffect(() => {
    (async () => {
      const jsonValue = await AsyncStorage.getItem("@Sparta_FavList");

      if (!!jsonValue) {
        setHomeList(JSON.parse(jsonValue));
      }
    })();
  }, []);

  return (
    <HomeContext.Provider
      value={{
        homeList,
        setHomeList,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
