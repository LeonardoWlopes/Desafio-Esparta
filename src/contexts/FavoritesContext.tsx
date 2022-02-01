import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { APIkey } from "../../utils/constantes";

//Interfaces
type props = {
  children: ReactNode;
};
import { ICidades } from "../interfaces/cidades";
import { ICidadesSearch } from "../interfaces/cidadeSearch";

type IFavoritesContext = {
  favList: ICidadesSearch[] | null;
  setFavlist: Dispatch<SetStateAction<ICidadesSearch[] | null>>;
};

//Context
export const FavoritesContext = createContext({} as IFavoritesContext);

export default function FavoritesProvider({ children }: props) {
  const [favList, setFavlist] = useState<ICidadesSearch[] | null>(null);

  //Busca as cordenadas da cidade
  useEffect(() => {}, [favList]);

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
