import { useState } from 'react'
import './App.css'

import CreateRoomPage from './pages/CreateRoomPage'
import HomePage from './pages/HomePage'
import TutorialPage from './pages/TutorialPage'
import JoinRoomPage from './pages/JoinRoomPage'
import GamePage from './pages/GamePage'

function App() {
  const [screen, setScreen] = useState('home');


  // Create Room Page
  if(screen === "create-room") {
    return <CreateRoomPage onBack={() => setScreen('home')}/>
  }
  
  // Join Room Page
  if(screen === "join-room") {
    return <JoinRoomPage onBack={() => setScreen('home')}/>
  }




  // Tutorial Start Page
  if(screen === "tutorial-home") {
    return <TutorialPage onBack={() => setScreen('home')}/>
  }


  // WIP
  if(screen === "play") {
    return <GamePage onBack={() => setScreen('home')}/>
  }




  // Home page
  return <HomePage 
    onPlay={() => setScreen('play')}
    onCreateRoom={() => setScreen('create-room')}
    onJoinRoom={() => setScreen('join-room')}
    onTutorial={() => setScreen('tutorial-home')}
    />
}

export default App