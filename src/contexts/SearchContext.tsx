import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { APIkey } from "../utils/constantes";

//Interfaces
type props = {
  children: ReactNode;
};
import { ICidades } from "../interfaces/cidade.interface";

type ISearchContex = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  isSearchVisible: boolean;
  setIsSearchVisible: Dispatch<SetStateAction<boolean>>;
  searchCidade: ICidades[] | null;
};

//Context
export const SearchContext = createContext({} as ISearchContex);

export default function SearchProvider({ children }: props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchCidade, setSearchCidade] = useState<ICidades[] | null>(null);

  //Busca as cordenadas da cidade
  useEffect(() => {
    searchQuery.length >= 3
      ? axios
          .get(
            `https://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=4&appid=${APIkey}`
          )
          .then((response) => {
            let cidades = response.data;
            for (let i = 0; cidades.length < i; i++) {
              cidades[i].favorited = false;
            }
            setSearchCidade(cidades);
          })
      : setSearchCidade(null);
  }, [searchQuery]);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        isSearchVisible,
        setIsSearchVisible,
        searchCidade,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
