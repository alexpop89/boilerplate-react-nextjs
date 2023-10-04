import {MutableRefObject, useEffect} from 'react';

type Callback = () => void;
/**
 *  const Modal = ({ closeModal }) => {
 *      const modalRef = useRef();
 *      useClickOutside(modalRef, closeModal);
 *
 *      ...
 *
 *      return (
 *          <div ref={modalRef}>
 *              {Your modal content here or whatever}
 *          </div>
 *      );
 *  };
 */

const useClickOutside = (ref: MutableRefObject<HTMLElement | null>, callback: Callback): void => {
    useEffect(() => {
        const handleClickOutside = (event: Event): void => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
};

export default useClickOutside;