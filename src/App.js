import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [status, setStatus] = useState('Ready');

  const handleSpeak = () => {
    if (!text) {
      setStatus('Please enter text to speak.');
      return;
    }
    setIsSpeaking(true);
    setStatus('Synthesizing...');
    
    // Simulate API call
    setTimeout(() => {
      setIsSpeaking(false);
      setStatus('Playback complete.');
    }, 2000);
  };

  return (
    <div data-filename="pages/SovereignMigrationCommand" data-linenumber="156" data-visual-selector-id="pages/SovereignMigrationCommand156" className="App">
      <header data-filename="pages/SovereignMigrationCommand" data-linenumber="157" data-visual-selector-id="pages/SovereignMigrationCommand157" className="App-header">
        <h1 data-filename="pages/SovereignMigrationCommand" data-linenumber="158" data-visual-selector-id="pages/SovereignMigrationCommand158" className="title">SpeakAlly</h1>
        <p data-filename="pages/SovereignMigrationCommand" data-linenumber="159" data-visual-selector-id="pages/SovereignMigrationCommand159" className="subtitle">Your Sovereign Voice Synthesis Command</p>
        <div data-filename="pages/SovereignMigrationCommand" data-linenumber="160" data-visual-selector-id="pages/SovereignMigrationCommand160" className="card">
          <textarea
            className="textarea"
            placeholder="Enter text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isSpeaking}
          />
          <button data-filename="pages/SovereignMigrationCommand" data-linenumber="168" data-visual-selector-id="pages/SovereignMigrationCommand168" 
            className="button"
            onClick={handleSpeak}
            disabled={isSpeaking}
          >
            {isSpeaking ? 'Speaking...' : 'Speak'}
          </button>
          <div data-filename="pages/SovereignMigrationCommand" data-linenumber="175" data-visual-selector-id="pages/SovereignMigrationCommand175" className="status">
            Status: {status}
          </div>
        </div>
        <footer data-filename="pages/SovereignMigrationCommand" data-linenumber="179" data-visual-selector-id="pages/SovereignMigrationCommand179" className="footer">
           🏛️ ApexAI Sovereign Systems 🏛️
        </footer>
      </header>
    </div>
  );
}

export default App;
