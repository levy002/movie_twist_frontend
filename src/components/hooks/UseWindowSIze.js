import { useEffect, useState } from 'react';

export const useWindowSize = () => {

    const getWindowSize = () => {
        const { innerWidth } = window;
        return { innerWidth };
    };

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return windowSize.innerWidth;
}