import React from "react";
import PropTypes from "prop-types";
import WebView from "react-native-webview";
import { Platform } from "react-native";

function SpotifyEmbed(props) {
    const darken = props.darken ? "0" : "1";
    const url = `https://open.spotify.com/embed/playlist/${props.spotifyID}?theme=${darken}`;

    const source = `<iframe
                        src=${url}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>`;

    console.log(Platform.OS);

    return (Platform.OS !== "web" ? (
        <WebView
            originWhitelist={["*"]}
            source={{ html: source }}
            scalesPageToFit={false}
            style={{ height: "100%" }}
        />
    ) : (
        <iframe
            src={url}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
    ));
}

SpotifyEmbed.defaultProps = {
    darken: false,
    spotifyID: "",
};

SpotifyEmbed.propTypes = {
    darken: PropTypes.bool,
    spotifyID: PropTypes.string,
};

export default SpotifyEmbed;
