import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import Sidebar from '../components/sidebar';
import Eminem from "../image/eminem.png";
import { MdVerified } from "react-icons/md"
import { UseWhistlistContext } from '../Store/whistlistContext';
import { options } from '../options';
const MusicAlbum = () => {

    const [music, SetMusic] = useState([]);
    const [loading, setLoading] = useState(true);
    const song_performances = music?.data?.album?.song_performances || [];

    const { addToWhistlist } = UseWhistlistContext();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options);
                SetMusic(response);
                setLoading(false);

            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            {loading ?
                (<div>
                    loading...
                </div>) : (
                    <Sidebar>
                        <div>
                            <header className='sticky top-6 z-50'>
                                <nav>
                                    <form>
                                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                        <div class="relative">
                                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                            </div>
                                            <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Song..." required />
                                            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                        </div>
                                    </form>

                                </nav>
                            </header>
                            <ul>
                                <li className='flex relative justify-between bg-rose-300 w-full mt-28 h-72 rounded-lg'>
                                    <div className='w-6/12 flex items-start justify-center flex-col pb-10'>
                                        <div className='flex items-center justify-start ml-28'>
                                            <MdVerified className='w-6 h-6' />
                                            <h2 className='text-lg'>
                                                Verified Artist
                                            </h2>
                                        </div>
                                        <div>
                                            <div className='flex flex-col items-center justify-start ml-28'>
                                                <h1 className='text-6xl font-bold tracking-wide'>
                                                    Eminem
                                                </h1>
                                                <h3 className='text-lg'>
                                                    47,792,269 Monthly Listener
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <img className='mr-32 absolute bottom-0 right-0' width={250} height={250} src={Eminem} />
                                </li>
                            </ul>
                            {song_performances.map((song, index) => (
                                <ul style={{
                                    listStyleType: "none"
                                }} key={index}>

                                    <li style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "start",
                                        alignItems: "start",
                                        gap: "5px"
                                    }}>
                                        <div>
                                            <h2 style={{
                                                textAlign: "center",
                                                backgroundColor: "white",
                                                padding: "10px",
                                                marginTop: "20px",
                                                borderRadius: "8px"
                                            }}>{song.label}</h2>
                                        </div>
                                        <div>
                                            <div style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                flexWrap: "wrap"
                                            }}>
                                                {song.artists.map((p) => (
                                                    <ul style={{
                                                        listStyleType: "none",
                                                    }} key={p.id}>
                                                        <li>
                                                            <div style={{
                                                                display: "flex",
                                                                backgroundColor: "white",
                                                                background: 'rgba(255, 255, 255, 0.6)',
                                                                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                                                                backdropFilter: 'blur(11px)',
                                                                WebkitBackdropFilter: 'blur(11px)',
                                                                borderRadius: '10px',
                                                                border: '1px solid rgba(255, 255, 255, 0.18)',
                                                                padding: "5px",
                                                                alignItems: "center",
                                                                justifyContent: "space-between",
                                                                width: "250px",
                                                                height: "100px",
                                                                margin: "5px"
                                                            }}>
                                                                <div>
                                                                    <a href={p.url}>
                                                                        <img style={{
                                                                            borderRadius: "10px"
                                                                        }} alt={p.name} width={50} height={50} src={p.image_url} />
                                                                    </a>
                                                                </div>
                                                                <div>
                                                                    <h5 style={{
                                                                        margin: "10px",
                                                                        textAlign: "left",
                                                                    }}>{p.name}</h5>
                                                                </div>
                                                                <div className=''>
                                                                    <button className='flex items-center justify-center' onClick={() => addToWhistlist(p)}>
                                                                        {
                                                                            <AiOutlineHeart style={{
                                                                                width: "25px",
                                                                                height: "25px"
                                                                            }}
                                                                            />}
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                ))}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </Sidebar>
                )}
        </div>
    )
}

export default MusicAlbum