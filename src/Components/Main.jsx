const Main = () =>{
    const list = [
      'It\'s good for building UI',
      'It\'s highly demanded',
      'It own by FaceBook',
      'Was relased in 2013',
  
  
  
    ]
    return(
      <div>
        <h1>My Awesome Website in React</h1>
     
     <h4>Fun facts about React</h4>
       <ul>
       {list.map((lst, i) => <li key={i}>{lst}</li>)}
         {/* <li>It's good for building UI</li>
         <li>It's highly demanded</li>
         <li>It own by FaceBook</li>
         <li>Was relased in 2013</li> */}
       </ul>
       <h3>Reasons I Love React</h3>
  
  <ol>  
  <li>it's composable</li>
  <li>Declarative</li>
  <li>It's imperative</li>
  <li>It's a hirable skills</li>
  </ol>
      </div>
    )
  }

  export default Main 