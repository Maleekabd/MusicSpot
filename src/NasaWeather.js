import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {

    const ArrTahun = [2015, 2016, 2017, 2020, 2021, 2022, 2023];
    const [data, setData] = useState(null);
    const validity_checks = data;

    const tahun = ArrTahun.map(tahun => {
        return tahun;
    })

    try {
        useEffect(() => {
            const fetchData = async () => {
                const { data: weather } = await axios.get(`https://api.nasa.gov/EPIC/api/natural?api_key=1jcuPclZ39EMCYqUsexwbujM4esBkTXMotnPPyl8`);
                setData(weather);
            };
            fetchData();
        }, []);

        return (
            <div style={{
                backgroundColor: "black",
                height: "auto",
                color: "white",
                fontFamily: "Poppins",
            }}>
                {validity_checks.map((weather, index) => (
                    <div>
                        <div style={{
                            listStyleType: "none",
                        }} key={index}>
                            <div style={{
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignContent: "center",
                                    alignItems: "center"
                                }}>
                                    <img alt="TES" style={{
                                        width: "auto",
                                        height: "150px"
                                    }} src={`https://epic.gsfc.nasa.gov/archive/natural/${tahun[0]}/07/22/png/epic_1b_20150722130830.png`} />
                                    <img alt="TES" style={{
                                        width: "auto",
                                        height: "150px"
                                    }} src={`https://epic.gsfc.nasa.gov/archive/natural/${tahun[1]}/07/22/png/epic_1b_20160722010436.png`} />
                                    <img alt="TES" style={{
                                        width: "auto",
                                        height: "150px"
                                    }} src={`https://epic.gsfc.nasa.gov/archive/natural/${tahun[2]}/07/22/png/epic_1b_20170722005516.png`} />
                                    <img alt="TES" style={{
                                        width: "auto",
                                        height: "150px"
                                    }} src={`https://epic.gsfc.nasa.gov/archive/natural/${tahun[3]}/07/22/png/epic_1b_20200722001751.png`} />
                                    <img alt="TES" style={{
                                        width: "auto",
                                        height: "150px"
                                    }} src={`https://epic.gsfc.nasa.gov/archive/natural/${tahun[4]}/07/22/png/epic_1b_20210722000831.png`} />
                                    <img alt="TES" style={{
                                        width: "auto",
                                        height: "150px"
                                    }} src={`https://epic.gsfc.nasa.gov/archive/natural/${tahun[5]}/07/22/png/epic_1b_20220722002713.png`} />
                                    <img alt="TES" style={{
                                        width: "auto",
                                        height: "150px"
                                    }} src={`https://epic.gsfc.nasa.gov/archive/natural/${tahun[6]}/07/16/png/${weather.image}.png`} />
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    } catch (error) {
        console.log(error);
    }
}

export default App;