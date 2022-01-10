import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import palette from "../assets/palette";

const Tab = createMaterialBottomTabNavigator();

function TabStack() {
    return (
        <Tab.Navigator shifting={true} initialRouteName="Home">
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarColor: palette.color4,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarColor: palette.color1,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="alpha-s-circle-outline"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Messages"
                component={MessagesScreen}
                options={{
                    tabBarColor: palette.color3,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="android-messages"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabStack;
