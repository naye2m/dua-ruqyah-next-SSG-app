








import React, { useState, useEffect, useRef } from 'react';

const AudioPlayer = ({ audio, duration, onPlayPause, onProgressChange, onShuffle, audioState, shuffleState, progressRef }) => {
    const [progressVisibility, setProgressVisibility] = useState("hidden");

    return <>
    <div className="flex items-center gap-3">
        <img src="https://duaruqyah.com/assets/others/audiobtn.svg" alt="play/pause" />
    </div>
    </>

    return (
        <div className="flex items-center gap-3">
            <audio src={audio} ref={progressRef} />
            <img
                className="cursor-pointer"
                src={`https://duaruqyah.com/assets/others/${audioState ? "pause" : "audiobtn"}.svg`}
                alt="Play/Pause"
                onClick={() => {
                    onPlayPause();
                    setProgressVisibility(progressVisibility === "hidden" ? "block" : "hidden");
                }}
            />
            <input
                type="range"
                className={progressVisibility}
                min={0}
                max={duration}
                onChange={onProgressChange}
                ref={progressRef}
            />
            <img
                className="cursor-pointer"
                src={`https://duaruqyah.com/assets/memorize/${shuffleState === "activeShuffle" ? "shuffle-white" : "shuffle"}.svg`}
                alt="Shuffle"
                onClick={onShuffle}
            />
        </div>
    );
};









export default AudioPlayer;
