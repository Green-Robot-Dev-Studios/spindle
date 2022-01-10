import React from "react";
import { View } from "react-native";
import { ActivityIndicator, Headline } from "react-native-paper";

function LoadingScreen() {
    return (
        <>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <ActivityIndicator animating={true} />
                <Headline>Loading</Headline>
            </View>
        </>
    );
}

export default LoadingScreen;
