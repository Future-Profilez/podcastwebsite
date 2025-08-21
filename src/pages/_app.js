import "@/styles/globals.css";
import "plyr/dist/plyr.css";
import "./style.css";
import { Toaster } from "react-hot-toast";
import { RoleProvider } from "@/context/RoleContext";
import NextNProgress from 'nextjs-progressbar';
import { AudioPlayerProvider } from "@/context/AudioPlayerContext";
import AudioPlyrClient from "@/components/AudioPlyrWrapper";

export default function App({ Component, pageProps }) {
  return <>
    <NextNProgress color="#CC2828" />
    <Toaster
      toastOptions={{
        position: "top-right",
        className: "",
        style: {
          fontSize: "14px", // Corrected "font-size" to camelCase as required in JSX styles
        },
      }}
    />
    <RoleProvider>

      <AudioPlayerProvider>
        <Component {...pageProps} />
        <AudioPlyrClient />
      </AudioPlayerProvider>
    </RoleProvider>
  </>;
}