import { useRef } from "react";
import KuruKuru from "./sound/kuru-kuru.mp3"
import "./App.css"
import Herta from "./image/herta.gif"
import { useState } from "react";
import { motion } from "framer-motion"
// import { Dialog, Transition } from '@headlessui/react'
// import { Fragment } from 'react'


export const App = () => {

    const [clickCount, setClickCount] = useState(0);
    const audioRef = useRef(null);
    // let [isOpen, setIsOpen] = useState(true)

    // function closeModal() {
    //     setIsOpen(false)
    // }

    // if (clickCount === 3) {
    //     return (
    //         <>
    //             <Transition appear show={isOpen} as={Fragment}>
    //                 <Dialog as="div" className="relative z-10" onClose={closeModal}>
    //                     <Transition.Child
    //                         as={Fragment}
    //                         enter="ease-out duration-300"
    //                         enterFrom="opacity-0"
    //                         enterTo="opacity-100"
    //                         leave="ease-in duration-200"
    //                         leaveFrom="opacity-100"
    //                         leaveTo="opacity-0"
    //                     >
    //                         <div className="fixed inset-0 bg-black bg-opacity-25" />
    //                     </Transition.Child>

    //                     <div className="fixed inset-0 overflow-y-auto">
    //                         <div className="flex min-h-full items-center justify-center p-4 text-center">
    //                             <Transition.Child
    //                                 as={Fragment}
    //                                 enter="ease-out duration-300"
    //                                 enterFrom="opacity-0 scale-95"
    //                                 enterTo="opacity-100 scale-100"
    //                                 leave="ease-in duration-200"
    //                                 leaveFrom="opacity-100 scale-100"
    //                                 leaveTo="opacity-0 scale-95"
    //                             >
    //                                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
    //                                     <Dialog.Title
    //                                         as="h3"
    //                                         className="text-lg font-medium leading-6 text-gray-900"
    //                                     >
    //                                         Payment successful
    //                                     </Dialog.Title>
    //                                     <div className="mt-2">
    //                                         <p className="text-sm text-gray-500">
    //                                             Your payment has been successfully submitted. We’ve sent
    //                                             you an email with all of the details of your order.
    //                                         </p>
    //                                     </div>

    //                                     <div className="mt-4">
    //                                         <button
    //                                             type="button"
    //                                             className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    //                                             onClick={closeModal}
    //                                         >
    //                                             Got it, thanks!
    //                                         </button>
    //                                     </div>
    //                                 </Dialog.Panel>
    //                             </Transition.Child>
    //                         </div>
    //                     </div>
    //                 </Dialog>
    //             </Transition>
    //         </>

    //     )
    // }

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
                <h2>Kuru Kururin</h2>
                <hr />
                <h4>Click For The Kuru Kururin No Limit</h4>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: "5px",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <span>
                    Jumlah Klik : {clickCount}
                </span>
            </div>
            <div className="parentButton">
                <button onClick={HandleClickPlay}>PLAY</button>
                <button onClick={HandleClickStop}>STOP</button>
            </div>
            <audio ref={audioRef} src={KuruKuru} onEnded={HandleStop} />
            {[...Array(clickCount)].map((_, index) => (<motion.img
                className="kururin"
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
