import MusicAlbum from "./pages/MusicAlbum";
import { WhistlistProvider } from "./Store/whistlistContext";
import Whistlist from "./pages/whistlist";


export const App = () => {


    return (
        <WhistlistProvider>
            <div style={{
                position: "relative"
            }}>
                {/* <div className="parent" style={{
                position: "sticky",
                top: "0",

            }}>
                <h2>Kuru Kururin</h2>
            </div> */}


                {/* use Reducer Tutorial */}

                {/* <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: "5px",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <span>
                    Ini dari click count :  {clickCount}
                    <UseReducerExcercise />
                </span>
            </div> */}
                <div>
                    <MusicAlbum />
                    <Whistlist />
                </div>
                {/* <div className="parentButton">
                <button onClick={HandleClickPlay}>PLAY</button>
                <button onClick={HandleClickStop}>STOP</button>
            </div> */}
                {/* <audio ref={audioRef} src={KuruKuru} onEnded={HandleStop} /> */}
                {/* {[...Array(clickCount)].map((_, index) => (<motion.img
                className="kururin"
                key={index}
                src={Herta}
                alt="Herta"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                style={{ marginLeft: "20px", width: "200px", height: "200px" }}
            />))
            } */}
            </div>
        </WhistlistProvider>
    );
}
