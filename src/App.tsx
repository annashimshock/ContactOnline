import { useState } from 'react'
import './App.css'

function App() {
  const [screen, setScreen] = useState('home');

  if(screen === "create-room") {
    return (
      <main className="homepage">
        <div className="home-content">
          <header className="home-header">
            <div className="logo">contact</div>
            <button className="secondary-button" onClick={() => setScreen("home")}>
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

  return (
    <main className="home-page">
      <div className="home-content">
        <header className="home-header">
          <div className="logo">contact</div>
        </header>

        <section className="hero">
          <h1>Let's make<br />contact.</h1>
          <p>A little word game. A lot of chaos.</p>
          
          <div className="button-group">
            <button className="play-button">Play</button>
          </div>
          
          <div className="button-group">
            <button 
              className="secondary-button"
              onClick={() => setScreen("create-room")}
              >
                Create Room
              </button>

            <button className="secondary-button">Join Room</button>

            <button className="secondary-button">Tutorial</button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App