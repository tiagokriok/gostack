import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  // function handleAddProject() {
  //   api
  //     .post('projects', {
  //       title: `Novo Projeto ${Date.now()}`,
  //       owner: `Tiago ${Date.now()}`,
  //     })
  //     .then((response) => {
  //       const project = response.data;

  //       setProjects([...projects, project]);
  //     });
  // }
  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: `Tiago ${Date.now()}`,
    });
    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="GOSTACK" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
