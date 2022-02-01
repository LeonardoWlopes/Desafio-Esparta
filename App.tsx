import React from "react";

//Components
import { StatusBar } from "expo-status-bar";
import Layout from "./src/components/Layout";
import Home from "./src/screens/main";

//Providers
import SearchProvider from "./src/contexts/SearchContext";
import FavoritesProvider from "./src/contexts/FavoritesContext";

export default function App() {
  return (
    <>
      <FavoritesProvider>
        <SearchProvider>
          <Layout>
            <StatusBar style="auto" />
            <Home />
          </Layout>
        </SearchProvider>
      </FavoritesProvider>
    </>
  );
}
