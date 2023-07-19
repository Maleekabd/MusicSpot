// import "./App.css";
// import { Suspense, useRef, useState } from "react";
// import { MotionConfig } from "framer-motion";
// import { Shapes } from "./shapes";
// import { transition } from "./settings";
// import useMeasure from "react-use-measure";
// import KuruKuru from "./sound/kuru-kuru.mp3"
// import {
//     motion,
//     useMotionValue

// } from "framer-motion"

// export const Apps = () => {
//     const [ref, bounds] = useMeasure({ scroll: false });
//     const [isHover, setIsHover] = useState(false);
//     const [isPress, setIsPress] = useState(false);
//     const mouseX = useMotionValue(0);
//     const mouseY = useMotionValue(0);
//     const audioRef = useRef(null)

//     const HandleClick = () => {
//         if (audioRef.current) {
//             audioRef.current.currentTime = 0;
//             audioRef.current.play();
//         }
//     }

//     const resetMousePosition = () => {
//         mouseX.set(0);
//         mouseY.set(0);
//     };

//     return (
//         <>
//             <MotionConfig transition={transition}>
//                 <motion.button
//                     onClick={HandleClick}
//                     ref={ref}
//                     initial={false}
//                     animate={isHover ? "hover" : "rest"}
//                     whileTap="press"
//                     variants={{
//                         rest: { scale: 1 },
//                         hover: { scale: 1.5 },
//                         press: { scale: 1.4 }
//                     }}
//                     onHoverStart={() => {
//                         resetMousePosition();
//                         setIsHover(true);
//                     }}
//                     onHoverEnd={() => {
//                         resetMousePosition();
//                         setIsHover(false);
//                     }}
//                     onTapStart={() => setIsPress(true)}
//                     onTap={() => setIsPress(false)}
//                     onTapCancel={() => setIsPress(false)}
//                     onPointerMove={(e) => {
//                         mouseX.set(e.clientX - bounds.x - bounds.width / 2);
//                         mouseY.set(e.clientY - bounds.y - bounds.height / 2);
//                     }}
//                 >
//                     <motion.div
//                         className="shapes"
//                         variants={{
//                             rest: { opacity: 0 },
//                             hover: { opacity: 1 }
//                         }}
//                     >
//                         <div className="pink blush" />
//                         <div className="blue blush" />
//                         <div className="container">
//                             <Suspense fallback={null}>
//                                 <Shapes
//                                     isHover={isHover}
//                                     isPress={isPress}
//                                     mouseX={mouseX}
//                                     mouseY={mouseY}
//                                 />
//                             </Suspense>
//                         </div>
//                     </motion.div>
//                     <motion.div
//                         variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
//                         className="label"
//                     >
//                         play
//                     </motion.div>
//                 </motion.button>
//                 <audio ref={audioRef} src={KuruKuru} />
//             </MotionConfig>
//         </>
//     );
// }

// export const App = () => {
//     return (
//         <>
//             <div>
//                 <h1>KURU KURU RINGGG</h1>
//                 <hr />
//             </div>

//             <div>
//                 <Apps />
//             </div>
//         </>
//     )
// }




// // import { useState } from 'react';
// // import './App.css';
// // import Data from "./data.json"
// // import { motion } from 'framer-motion';

// // export const List = ({ data }) => {
// //     return (
// //         <div>
// //             {data.map((item, index) => (
// //                 <div className='mobile' key={index} style={{
// //                     backgroundColor: "firebrick",
// //                     padding: "10px",
// //                     margin: "10px",
// //                     borderRadius: "7px",
// //                     display: 'flex',
// //                     color: "white",
// //                     justifyContent: "space-between"
// //                 }}>
// //                     <div style={{
// //                         display:"flex",
// //                         flexDirection : "row",
// //                         flexWrap : "wrap",
// //                         alignItems:"center",
// //                         gap:"40px"
// //                     }}>
// //                         <div>
// //                             <h3>{item.id}.</h3>
// //                         </div>
// //                         <div>
// //                             <h3>{item.name}</h3>
// //                             <span>Rp. {item.harga}</span>
// //                         </div>
// //                     </div>
// //                     <Button id={item.id} data={data} />
// //                 </div>
// //             ))}
// //         </div>
// //     )
// // }

// // export const Button = ({ id, data }) => {
// //     const [Data, SetData] = useState(data);
// //     console.log(Data);
// //     const HapusItem = (id) => {
// //         const newItem = data.filter(item => item.id === id);
// //         SetData(newItem);
// //     }

// //     const Edit = (id) => {
// //         const data = [...Data];
// //         const foundData = data.find(item => item.id === id);
// //         console.log(foundData);
// //         SetData({ id: foundData.id, name: foundData.name, harga: foundData.harga })
// //     }
// //     return (
// //         <div style={{ display: "flex", alignItems: "center" }}>
// //             <button onClick={() => {
// //                 HapusItem(id)
// //                 console.log("berhasil terhapus");
// //             }} type='button' style={{
// //                 height: "30px",
// //                 cursor: "pointer",
// //                 width: "100px",
// //                 margin: "5px",
// //                 borderRadius: "8px",
// //                 border: "none"
// //             }}>Delete</button>
// //             <button type='button' onClick={() => Edit(id)} style={{
// //                 height: "30px",
// //                 cursor: "pointer",
// //                 width: "100px",
// //                 margin: "5px",
// //                 borderRadius: "8px",
// //                 border: "none"
// //             }}>Edit</button>
// //         </div>
// //     )
// // }

// // export const Title = () => {
// //     return (
// //         <div style={{ textAlign: 'center', fontSize: "25px", borderBottom: "groove", borderBottomColor: "black" }}>
// //             <motion.h3 initial={{ y: -100 }} animate={{
// //                 y: 20,
// //                 fontSize: "40px"
// //             }}>Toko Gitar</motion.h3>
// //         </div>
// //     )
// // }


// // // CRUD (Create, Read, Update, Delete)

// // export const Create = () => {
// //     const [produk, SetProduk] = useState(Data)
// //     const [Gitar, SetNewGitar] = useState("")
// //     const [Harga, SetHarga] = useState(0)
// //     const [Id, SetId] = useState(0)

// //     const HandleSubmit = (e) => {
// //         e.preventDefault()
// //         const Data = [...produk]

// //         Data.push({
// //             id: Number(Id),
// //             name: String(Gitar),
// //             harga: Number(Harga)
// //         })
// //         SetProduk(Data);
// //     }


// //     return (
// //         <div>
// //             <div style={{ textAlign: 'center', fontSize: "25px" }}>
// //                 <motion.h3 initial={{ y: -100 }} animate={{
// //                     y: 20,
// //                     fontSize: "40px"
// //                 }}>Tambah Produk </motion.h3>
// //             </div>
// //             <form onSubmit={HandleSubmit} style={{
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 margin: "20px",
// //                 padding: "5px"
// //             }}>
// //                 <input style={{
// //                     padding: "10px",
// //                     margin: "5px",
// //                     borderRadius: "7px",
// //                     border: "none"
// //                 }} type='text' onChange={(e) => SetId(e.target.value)} placeholder='ID...' />
// //                 <input style={{
// //                     padding: "10px",
// //                     margin: "5px",
// //                     borderRadius: "7px",
// //                     border: "none"
// //                 }} type='text' onChange={(e) => SetNewGitar(e.target.value)} placeholder='Nama Produk...' />
// //                 <input onChange={(e) => SetHarga(e.target.value)} style={{
// //                     padding: "10px",
// //                     margin: "5px",
// //                     borderRadius: "7px",
// //                     border: "none"
// //                 }} type='text' placeholder='Harga...' />
// //                 <motion.button animate={{
// //                     padding: "10px",
// //                     margin: "5px",
// //                     borderRadius: "7px",
// //                     border: "none"
// //                 }} type='submit'>
// //                     Tambah Produk
// //                 </motion.button>
// //                 <div>
// //                     <motion.h3 initial={{ y: -100 }} animate={{
// //                         y: 20,
// //                         fontSize: "40px"
// //                     }}>Produk Kami</motion.h3>
// //                 </div>
// //                 <List data={produk} />
// //             </form>
// //         </div>
// //     )
// // }


// // export const HomePage = () => {

// //     return (
// //         <>
// //             <Title />
// //             <Create />
// //         </>
// //     )
// // }


// // function App() {
// //     return (
// //         <div className='App'>
// //             <HomePage />
// //         </div>
// //     );
// // }

// // export default App;
