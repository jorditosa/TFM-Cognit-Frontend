import { motion } from 'framer-motion'
import { useCookies } from 'react-cookie';

const ProfileView = () => {
	const [ cookies ] = useCookies(['COGNIT_USER'])
	const user = cookies.COGNIT_USER || {};
  
	return (
		<motion.div 
		className='max-w-lg mx-auto pt-12 text-xl'
		>
			<div className='text-lima flex justify-between py-2'>
				<p className='font-bold'>Usuario</p>
				<p>{user.email}</p>
			</div>

			<div className='text-lima flex justify-between py-2'>
				<p className='font-bold'>Puntos</p>
				<p>{user.points}</p>
			</div>

			<div className='text-lima flex justify-between py-2'>
				<p className='font-bold'>Fecha alta</p>
				<p>{user.createdAt}</p>
			</div>
		</motion.div>

	)
}
export default ProfileView