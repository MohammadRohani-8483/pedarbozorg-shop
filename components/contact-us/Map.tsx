'use client'
import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import Link from 'next/link'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'

const Map = () => {
    const [start, setStart] = useState(false)
    useEffect(() => {
        setStart(true)
    }, [])

    return (
        <>
            {(window && start) ?
                <MapContainer zoomControl={false} center={[35.757761, 51.310101]} zoom={18} className='h-[293px] relative sm:h-[500px] rounded-2xl border border-[#E3E3E3] w-full !z-0'>
                    <ZoomControl position='bottomright' />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Link target="_blank" rel="noopener noreferrer"
                        href='https://www.google.com/maps/place/%D9%81%D8%B1%D9%88%D8%B4%DA%AF%D8%A7%D9%87+%D8%B1%D9%88%D8%BA%D9%86+%D8%8C%D8%A7%D8%AF%D9%88%DB%8C%D9%87+%D9%88+%D9%85%D9%88%D8%A7%D8%AF+%D8%BA%D8%B0%D8%A7%DB%8C%DB%8C+%D8%A7%D8%B1%DA%AF%D8%A7%D9%86%DB%8C%DA%A9+%D9%BE%D8%AF%D8%B1%D8%A8%D8%B2%D8%B1%DA%AF%E2%80%AD/@35.7577439,51.3101314,20.75z/data=!4m6!3m5!1s0x3f8dfd7b8a91b0cd:0x9366b7d3f3454e07!8m2!3d35.7577668!4d51.3099869!16s%2Fg%2F11jg5s6rl_?entry=ttu'
                        className='flex py-2 px-4 gap-4 justify-center items-center text-secondry-base bg-white hover:bg-background rounded-lg border border-secondry-base !text-secondry-base absolute bottom-[10px] left-[10px] z-[1000]'
                    >
                        باز کردن در نقشه
                    </Link>
                </MapContainer>
                :
                <></>
            }
        </>
    )
}

export default Map