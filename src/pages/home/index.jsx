import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/room/${roomCode}`)
    }

    return (
        <div className='home-page'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='roomcode'>Enter Room Code</label>
                    <input
                        type='text'
                        value={roomCode}
                        onChange={(e) => setRoomCode(e.target.value)}
                        placeholder='Enter your room'
                        required
                    />
                    <button type='submit'>Join</button>
                </div>
            </form>
        </div>
    )
}

export default Home