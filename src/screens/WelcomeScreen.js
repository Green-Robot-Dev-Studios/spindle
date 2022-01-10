import React from "react";
import { View } from "react-native";
import { Button, Headline } from "react-native-paper";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

function WelcomeScreen(props) {
    return (
        <View
            style={{
                padding: scale(5),
                justifyContent: "center",
                height: "100%",
            }}
        >
            <Headline
                style={{
                    fontSize: scale(55),
                    lineHeight: scale(55),
                    paddingBottom: scale(20),
                }}
            >
                Welcome to spindle!
            </Headline>
            <Button
                mode="contained"
                style={{ margin: moderateScale(5) }}
                onPress={() => props.navigation.navigate("Sign Up")}
            >
                Let's Get Started!
            </Button>
            <Button
                mode="outlined"
                style={{ margin: moderateScale(5) }}
                onPress={() => props.navigation.navigate("Sign In")}
            >
                I have an account
            </Button>
        </View>
    );
}

export default WelcomeScreen;
