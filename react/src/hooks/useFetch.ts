import { useEffect, useState } from "react";

export default function useFatch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        if (!url) {
            setData(null);
            setLoading(false)
            setError(null);

            return;
        };

        const controller = new AbortController();

        async function dataFetching() {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url, {
                    signal: controller.signal
                });

                if (!response) {
                    throw new Error(`HTTP error: ${response.status}`)
                };

                const result = await response.json();

                setData(result);
                
            } catch (error) {
                if (error.name !=='AbortError') {
                    setError(error.message)
                }
            }
            finally{
                if (!controller.signal.aborted) {
                    setLoading(false)
                }
            }
        };

        dataFetching();

        return ()=> {
            controller.abort();
        };
    }, [url]);

    return {data, loading, error}
};
