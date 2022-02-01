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
import { ICidades } from "../interfaces/cidades.interface";
import { ICidadesSearch } from "../interfaces/cidadeSearch.interface";

type ISearchContex = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  isSearchVisible: boolean;
  setIsSearchVisible: Dispatch<SetStateAction<boolean>>;
  searchCidade: ICidadesSearch[] | null;
};

//Context
export const SearchContext = createContext({} as ISearchContex);

export default function SearchProvider({ children }: props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchCidade, setSearchCidade] = useState<ICidadesSearch[] | null>(
    null
  );

  //Busca as cordenadas da cidade
  useEffect(() => {
    searchQuery.length >= 3
      ? axios
          .get(
            `https://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=4&appid=${APIkey}`
          )
          .then((response) => {
            setSearchCidade(response.data);
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
