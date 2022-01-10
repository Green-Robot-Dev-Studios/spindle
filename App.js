import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { initializeApp } from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";

import TabStack from "./src/components/TabStack";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import firebaseConfig from "./src/firebase/config";
import { getAuth } from "@firebase/auth";
import app from "./src/firebase/config";
import { If, Then, Else } from "react-if";
import LoadingScreen from "./src/screens/LoadingScreen";
import ErrorScreen from "./src/screens/ErrorScreen";

const auth = getAuth(app);

const Stack = createNativeStackNavigator();

const theme = {
    ...DefaultTheme,
};

function App() {
    const [user, loading, error] = useAuthState(auth);

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator>
                    {user && !loading && (
                        <Stack.Screen
                            name="TabStack"
                            component={TabStack}
                            options={disableHeader}
                        />
                    )}
                    {!user && !loading && (
                        <>
                            <Stack.Screen
                                name="Welcome"
                                component={WelcomeScreen}
                                options={disableHeader}
                            />
                            <Stack.Screen
                                name="Sign In"
                                component={SignInScreen}
                            />
                            <Stack.Screen
                                name="Sign Up"
                                component={SignUpScreen}
                            />
                        </>
                    )}
                    {loading && (
                        <Stack.Screen
                            name="Loading"
                            component={LoadingScreen}
                            options={disableHeader}
                        />
                    )}
                    {error && (
                        <Stack.Screen name="Error" component={ErrorScreen} />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

const disableHeader = { headerShown: false };

export default App;
