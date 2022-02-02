import React from "react";

//Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

//Components
import Home from "./screens/Home";
import Cidade from "./screens/Cidade";

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cidade" component={Cidade} />
    </Stack.Navigator>
  );
}
