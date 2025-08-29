import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from "react-native-screens";

import styles from "./styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import colors from "../Theme/colors";

import Weeks from "../../pages/Weeks/Weeks";
import Tasks from "../../pages/Tasks";


enableScreens();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function StackWeeks() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Weeks" 
        component={Weeks} 
        options={{ headerTitle : "Haftalar"}} 
      />
    </Stack.Navigator>
  );
}



export default function Navigations() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = '';
                        let solid = focused;

                        if (route.name === 'Tasks') {
                            iconName = 'tasks';
                        } else if (route.name === 'Week') {
                            iconName = 'calendar-alt';
                        }

                        return <FontAwesome5 name={iconName} size={size} color={color} solid={solid} />;
                    },
                    tabBarActiveTintColor: colors.other,
                    tabBarInactiveTintColor: colors.text,
                    tabBarStyle: styles.tabBar
                })}
            >
                <Tab.Screen name="Tasks"  component={Tasks} options={{headerTitle : "Görevler", tabBarLabel: 'Görevler'   }} />
                <Tab.Screen
                    name="Week"
                    component={StackWeeks}
                    options={{ headerShown: false, tabBarLabel: 'Haftalar' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
