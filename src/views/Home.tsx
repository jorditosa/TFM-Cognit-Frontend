
import { t } from 'i18next'
import { Link } from 'react-router-dom'
import Rombo from '../components/Rombo'
import { motion } from 'framer-motion'

const Home = () => {
	

	return (
		<motion.div
			initial={{ y:50, opacity: 0}}
			animate={{ y:0, opacity: 1}}
			className='h-full'
		>
			<Link to='/register'>
				<Rombo 
					className='my-14'
					textContent={
						t('home_heading')
					}
					font='md'
					size='md'
				/>
			</Link>

			<Link 
				to='/language'
				className="absolute left-4 -bottom-14 text-center">
				<Rombo 
					textContent={
						t('home_language_btn')
					}
					font='sm'
					size='sm'
				/>
			</Link>
        
			<Link 
				to='/home-info'
				className="absolute right-4 -bottom-14 text-center">
				<Rombo 
					textContent={
						t('home_faq_btn')
					}
					font='sm'
					size='sm'
				/>
			</Link>
		</motion.div>
	)
}
export default Home