import { Outlet } from 'react-router-dom'
import Logo from '/assets/logo-no-background.svg'
function App() {

  return (
    <section id='home-page' className='h-screen flex flex-col items-center'> 
      <img src={Logo} alt="logo" className='w-full my-14 max-w-4xl' />  
      <div className="container relative flex flex-col items-center">
        
        <Outlet />
      </div>
    </section>
  )
}

export default App
