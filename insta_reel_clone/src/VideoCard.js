import React , {useState, useRef} from 'react';
import './VideoCard.css';
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideoCard({url, channel, avatarSrc, likes, shares, song }) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef= useRef(null);

    const onVideoPress = () => {
     if (isVideoPlaying) {
         // stop
         videoRef.current.pause();
         setIsVideoPlaying(false)

     } else {
         // play
         videoRef.current.play();
         setIsVideoPlaying(true)
     }

 } ;   // useState
    // useRef
 
    return (
        <div className="videoCard">
            <VideoHeader />
            <video
            ref={videoRef}
            onClick={onVideoPress}
            className='videoCard__player'
                src='https://scontent-lga3-1.cdninstagram.com/v/t50.2886-16/120326782_203749277835195_31477743277590724_n.mp4?_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=RPerFQAS0NcAX_EBw3K&oe=5F7327F0&oh=c741c43d5a763be90edfdfcb27e495ed&dl=1'
                alt="IG reel video"
                loop
            />
            <VideoFooter 
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
            />
        </div>
    )
}

export default VideoCard;
