import { useLocation } from "react-router-dom"
import { t } from 'i18next'
import { motion } from "framer-motion";

const DashboardSkills = () => {
	const location = useLocation();
	const { player } = location.state;
	const totalPoints = 2000;
	const percentage = Math.min((player.points / totalPoints) * 100, 100);

	return (
		<section
			className='h-screen flex flex-col items-center pt-12 max-w-lg mx-auto'
		>
			<h1 className="text-lima text-3xl my-2 text-center">
				{t('skills_title')}
			</h1>
			<div className="w-full text-xl bg-blue rounded-md h-8 overflow-hidden border-4 border-blue shadow shadow-aqua">
				<motion.div
					initial={{
						x: -100
					}}
					animate={{
						x: 0
					}}
					transition={{
						duration: 1.6
					}}
					className="w-full h-full bg-lima rounded-l-md transition-all duration-300 ease-out"
					style={{ width: `${percentage}%` }}
				>

				</motion.div>
			</div>
			<div className="w-full flex justify-between pt-4 text-xl text-lima">
				<p >
					0
				</p>
				<p>
					{totalPoints}
				</p>
			</div>
		</section>
	)
}
export default DashboardSkills