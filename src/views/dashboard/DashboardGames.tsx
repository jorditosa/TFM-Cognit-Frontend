import { t } from 'i18next'
import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { CircleLoader } from 'react-spinners'
import Rombo from '../../components/Rombo'
import { motion } from 'framer-motion'
import { IconDog, IconDroplet, IconRecycle, IconSeeding } from '@tabler/icons-react'

const DashboardGames = () => {

	return (
		<Suspense fallback={<CircleLoader color="#086375" size={25} />}>
			<section className='overflow-hidden w-full h-screen'>
        
				<motion.div
				>
					<div className="container mt-4 w-full flex flex-col items-center">
						<h1 className="text-lima text-3xl my-2">
							{t('games_menu_heading')}
						</h1>

						<p className="text-lima text-3xl my-2">
							{t('games_menu_subheading')}
						</p>

						<div className="relative mt-6">
							<Link to='/games/l/2' title='Water'>
								<Rombo
									className="absolute top-0 -left-14"
									textContent={
										<IconDroplet size={52} stroke={1} />
									}
									font="md"
									size='sm'
									bg='blue'
								/>
							</Link>
							<Link to='/games/l/3' title='Recycling'>
								<Rombo
									className="absolute top-24 right-8"
									textContent={
										<IconRecycle size={52} stroke={1} />
									}
									font="md"
									size='sm'
									bg='blue'
								/>
							</Link>
							<Link to='/games/l/4' title='Flora'>
								<Rombo
									className="absolute top-48 -left-14"
									textContent={
										<IconSeeding size={52} stroke={1} />
									}
									font="md"
									size='sm'
									bg='blue'
								/>
							</Link>
							<Link to='/games/l/5' title='Fauna'>
								<Rombo
									className="absolute top-24 left-8"
									textContent={
										<IconDog size={52} stroke={1} />
									}
									font="md"
									size='sm'
									bg='blue'
								/>
							</Link>
						</div>
					</div>

				</motion.div>        
			</section>
		</Suspense> 
	)
}
export default DashboardGames