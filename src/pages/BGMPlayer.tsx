import { useState, useRef, useEffect } from "react";
import { Music, Pause } from "lucide-react";

const BGMPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // 嘗試自動播放音樂
    const audio = audioRef.current;
    if (audio) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // 如果瀏覽器允許自動播放，則更新播放狀態
            setIsPlaying(true);
          })
          .catch((error) => {
            // 如果瀏覽器禁止自動播放，則在主控台顯示提示，並讓使用者手動播放
            console.log("背景音樂自動播放被瀏覽器阻止，這是正常行為。", error);
          });
      }
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/普門有茶，清者自清.mp3" loop />
      <button
        onClick={togglePlayPause}
        className="fixed bottom-5 left-5 z-[9998] w-12 h-12 bg-primary/80 text-primary-foreground rounded-full shadow-lg flex items-center justify-center backdrop-blur-sm transition-all hover:bg-primary hover:scale-110"
        aria-label={isPlaying ? "暫停音樂" : "播放音樂"}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Music className="w-6 h-6" />
        )}
      </button>
    </>
  );
};

export default BGMPlayer;