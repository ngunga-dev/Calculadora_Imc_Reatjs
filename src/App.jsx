import { useState } from 'react'
import './app.css'

export default function App(){
  const [peso,setPeso]=useState('')
  const [altura,setAltura]=useState('')
  const [nome,setNome]=useState('')
  const [message,setMessage]=useState('Resultado do imc')

  const calcularIMC=()=>{
    const alt=altura/100
    const imc=peso/(alt*alt)
    
    if(imc<18.6){
      setMessage(`${nome} esta abaixo do peso. Seu IMC: ${imc.toFixed(2)}`)
    }
    else if(imc>=18.6 && imc<24.9){
       setMessage(`${nome} estas no peso ideal. Seu IMC: ${imc.toFixed(2)}`);
    }
    else if(imc>=24.9 && imc <34.9){
       setMessage( `${nome} estas levemente acima do peso. Seu IMC: ${imc.toFixed(2)}`);
    }else if(imc>34.9){
       setMessage(`${nome}, Cuidado Obesidade!!. Seu IMC: ${imc.toFixed(2)}`);
    }
  }

  return (
  
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e)=>setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Peso em (Kg) Ex:80"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <input
          type="text"
          placeholder="Altura em (cm) Ex: 170"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button onClick={calcularIMC}>Calcular</button>
      </div>
      <h2>{message}</h2>
    </div>
  );
}
