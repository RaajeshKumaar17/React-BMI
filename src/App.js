
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
const [weight,setWeight]=useState('');
const [height,setHeight]=useState('');
const [bmi,setBMI]=useState('');
const [message,setMessage]=useState('');

const calcBmi=(e)=>{
  e.preventDefault()

if(weight===0 || height ===0){
alert('Please Enter valid Weight and Height')
}else{
  const height_m=height/100;
  const  bmi=weight/(height_m**2)
  setBMI(bmi.toFixed(1))

  if(bmi<18.5) {setMessage("You are under Weight")} 
  else if(bmi>=18.5 && bmi<=24.9) {setMessage("You are Normal Weight")} 
  else if(bmi>=25 && bmi <29.9) {setMessage("You are over Weight")} 
  else{setMessage("Obesity")}
}
}

let reload=()=>{
  window.location.reload();
}





  return (
    <div className='App' >
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi} >
          <div>
            <label>Weight (kg)</label>
            <input type="text" 
            placeholder='Enter Weight' 
            value={weight} 
            onChange={(e)=> setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input type="text" 
            placeholder='Enter Height' 
            value={height} 
            onChange={(event)=>setHeight(event.target.value)}/>
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
          <div className="centre">
            <h3 style={{textAlign:"center"}}> {bmi}</h3>
            <p style={{textAlign:"center"}}>{message}</p>
          </div>
  

        </form>
      </div>
      
    </div>
  );
}

export default App;
