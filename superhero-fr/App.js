import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState('');
  const [superheroes, setSuperheroes] = useState([]);

  const addSuperhero = async () => {
    try {
      const response = await fetch('http://localhost:4000/superheroes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          superpower,
          humilityScore: parseInt(humilityScore),
        }),
      });
      if (!response.ok) throw new Error('Failed to add superhero');
      fetchSuperheroes();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSuperheroes = async () => {
    try {
      const response = await fetch('http://localhost:4000/superheroes');
      if (!response.ok) throw new Error('Failed to fetch superheroes');
      const data = await response.json();
      setSuperheroes(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app-container">
      <h1>Humble Superhero API</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Superpower"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Humility Score (1-10)"
          value={humilityScore}
          onChange={(e) => setHumilityScore(e.target.value)}
          className="input-field"
        />
        <button onClick={addSuperhero} className="add-button">Add Superhero</button>
      </div>
      <h2>Superheroes</h2>
      <ul className="superheroes-list">
        {superheroes.map((hero, index) => (
          <li key={index} className="hero-item">
            {hero.name} - {hero.superpower} - Humility: {hero.humilityScore}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

