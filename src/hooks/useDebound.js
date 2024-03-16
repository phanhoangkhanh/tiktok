import { useState, useEffect } from 'react';

function useDebound(value, delay) {
    const [debouncedValue, setDeboundcedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDeboundcedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value]);
    return debouncedValue;
}

export default useDebound;
