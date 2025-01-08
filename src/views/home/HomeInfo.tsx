import { t } from 'i18next'
import { useNavigate } from 'react-router-dom'
import Rombo from '../../components/Rombo'
import { motion } from 'framer-motion'
import { IconChevronLeft } from '@tabler/icons-react'

const HomeInfo = () => {
	const navigate = useNavigate()

	return (
		<section className='w-full overflow-visible'>

			<Rombo
				textContent={
					<button
						onClick={() => navigate(-1)}
						className='flex items-center w-full text-lima'
					>
						<IconChevronLeft size={52} stroke={1} />
					</button>
				}
				font='xs'
				size='xs'
				className='absolute right-0 top-0'
				bg='lima'
			/>

			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
			>
				<div className="container mt-4 w-full flex flex-col">
					<h1 className="text-lima text-3xl my-2 border-b-4 w-full border-lima px-6">
						{t('about_heading')}
					</h1>
				</div>

				<div className="text-lima container px-6 pb-12">
					<article>
						<p className="mt-4">
							{t('about_explanation_1')}
						</p>
						<p className="mt-4">
							{t('about_explanation_2')}
						</p>

						<p className="mt-4">
							{t('about_explanation_3')}
						</p>

						<p className="mt-4">
							{t('about_explanation_4')}
						</p>
					</article>
				</div>
			</motion.div>


		</section>
	)
}
export default HomeInfo