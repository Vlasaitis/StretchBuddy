import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider, Icon, Text, Center } from "native-base";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { setupDatabaseAsync, getExercises } from "./database";
import HomeScreen from "./screens/HomeScreen";
import AddNewScreen from "./screens/AddNewScreen"; // Create this component
import ExercisesScreen from "./screens/ExercisesScreen"; // Create this component

/* Notes to self on the components:
- NativeBaseProvider: from native base. Provides theme & context for all Native Base components. Wrap everything with this to use their components.
- NavigationContainer: wraps all navigators, provides navigation context. Container for navigation elements.
- Tab.Naviator: Container for tab screens. Takes props to alter appearance and behavior of tab bar. Takes route as param, and based on that changes how icons look. */

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    const initializeDatabase = async () => {
      await setupDatabaseAsync();

      // Uncomment the next line to clear the database
      //await clearDatabase();

      // Uncomment the next line to add initial data
      //await addInitialData();

      // Uncomment the next line to fetch and log all exercises
      //const exercises = await getExercises();
      //console.log(exercises);
    };

    initializeDatabase();
  }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Start") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Add New") {
                iconName = focused ? "plus-circle" : "plus-circle-outline";
              } else if (route.name === "Exercises") {
                iconName = focused
                  ? "format-list-bulleted"
                  : "format-list-bulleted-type";
              }

              // You can return any component that you like here!
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size + 10}
                  color={color}
                />
              );
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: [
              { display: "flex", height: 80, paddingBottom: 10 },
              null,
            ],
          })}
        >
          <Tab.Screen name="Start" component={HomeScreen} />
          <Tab.Screen name="Add New" component={AddNewScreen} />
          <Tab.Screen name="Exercises" component={ExercisesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
