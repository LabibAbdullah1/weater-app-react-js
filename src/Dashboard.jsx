import { Link } from 'react-router';
import { getGeo } from './api/cuaca';
import React from 'react';
import './index.css'

export default function Dashboard() {
    const [city, setCity] = React.useState('');
    const [region, setRegion] = React.useState('');
    const [lon, setLon] = React.useState('');
    const [lat, setLat] = React.useState('');


    const MAP_WEATHER = {
        Clear: "./images/clear.png",
        Clouds: "./images/clouds.png",
        Drizzle: "./images/drizzle.png",
        Foggy: "./images/foggy.png",
        Mist: "./images/mist.png",
        Rain: "./images/rain.png",
        Snow: "./images/snow.png",
        Thunderstrom: "./images/thunderstrom.png",
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const geoLoc = await getGeo(city);
        setRegion(geoLoc[0].state);
        setCity(geoLoc[0].name);
        setLon(geoLoc[0].lon);
        setLat(geoLoc[0].lat);
        console.log(geoLoc);
    }

    return (
        <>
            <div className='min-h-screen w-full bg-blue-100 items-center pt-[60px] flex flex-col relative'>
                <button type='button' className='absolute top-5 left-5 shadow-lg'>
                    <Link
                        to='/'
                        className='bg-blue-500 mx-auto text-white px-3 py-2 rounded hover:bg-blue-600 cursor-pointer transition mt-3 block'
                    >
                        Kembali ke Beranda
                    </Link>
                </button>
                <h1 className='font-bold text-3xl pt-5 text-neutral-900'>Halaman Dashboard</h1>


                <form className='flex justify-center mb-10 mt-5' onSubmit={handleSubmit}>
                    <input onChange={(e) => setCity(e.target.value)} type="text" className='border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500' placeholder='Cari lokasi...' />
                    <button type='submit' className='bg-blue-500 shadow-lg text-white px-3 py-2 rounded ml-2 hover:bg-blue-600 cursor-pointer transition'>Cari</button>
                </form>

                <div className='bg-white shadow-md rounded-lg p-6 w-80 text-center'>
                    <h2 className='text-2xl font-semibold mb-4'>Lokasi Terpilih</h2>
                    <p className='text-lg text-gray-700'>Kota : {city}</p>
                    <p className='text-lg text-gray-700'>Provinsi : {region}</p>
                    <p className='text-lg text-gray-700'>Longitude : {lon}</p>
                    <p className='text-lg text-gray-700'>Latitude : {lat}</p>
                </div>

            </div>
        </>
    );
}

