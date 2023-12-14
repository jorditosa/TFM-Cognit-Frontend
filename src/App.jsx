import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'
import { logError } from './helpers/logger'
import ErrorPage from './views/ErrorPage'
import Logo from '/assets/logo-no-background.svg'
function App() {

  return (
    <ErrorBoundary fallback={<ErrorPage />} onError={logError}>
      <section id='home-page' className='h-screen flex flex-col items-center'>
        <img src={Logo} alt="logo" className='w-full my-14 max-w-4xl' />
        <div className="container relative flex flex-col items-center">
          <Outlet />
        </div>
      </section>
    </ErrorBoundary>
  )
}

export default App
