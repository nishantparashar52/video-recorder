import React, { useRef} from "react";

export const useTimeout = (cb, delay) => {
    const savedCallback = useRef<NodeJS.timer | null>(null);

    React.useEffect(() => {
        savedCallback.current = cb;
    }, [cb]);

    React.useEffect(() => {
        const tick = () => {
            savedCallback.current();
        };
        if (delay !== null) {
            const id = setTimeout(tick, delay);
            return () => clearTimeout(id);
        }
    }, [delay]);
}