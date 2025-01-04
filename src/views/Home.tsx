
import { t } from 'i18next'
import { Link } from 'react-router-dom'
import Rombo from '../components/Rombo'
import { motion } from 'framer-motion'
import { ENDPOINT } from '../constants/endpoints'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'

const Home = () => {
	const { login, register, isAuthenticated } = useKindeAuth();
	const handleAuth = () => {
        if (isAuthenticated) {
            login();
        } else {
            register();
        }
    };

	return (
		<motion.div
			initial={{ y: 50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			className='w-full h-full mt-12'
		>
			<div className='grid grid-cols-2 place-content-center gap-12'>
				<button 
				onClick={handleAuth}
				className='col-span-2'
				>
					<Rombo
						textContent={
							t('home_heading')
						}
						font='md'
						size='md'
					/>
				</button>

				<Link
					to={ENDPOINT.languages}
					className='col-span-1'
					>
					<Rombo
						textContent={
							t('home_language_btn')
						}
						font='sm'
						size='sm'
					/>
				</Link>

				<Link
					to={ENDPOINT['home-info']}>
					<Rombo
						textContent={
							t('home_faq_btn')
						}
						font='sm'
						size='sm'
					/>
				</Link>
			</div>
		</motion.div>
	)
}
export default Home