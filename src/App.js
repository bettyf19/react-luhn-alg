import React from 'react';
import CreditCard from './components/CreditCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Credit Card Validator</h1>
      </header>
      <main className="App-main">
        <CreditCard />
      </main>
    </div>
  );
}

export default App;
