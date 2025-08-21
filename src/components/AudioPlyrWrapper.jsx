// components/AudioPlyrWrapper.js
import dynamic from "next/dynamic";

const AudioPlyr = dynamic(() => import("./AudioPlyr"), { ssr: false });

export default AudioPlyr;
