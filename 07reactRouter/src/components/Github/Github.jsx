import React, {useState, useEffect } from 'react'

const Github = () => {
    const[data,setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/ayush4028')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, []);
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt="Github Picture" width={300} />
    </div>
    
  )
}

export default Github