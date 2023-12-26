
import { animated, useSpring } from '@react-spring/web'
import { t } from 'i18next'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Rombo from '../components/Rombo'
import { getUsers } from '../services/userService'
import { setUser } from '../store/users/users.slice'
import { getCookieTkn } from '../utils/Cookies'

const Home = () => {
	const dispatch = useDispatch()
	const props = useSpring({
		from: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
		to: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
		config: { duration: 1500 },
	})

	useEffect(() => {
		// Get the cookie
		const userLogged = getCookieTkn()

		// Get user data from DB
		if (userLogged) {
			// Set user

			(async () => {
				const user = await getUsers(userLogged)
				// Setting user
				dispatch(setUser(user))
			})()

		}
	}, [])

	return (
		<animated.div
			style={props}
			className='h-full'
		>
			<Link to='/register'>
				<Rombo 
					className='my-14'
					textContent={
						t('home_heading')
					}
					font='lg'
					size='md'
				/>
			</Link>

			<Link 
				to='/language'
				className="absolute -left-20 -bottom-14 text-center">
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
				className="absolute -right-20 -bottom-14 text-center">
				<Rombo 
					textContent={
						t('home_faq_btn')
					}
					font='sm'
					size='sm'
				/>
			</Link>
		</animated.div>
	)
}
export default Home