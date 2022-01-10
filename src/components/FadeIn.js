import React from "react";
import { useSpring, animated } from "@react-spring/native";
import { Dimensions, View, TouchableOpacity, Text } from "react-native";

const AnimatedView = animated(View);

function FadeIn(props) {
    const anim = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
    return (
        <View>
            <AnimatedView style={anim}>
                {props.children}
            </AnimatedView>
        </View>
    );
}

export default FadeIn;