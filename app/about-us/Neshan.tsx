import { useEffect, useRef, useState } from "react"
import { Map, View } from "@neshan-maps-platform/ol"
import NeshanMap, { NeshanMapRef } from "@neshan-maps-platform/react-openlayers"

function Neshan() {
    const mapRef = useRef<NeshanMapRef | null>(null)

    // const onInit = (map: Map) => {
    //     map.setMapType("dreamy")
    //     map.switchTrafficLayer(true)
    // }

    const [zoom, setZoom] = useState(18)

    const handleZoomIn = () => {
        setZoom(zoom + 1);
    };

    const handleZoomOut = () => {
        setZoom(Math.max(zoom - 1, 0)); // Prevent negative zoom
    };

    const setMapZoom = (map: Map, newZoom: number) => {
        const view = new View({
            zoom: newZoom,
        });
        map.setView(view);
    };

    const onInit = (map: Map) => {
        map.setMapType("dreamy");
        map.switchTrafficLayer(true);
        // setMapZoom(map, zoom); // Set initial zoom level
    };

    useEffect(() => {
        if (mapRef.current?.map) {
          setMapZoom(mapRef.current.map, zoom);
        }
      }, [zoom]);

    useEffect(() => {
        if (mapRef.current?.map) {
            mapRef.current?.map.switchTrafficLayer(true)
            mapRef.current?.map.setMapType("dreamy")
        }
    }, [])

    return (
        <div style={{ width: "100vh" }} className='relative'>
            <NeshanMap
                className="map-container"
                ref={mapRef}
                mapKey="web.90bab6c164df494389844fe9e3718431"
                defaultType="dreamy"
                center={{ latitude: 35.757761, longitude: 51.310101 }}
                style={{ height: "50vh", width: "100%" }}
                onInit={onInit}
                zoom={zoom}
                traffic={false}
                scale={2}
            />
            <div
                onClick={handleZoomIn}
                className="absolute p-4 bg-gray-300 text-white left-0"
            >
                +
            </div>
            <div
                onClick={handleZoomOut}
                className="absolute p-4 bg-gray-300 text-white right-0"
            >
                -
            </div>
        </div>
    )
}

export default Neshan