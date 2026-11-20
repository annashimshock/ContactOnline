import '../App.css'

interface GamePageProps {
    onBack: () => void
}

function GamePage({onBack}: GamePageProps) {
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
            <img
              src="/images/sadcat.jpg"
              alt="sadcat"
              className="sad-cat"
              />
          </section>
        </div>
      </main>
    )
}

export default GamePage