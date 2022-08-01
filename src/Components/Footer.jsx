

const Footer = (props) =>{
    console.log(props)
    return(
      <footer className='footText'>
      <small className='footer'> &copy; 2022 {props.firstName} {props.lastName} All right resevered</small>
  
      </footer>
      
    )
  }
  export default Footer