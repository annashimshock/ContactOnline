import { useState } from 'react'
import '../App.css'

interface CreateRoomPageProps {
    onBack: () => void
}

function CreateRoomPage({onBack}: CreateRoomPageProps) {
    const [screen, setScreen] = useState('create-room');

    return (
        <main className="homepage">
            <div className="home-content">
            <header className="home-header">
                <div className="logo">contact</div>
                <button className="secondary-button" onClick={onBack}>
                Back
                </button>
            </header>

            <section className="hero">
                <h1>Create a room</h1>
                <p>Set things up before the chaos begins.</p>
            </section>
            </div>
        </main>
    )
}

export default CreateRoomPage