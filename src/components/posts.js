import { useState } from 'react';
import useAxios from '../hooks/post-axios';
import axios from '../api/axios';

const Posts = () => {
    const [fetchData, response, error, loading] = useAxios();
    const getData = async () => {
        await fetchData({
            axiosInstance: axios,
            method: 'get',
            url: '/posts'
        })
    }
    const pushData = async () => {
        await fetchData({
            axiosInstance: axios,
            method: 'post',
            url: '/posts',
            requestConfig: {
                title: 'Student',
                body: 'Student selam', 
            }
        })
    }
    useState(() => {
        getData();
        console.log(response);
    }, [])
    return (
        <article>
            <h2>Posts</h2>
            <div className="row">
                <button onClick={pushData}>Submit</button>
                <button onClick={getData}>Refetch</button>
            </div>
            {loading && <div>Loading...</div>}
            {!loading&& error && <div>{error}</div>}
            {!loading && !error && response?.length && (
                <ul>
                    {response.map((post, i) => <li key={i}>{`${post.id}. ${post.title}`}</li>)}
                </ul>
            )}
            {!response & <p>No posts</p>}

        </article>
    )
}

export default Posts;