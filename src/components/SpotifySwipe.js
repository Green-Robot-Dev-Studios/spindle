import React from "react";
import PropTypes from "prop-types";
import { Surface } from "react-native-paper";
import SpotifyEmbed from "./SpotifyEmbed";
import { moderateScale, scale } from "react-native-size-matters";
import SpotifyCard from "./SpotifyCard";
import TinderCard from 'react-tinder-card'
import { View } from "react-native";

function SpotifySwipe(props) {
    return (
        <View>
            <TinderCard>
                <SpotifyCard {...props} /> 
            </TinderCard>
        </View>
    );
}

SpotifySwipe.defaultProps = {
    darken: false,
    spotifyID: "",
};

SpotifySwipe.propTypes = {
    darken: PropTypes.bool,
    spotifyID: PropTypes.string,
};

export default SpotifySwipe;
