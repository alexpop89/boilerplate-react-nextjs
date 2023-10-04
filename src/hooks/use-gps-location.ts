import {Coordinates} from "@data-types/coordinates";
import {useState} from 'react';


/**
 * ONLY REQUEST COORDINATES IN RESPONSE TO A USER GESTURE IN ORDER TO AVOID
 * [Violation] Only request geolocation information in response to a user gesture.
 *
 * const App: React.FC = () => {
 *   const { coordinates, fetchLocation } = useGpsLocation();
 *
 *   return (
 *     <div>
 *       <button onClick={fetchLocation}>Get Location</button>
 *       <p>Latitude: {coordinates.latitude}</p>
 *       <p>Longitude: {coordinates.longitude}</p>
 *       {coordinates.error && <p>Error: {coordinates.error}</p>}
 *     </div>
 *   );
 * };
 */

type GPSCoordinates = Coordinates & {
    error: string | null;
}
type GPSCoordinatesResponse = {
    coordinates: GPSCoordinates
    fetchLocation: () => void
}

const useGpsLocation = (): GPSCoordinatesResponse => {
    const [coordinates, setCoordinates] = useState<GPSCoordinates>({
        latitude: null,
        longitude: null,
        error: null,
    });

    const fetchLocation = () => {
        const handlePosition = (position: GeolocationPosition) => {
            setCoordinates({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null,
            });
        };

        const handleError = (error: GeolocationPositionError) => {
            setCoordinates({
                latitude: null,
                longitude: null,
                error: error.message,
            });
        };

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(handlePosition, handleError);
        } else {
            setCoordinates({
                latitude: null,
                longitude: null,
                error: "Geolocation not supported",
            });
        }
    };

    return { coordinates, fetchLocation };
};

export default useGpsLocation;