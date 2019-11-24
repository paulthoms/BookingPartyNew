import React, { useState, Fragment } from "react";
import { useAdminContext } from './context/useAdminContext';


import {
    useLoadScript,
    GoogleMap,
    Marker,
    InfoWindow
} from "@react-google-maps/api";

function MapPickPosition() {
    const [mapRef, setMapRef] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [markerMap, setMarkerMap] = useState({});
    const [center, setCenter] = useState({ lat: 21.040432, lng: 105.782250 });
    const [zoom, setZoom] = useState(12);
    const [clickedLatLng, setClickedLatLng] = useState(null);
    const [infoOpen, setInfoOpen] = useState(false);

    const {
        updateMapPicker
    } = useAdminContext();

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: ""
    });

    // var myPlaces = [
    //   { id: "place1", pos: { lat: 21.040432, lng: 105.782250 } },
    // ];

    const [myPlaces, setMyPlaces] = useState([{ id: "place1", pos: { lat: 21.040432, lng: 105.782250 } },]);

    const fitBounds = map => {
        const bounds = new window.google.maps.LatLngBounds();
        myPlaces.map(place => {
            bounds.extend(place.pos);
            return place.id;
        });
        map.fitBounds(bounds);
    };

    const loadHandler = map => {
        setMapRef(map);
        fitBounds(map);
    };


    const markerLoadHandler = (marker, place) => {
        return setMarkerMap(prevState => {
            return { ...prevState, [place.id]: marker };
        });
    };

    const markerClickHandler = (event, place) => {
        setSelectedPlace(place);
        if (infoOpen) {
            setInfoOpen(false);
        }

        setInfoOpen(true);

        if (zoom < 13) {
            setZoom(12);
        }

    };


    function handlePushPostion(value) {
        setClickedLatLng(value);
        console.log(value);
        setMyPlaces(
            [{ id: "place", pos: { lat: value.lat, lng: value.lng } }]
        )
        updateMapPicker([{ id: "place", pos: { lat: value.lat, lng: value.lng } }]);
    }

    const renderMap = () => {
        return (
            <Fragment>
                <GoogleMap
                    onLoad={loadHandler}
                    onCenterChanged={() => setCenter(mapRef.getCenter().toJSON())}
                    onClick={e => handlePushPostion(e.latLng.toJSON())}
                    center={center}
                    zoom={zoom}
                    mapContainerStyle={{
                        height: "70vh",
                        width: "100%"
                    }}
                >
                    {myPlaces.map(place => (
                        <Marker
                            key={place.id}
                            position={place.pos}
                            onLoad={marker => markerLoadHandler(marker, place)}
                            onClick={event => markerClickHandler(event, place)}
                            icon={{
                                // path:
                                //   "M12.75 0l-2.25 2.25 2.25 2.25-5.25 6h-5.25l4.125 4.125-6.375 8.452v0.923h0.923l8.452-6.375 4.125 4.125v-5.25l6-5.25 2.25 2.25 2.25-2.25-11.25-11.25zM10.5 12.75l-1.5-1.5 5.25-5.25 1.5 1.5-5.25 5.25z",
                                // fillColor: "#0000ff",
                                // fillOpacity: 1.0,
                                // strokeWeight: 0,
                                // scale: 1.25
                            }}
                        />
                    ))}

                    {infoOpen && selectedPlace && (
                        <InfoWindow
                            anchor={markerMap[selectedPlace.id]}
                            onCloseClick={() => setInfoOpen(false)}
                        >
                            <div>
                                <h3>{selectedPlace.id}</h3>
                                <div>This is your info window content</div>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>

                {clickedLatLng && (
                    <h3>
                        You clicked: {clickedLatLng.lat}, {clickedLatLng.lng}
                    </h3>
                )}

            </Fragment>
        );
    };

    return isLoaded ? renderMap() : null;
}


export default MapPickPosition;