import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(url);
            console.log(response);
            setData(response.data);
        } catch (err) {
            setError(err);
            console.log(err)
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        fetchData();
    }, [url])

    return {data, isLoading, error};

}

export default useFetch;