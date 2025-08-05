import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useAudioPlayer } from "@/context/AudioPlayerContext";
import { useRef } from "react";
import { FaBackward, FaForward } from "react-icons/fa";

export default function AudioPlyr() {
  const { selectedEpisode, setIsPlaying } = useAudioPlayer();
  const playerRef = useRef(null);

  const forward = () => {
    const player = playerRef.current.audio.current;
    if (player) player.currentTime += 10;
  };

  const backward = () => {
    const player = playerRef.current.audio.current;
    if (player) player.currentTime -= 10;
  };

  if (!selectedEpisode?.link) return null;

  return (
    <AudioPlayer
      ref={playerRef}
      src={selectedEpisode.link}
      autoPlay
      showJumpControls={false}
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
      customAdditionalControls={[
        <button className="custom-skip-btn" onClick={backward} key="backward">
          <FaBackward />
        </button>,
        <button className="custom-skip-btn" onClick={forward} key="forward">
          <FaForward />
        </button>,
      ]}
      className="rounded-lg"
    />
  );
}