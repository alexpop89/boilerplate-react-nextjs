import {useEffect} from 'react';

/**
 * const MyButton = () => {
 *   const sendEvent = useGoogleAnalyticsEvent();
 *
 *   const handleClick = () => {
 *     // Do something
 *     sendEvent({ category: 'User', action: 'Clicked Button', label: 'My Button' });
 *   };
 *
 *   return (
 *     <button onClick={handleClick}>Click me!</button>
 *   );
 * };
 */

type EventParams = {
    category: string;
    action: string;
    label?: string;
    value?: number;
};

const useGoogleAnalyticsEvent = () => {
    useEffect(() => {
        if (typeof window === 'undefined' || !('ga' in window)) {
            console.warn('Google Analytics is not initialized');
            return;
        }
    }, []);

    const sendEvent = ({category, action, label, value}: EventParams) => {
        // @ts-ignore
        if (typeof window !== 'undefined' && window.gtag) {
            // @ts-ignore
            window.gtag('send', 'event', category, action, label, value);
        }
    };

    return sendEvent;
};

export default useGoogleAnalyticsEvent