import Header from './Header'
import Main from './Main'
import Footer from './Footer'
const Page = function({firstName, lastName}){
    return(
      <div className='main-div'>
      <Header />
      <Main />
          <Footer firstName ={firstName} lastName = {lastName}/>
          
       
      </div>
    )
  }

  export default Page