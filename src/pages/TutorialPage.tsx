import '../App.css'

interface TutorialPageProps {
    onBack: () => void
}

function TutorialPage({onBack}: TutorialPageProps) {
    return(
        <main className="tutorial-page">
            <header className="tutorial-header">
                <button className="back-button" onClick={onBack}>
                    ← Exit Tutorial
                </button>

                <div className="tutorial-progress">
                    Step 1 of 4
                </div>
            </header>

            <section className="tutorial-content">
                <h1>How to play Contact</h1>
                <p>Let's learn by playing!</p>

                <div className="tutorial-arena">
                    <div className="tutorial-letter">
                        D
                    </div>
                </div>

                <div className="tutorial-instructions">
                    <h2>The secret word starts with D</h2>
                    <p>
                        The WordKeeper has a secret word.
                        You only know its first letter.
                        Can you figure it out?
                    </p>
                </div>

                <button className="tutorial-next-button">
                    Let's Play →
                </button>
            </section>
        </main>
    )
}


export default TutorialPage