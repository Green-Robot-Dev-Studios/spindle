import React from "react";
import PropTypes from "prop-types";
import { Surface } from "react-native-paper";
import SpotifyEmbed from "./SpotifyEmbed";
import { moderateScale, moderateVerticalScale, scale, verticalScale } from "react-native-size-matters";

function SpotifyCard(props) {
    return (
        <Surface
            style={{
                flex: 1,
                margin: scale(20),
                borderRadius: moderateScale(5),
                overflow: "hidden",
                elevation: 6,
                height: verticalScale(500)
            }}
        >
            <SpotifyEmbed {...props} />
        </Surface>
    );
}

SpotifyCard.defaultProps = {
    darken: false,
    spotifyID: "",
};

SpotifyCard.propTypes = {
    darken: PropTypes.bool,
    spotifyID: PropTypes.string,
};

export default SpotifyCard;
