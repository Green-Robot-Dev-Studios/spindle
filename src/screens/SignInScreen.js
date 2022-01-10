import React from "react";
import { getAuth } from "@firebase/auth";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import app from "../firebase/config";
import ErrorScreen from "./ErrorScreen";
import LoadingScreen from "./LoadingScreen";
import { Button, TextInput } from "react-native-paper";
import { View } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

const auth = getAuth(app)

const SignInScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    if (error) {
        return (
            <ErrorScreen error={error} />
        );
    }
    if (loading) {
        return <LoadingScreen />
    }
    console.log(email, password)
    return (
        <View style={{
            padding: scale(5),
            justifyContent: "center",
            height: "100%",
        }}>
            <TextInput
                textContentType="emailAddress"
                value={email}
                onChange={(e) => setEmail(e.nativeEvent.text)}
                label="Email"
                style={{ margin: moderateScale(10) }}
            />
            <TextInput
                textContentType="password"
                value={password}
                onChange={(e) => setPassword(e.nativeEvent.text)}
                label="Password"
                style={{ margin: moderateScale(10) }}
            />
            <Button
                mode="contained"
                onPress={() => signInWithEmailAndPassword(email, password)}
                style={{ margin: moderateScale(10) }}
            >
                Sign In
            </Button>
        </View>
    );
};


export default SignInScreen;