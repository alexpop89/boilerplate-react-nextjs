import {useEffect, useState} from 'react';

/**
 *  const App: React.FC = () => {
 *      const { pathname, search, hash } = useLocation();
 *  }
 */

type LocationState = {
    pathname: string;
    search: string;
    hash: string;
};

const useLocation = (): LocationState => {
    const [location, setLocation] = useState<LocationState>({
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
    });

    useEffect(() => {
        const handleLocationChange = () => {
            setLocation({
                pathname: window.location.pathname,
                search: window.location.search,
                hash: window.location.hash,
            });
        };

        // Listen to popstate event (triggered by actions like clicking the browser back button)
        window.addEventListener('popstate', handleLocationChange);

        return () => {
            window.removeEventListener('popstate', handleLocationChange);
        };
    }, []);

    return location;
};

export default useLocation;