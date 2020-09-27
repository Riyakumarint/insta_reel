import React from 'react';
import './VideoHeader.css';
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

function VideoHeader() {
    return (
        <div className="videoHeader">
            <ArrowBackIosIcon /> 
            <h3>Reels</h3>
            <CameraAltIcon />
        </div>
    )
}

export default VideoHeader
