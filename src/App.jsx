import { useState } from 'react'
import './App.css'

function App() {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [curso, setCurso] = useState('')
  const [turno, setTurno] = useState('')

  const [formularios, setFormularios] = useState([])

  function salvarFormulario(e) {
    e.preventDefault()

    const novoFormulario = {
      nome: nome,
      idade: idade,
      curso: curso,
      turno: turno
    }

    setFormularios([...formularios, novoFormulario])

    setNome('')
    setIdade('')
    setCurso('')
    setTurno('')
  }
  
  return (
    <>
    <div id = "Formulario">
      <div id = "tag_formulario">

        <h1>Formulario</h1>


      </div>

      <div class = "caixa">
        <label htmlFor="nome"></label>
        <input 
        type="text" 
        id="nome" 
        class="caixa-pergunta" 
        placeholder="Nome..."
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
        
        ></input>
      </div>
      <div class = "caixa">
        <label htmlFor="idade"></label>
        <input 
        type="text" 
        id="idade" 
        class="caixa-pergunta" 
        placeholder="Idade..."
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        required
        
        ></input>
      </div>
      <div class = "caixa">
        <label htmlFor="curso"></label>
        <input

        type="text"
        id="curso"
        class="caixa-pergunta" 
        placeholder="Curso..."
        value={curso}
        onChange={(e) => setCurso(e.target.value)}
        required

        ></input>
      </div>
      <div class = "caixa">
        <label htmlFor="turno"></label>
        <input
        type="text"
        id="turno" 
        class="caixa-pergunta" 
        placeholder="Tarde..."
        value={turno}
        onChange={(e) => setTurno(e.target.value)}
        required
        
        ></input>

      </div>

        <button 
        id = "salvar" 
        type='submit'
        onClick={salvarFormulario}
        > Salvar </button>        
      </div>

      
    <h2>Total de formulários: {formularios.length}</h2>
    
    {formularios.map((formulario, index) => (
  <div class="formulario-salvo" key={index}>
    <h3>Cadastro {index + 1}</h3>

    <p>Nome: {formulario.nome}</p>
    <p>Idade: {formulario.idade}</p>
    <p>Curso: {formulario.curso}</p>
    <p>Turno: {formulario.turno}</p>
  </div>
))}
      
    </>
  )
}

export default App
