import { useState } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setIsLoading] = useState(false);

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const res = await fetch(url);
            const result = await res.json();
            setData(result);
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false);
    }
    return {data, fetchData, loading, setData}
}