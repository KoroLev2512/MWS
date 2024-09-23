import React from "react";
import { IconProps } from "./types";

const VideoPlayIcon = ({}: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="20" fill="white" fillOpacity="0.8" />
            <path d="M16 26.5V14L24 20L16 26.5Z" fill="#0088FF" stroke="#0088FF" />
        </svg>
    );
};

export default VideoPlayIcon;