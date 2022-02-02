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

type ISearchContext = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  isSearchVisible: boolean;
  setIsSearchVisible: Dispatch<SetStateAction<boolean>>;
  searchCidade: ICidades[] | null;
  setLanguage: Dispatch<SetStateAction<string>>;
  language: string;
};

//Context
export const SearchContext = createContext({} as ISearchContext);

export default function SearchProvider({ children }: props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchCidade, setSearchCidade] = useState<ICidades[] | null>(null);
  const [language, setLanguage] = useState("pt-br");

  //Busca as coordenadas da cidade
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
        language,
        setLanguage,
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
