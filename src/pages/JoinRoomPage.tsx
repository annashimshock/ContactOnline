import '../App.css'

interface JoinRoomPageProps {
    onBack: () => void
}

function JoinRoomPage({onBack}: JoinRoomPageProps) {
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
            <h1>Join the chaos</h1>
            <p>Select a room or enter a code.</p>
          </section>
        </div>
      </main>
    )
}

export default JoinRoomPage