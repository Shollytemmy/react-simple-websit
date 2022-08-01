import React from 'react'
import './App.css'
import Page from './Components/Page';


function App() {
  const person =[
    { 
    firstName: 'Bunyameen',
   lastName: 'Nurudeen'
}
  ]
  
  return (
   <div>

   {person.map((p, i) =>{
     return <Page key={i} firstName={p.firstName} lastName={p.lastName} />
   })}
 
   </div>
  );
}

export default App;
