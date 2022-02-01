import React from "react";
import { StatusBar } from "expo-status-bar";
import Layout from "./src/components/Layout";
import Home from "./src/screens/main";
import SearchProvider from "./src/contexts/SearchContext";



export default function App() {
  return (
    <>
      <SearchProvider>
        <Layout>
          <StatusBar style="auto" />
          <Home />
        </Layout>
      </SearchProvider>
    </>
  );
}
