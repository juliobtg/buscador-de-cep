import React, { useState } from 'react'; 
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import api from './services/Api';

function App() {
  const [input, setInput] = useState(''); 
  const [cep, setCep] = useState({})



  async function clique() {
    if (input === '') {
      alert('Buscador vazio');
    } else {
      try {
        const response = await api.get(`/${input}/json`); 
       setCep(response.data)
       setInput("")
      } catch (error) {
        alert('Erro ao buscar '); 
        setInput("")
      }
    }
  }

  return (
    <div className="container">
      <h1 className="title">BUSCADOR DE CEP</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="button" onClick={clique}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
  
        <h2>CEP: {cep.cep}</h2>
        <span>{cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade}</span>
        
      </main>
      )}
     
    </div>
  );
}

export default App;




