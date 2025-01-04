import { motion } from 'framer-motion'
import { t } from 'i18next'


const ProfileInfo = () => {

	return (
		<section className='w-full h-screen'>

			<motion.div>
				<div className="container mt-4 w-full flex flex-col">
					<h1 className="text-lima text-3xl my-2 border-b-4 w-full border-lima px-6">
						{t('actions_title')}
					</h1>
				</div>

				<div className="text-lima container px-6 pb-12">
					<article className="py-4">
						<div className="flex items-center gap-4">
							<h2 className="text-lg font-semibold">
								{t('actions_heading_1')}
							</h2>
						</div>
						<p className="mt-4">
							{t('actions_explanation_1')}
						</p>
						<div className="mt-4 py-2 border-y-2 border-lima border-dashed flex items-center gap-4">
							<p className="font-bold text-xl">
								{t('actions_reward')}
							</p>
							<img src="/assets/icons8-comida-natural-64.png" alt="icon points" className="w-10" />
						</div>
					</article>
					<article className="py-4">
						<div className="flex items-center gap-4">
							<h2 className="text-lg font-semibold">
								{t('actions_heading_2')}
							</h2>
						</div>
						<p className="mt-4">
							{t('actions_explanation_2')}
						</p>
						<div className="mt-4 py-2 border-y-2 border-lima border-dashed flex items-center gap-4">
							<p className="font-bold text-xl">
								{t('actions_reward')}
							</p>
							<p>
                Skill Points
							</p>
						</div>
					</article>
				</div>
			</motion.div>


		</section>
	)
}
export default ProfileInfo