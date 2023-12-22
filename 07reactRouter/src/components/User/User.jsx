import React from 'react'
import { useParams } from 'react-router-dom'

function User(){
    const {userid} = useParams()
    return (
        <div className='flex justify-center bg-blue-100 py-10'>
            <div className='bg-blue-400 p-5'>User : <span className='font-bold'>{userid}</span></div>
        </div>
    )
}

export default User