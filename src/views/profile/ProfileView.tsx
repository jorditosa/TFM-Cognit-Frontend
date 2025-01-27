import { motion } from 'framer-motion'
import { t } from 'i18next'
import { UserCookie } from '@/interfaces/user-interfaces';

interface Props {
	user: UserCookie
}

const ProfileView = ({user}: Props) => {
	
	return (
		<motion.div
			className='max-w-lg mx-auto pt-12 text-xl'
		>
			<h1 className="text-lima text-3xl my-2 text-center">
				{t('profile_title')}
			</h1>

			<div className='text-lima flex justify-between py-2'>
				<p className='font-bold'>
					{t('profile_username')}
				</p>
				<p>{user.id}</p>
			</div>

			<div className='text-lima flex justify-between py-2'>
				<p className='font-bold'>
					{t('profile_email')}
				</p>
				<p>{user.email}</p>
			</div>

			<div className='text-lima flex justify-between py-2'>
				<p className='font-bold'>
					{t('profile_points')}
				</p>
				<p>{user.points}</p>
			</div>
		</motion.div>

	)
}
export default ProfileView