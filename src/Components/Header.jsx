

const Header = () =>{
    const menu = [
      'Pricing',
      'Product',
      'Contact'
    ]
    return(
     
        <header>
        <nav className ='nav'>
      <img src="logo.png" alt="" className='img'/>
      <ul className='nav-item'>
        
        {menu.map(((lst, i) => <li key={i}><a href='#' 
        rel="noreferrer">{lst}</a></li>))}
      </ul>
  
      </nav>
      </header>
    
    )
  
  }

  export default Header