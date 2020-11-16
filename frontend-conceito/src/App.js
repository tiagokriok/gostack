import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/image1.jpg';

import Header from './components/Header';

function App() {
  const [projects, setProject] = useState(['Teste 1', 'Teste 2']);

  function handleAddProject() {
    // projects.push(`Novo Projeto ${Date.now()}`);

    setProject([...projects, `Novo Projeto ${Date.now()}`]);

    console.log(projects);
  }

  return (
    <>
      <Header title="GOSTACK" />

      <img src={backgroundImage} />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
