import React from "react";

//Components
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

//Providers
import SearchProvider from "./src/contexts/SearchContext";
import HomeProvider from "./src/contexts/HomeContext";

export default function App() {
  return (
    <NavigationContainer>
      <HomeProvider>
        <SearchProvider>
          <StatusBar style="auto" />
          <Routes />
        </SearchProvider>
      </HomeProvider>
    </NavigationContainer>
  );
}
