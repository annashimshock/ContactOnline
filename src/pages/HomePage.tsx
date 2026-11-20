import '../App.css'

interface HomePageProps {
    onPlay: () => void
    onCreateRoom: () => void
    onJoinRoom: () => void
    onTutorial: () => void
}

function HomePage({onPlay, onCreateRoom, onJoinRoom, onTutorial}: HomePageProps) {
    return(
        <main className="home-page">
        <div className="home-content">
            <header className="home-header">
            <div className="logo">contact</div>
            </header>

            <section className="hero">
            <h1>Let's make<br />contact.</h1>
            <p>A little word game. A lot of chaos.</p>
            
            <div className="button-group">
                <button 
                className="play-button"
                onClick={onPlay}>
                Play
                </button>
            </div>
            
            <div className="button-group">
                <button 
                className="secondary-button"
                onClick={onCreateRoom}>
                    Create Room
                </button>

                <button 
                className="secondary-button"
                onClick={onJoinRoom}>
                    Join Room
                </button>

                <button 
                className="secondary-button"
                onClick={onTutorial}>
                    Tutorial
                </button>
            </div>
            </section>
        </div>
        </main>
    )
}

export default HomePage