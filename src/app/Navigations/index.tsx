import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { enableScreens } from "react-native-screens";

import styles from "./styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Weeks from "../../pages/Weeks/Weeks";
import Tasks from "../../pages/Tasks";


enableScreens();

export default function Navigations() {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = '';
                        let solid = focused;

                        if (route.name === 'Tasks') {
                            iconName = 'tasks';
                        } else if (route.name === 'Weeks') {
                            iconName = 'calendar-alt';
                        }

                        return <FontAwesome5 name={iconName} size={size} color={color} solid={solid} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: styles.tabBar
                })}
            >
                <Tab.Screen name="Tasks" component={Tasks} />
                <Tab.Screen name="Weeks" component={Weeks} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
