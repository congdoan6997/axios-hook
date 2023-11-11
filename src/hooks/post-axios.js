import {  useState } from 'react'

const useAxios = () => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async (config) => {
        const {
            axiosInstance,
            method,
            url,
            requestConfig = {}
        } = config;

        try {
            setLoading(true);
            const res = await axiosInstance[method.toLowerCase()](url, {...requestConfig  });
            setResponse(res.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    return [fetchData, response, error, loading];
}

export default useAxios;