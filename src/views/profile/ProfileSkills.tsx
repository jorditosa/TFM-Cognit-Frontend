import { animated } from '@react-spring/web'
import { t } from 'i18next'
import React from 'react'
import { useSelector } from 'react-redux'
import Rombo from '../../components/Rombo'
import useFadeInAnimation from '../../hooks/useFadeInAnimation'
import { selectUser } from '../../store/users/users.slice'

const ProfileSkills = () => {

	const props = useFadeInAnimation()
	const user = useSelector(selectUser)
	const { skill_know_points, skill_prot_points, skill_sust_points, skill_expl_points } = user

	return (
		<section className='overflow-hidden w-full h-screen'>
			<animated.div
				style={props}
			>
				<div className="container mt-4 px-2 w-full flex flex-col items-center">
					<h1 className="text-lima text-3xl my-4">Skills</h1>

					<div className="relative w-full flex items-center mt-14 px-4">
						<Rombo
							className='absolute z-20 reflect'
							textContent={
								<div className='flex flex-col items-center'>
									<img src="/assets/icons8-cerebro-64 (1).png" className="w-12" />
								</div>
							}
							font="xs"
							size=''
						/>
						<span className='absolute text-lima text-xl z-50 right-10'>{skill_know_points}</span>
						<div className='absolute w-full px-10'>
							<span
								role="progressbar"
								aria-labelledby="ProgressLabel"
								aria-valuenow="75"
								className="block rounded-r-full bg-blue shadow-lg shadow-aqua"
							>
								<span
									className="block h-12 rounded-r-full bg-[repeating-linear-gradient(90deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_10px,_var(--tw-gradient-to)_30px,_var(--tw-gradient-to)_40px)] from-lima to-lima/50"
									style={{ width: `${skill_know_points * 100 / 25}%` }}>
								</span>
							</span>
							<span className='absolute text-lima p-1'>{t('skill_knowledge')}</span>
						</div>
					</div>

					<div className="relative w-full flex items-center mt-32 px-4">
						<Rombo
							className='absolute z-20 reflect'
							textContent={
								<div className='flex flex-col items-center'>
									<img src="/assets/icons8-escudo-64.png" className="w-12" />
								</div>
							}
							font="sm"
							size=''
						/>
						<span className='absolute text-lima text-xl z-50 right-10'>{skill_prot_points}</span>
						<div className='absolute w-full px-10'>
							<span
								role="progressbar"
								aria-labelledby="ProgressLabel"
								aria-valuenow="75"
								className="block rounded-r-full bg-blue shadow-lg shadow-aqua"
							>
								<span
									className="block h-12 rounded-r-full bg-[repeating-linear-gradient(90deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_10px,_var(--tw-gradient-to)_30px,_var(--tw-gradient-to)_40px)] from-lima to-lima/50"
									style={{ width: `${skill_prot_points * 100 / 25}%` }}>
								</span>
							</span>
							<span className='absolute text-lima p-1'>{t('skill_protector')}</span>
						</div>
					</div>

					<div className="relative w-full flex items-center mt-32 px-4">
						<Rombo
							className='absolute z-20 reflect'
							textContent={
								<div className='flex flex-col items-center'>
									<img src="/assets/icons8-turbina-de-viento-de-agua-64.png" className="w-12" />
								</div>
							}
							font="sm"
							size=''
						/>
						<span className='absolute text-lima text-xl z-50 right-10'>{skill_sust_points}</span>
						<div className='absolute w-full px-10'>
							<span
								role="progressbar"
								aria-labelledby="ProgressLabel"
								aria-valuenow="75"
								className="block rounded-r-full bg-blue shadow-lg shadow-aqua"
							>
								<span
									className="block h-12 rounded-r-full bg-[repeating-linear-gradient(90deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_10px,_var(--tw-gradient-to)_30px,_var(--tw-gradient-to)_40px)] from-lima to-lima/50"
									style={{ width: `${skill_sust_points * 100 / 25}%` }}>
								</span>
							</span>
							<span className='absolute text-lima p-1'>{t('skill_sustainability')}</span>
						</div>
					</div>

					<div className="relative w-full flex items-center mt-32 px-4">
						<Rombo
							className='absolute z-20 reflect'
							textContent={
								<div className='flex flex-col items-center'>
									<img src="/assets/icons8-brújula-64.png" className="w-12" />
								</div>
							}
							font="sm"
							size=''
						/>
						<span className='absolute text-lima text-xl z-50 right-10'>{skill_expl_points}</span>
						<div className='absolute w-full px-10'>
							<span
								role="progressbar"
								aria-labelledby="ProgressLabel"
								aria-valuenow="75"
								className="block rounded-r-full bg-blue shadow-lg shadow-aqua"
							>
								<span
									className="block h-12 rounded-r-full bg-[repeating-linear-gradient(90deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_10px,_var(--tw-gradient-to)_30px,_var(--tw-gradient-to)_40px)] from-lima to-lima/50"
									style={{ width: `${skill_expl_points * 100 / 25}%` }}>
								</span>
							</span>
							<span className='absolute text-lima p-1'>{t('skill_exploration')}</span>
						</div>
					</div>
				</div>
			</animated.div>

		</section>
	)
}
export default ProfileSkills