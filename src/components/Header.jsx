import PropTypes from 'prop-types';
import Rombo from './Rombo';
import Logo from '/assets/logo-no-background.svg';

const Header = ({ user }) => {

  return (
    <header className='relative flex justify-between px-6'>
      <img src={Logo} alt="logo" className='w-24 my-6 reflect' />

      <Rombo
        textContent={
          <div className='flex items-center gap-1'>
            <span className='text-xl'>{user?.user_points}</span>
            <img src="/assets/icons8-comida-natural-64.png" className="w-10" />
          </div>
        }
        font='sm'
        size='sm'
        className='absolute -right-8 -top-4'
      />
    </header>
  )
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
}

export default Header