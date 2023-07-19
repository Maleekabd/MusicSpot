import { useRef } from "react";
import KuruKuru from "./sound/kuru-kuru.mp3"
import "./App.css"
import Herta from "./image/herta.gif"
import { useState } from "react";
import { motion } from "framer-motion"


export const App = () => {

    const [clickCount, setClickCount] = useState(0);

    const imageVariants = {
        hidden: {
            opacity: 0,
            x: "100%",
        },
        visible: {
            opacity: 1,
            x: "0%",
            transition: {
                duration: 0.5,
            },
        },
    };


    const audioRef = useRef(null);

    const HandleClickPlay = () => {
        setClickCount(clickCount + 1)
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    }
    const HandleClickStop = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setClickCount(0)
        }
    }

    const HandleStop = () => {
        if (audioRef.current.ended) {
            setClickCount(0);
        }
    }


    return (
        <div style={{
            position: "relative"
        }}>
            <div className="parent" style={{
                position: "sticky",
                top: "0",

            }}>
                <h1>Kuru Kururin</h1>
                <hr />
                <h2>Click For The Kuru Kururin No Limit</h2>
            </div>

            <div className="parentButton">
                <button onClick={HandleClickPlay}>PLAY</button>
                <button onClick={HandleClickStop}>STOP</button>
            </div>
            <audio ref={audioRef} src={KuruKuru} onEnded={HandleStop} />

            {[...Array(clickCount)].map((_, index) => (<motion.img
                key={index}
                src={Herta}
                alt="Herta"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                style={{ marginLeft: "20px", width: "200px", height: "200px" }}
            />))
            }

        </div>
    );
}
