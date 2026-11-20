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

  if(screen === "join-room") {
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
            <h1>Join the chaos</h1>
            <p>Select a room or enter a code.</p>
          </section>
        </div>
      </main>
    )
  }

  if(screen === "tutorial") {
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
            <h1>Never played contact?</h1>
            <p>That's okay, we'll show you how.</p>
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

            <button 
              className="secondary-button"
              onClick={() => setScreen("join-room")}
              >
                Join Room
              </button>

            <button 
              className="secondary-button"
              onClick={() => setScreen("tutorial")}
              >
                Tutorial
              </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App