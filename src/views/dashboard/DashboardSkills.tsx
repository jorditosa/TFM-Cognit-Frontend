import { useLocation } from "react-router-dom"
import { t } from 'i18next'
import { motion } from "framer-motion";

const DashboardSkills = () => {
	const location = useLocation();
	const { player } = location.state;
	const percentage = Math.min((player.points / 2000) * 100, 100);

	return (
		<section
			className='h-screen flex flex-col items-center pt-12'
		>
			<h1 className="text-lima text-3xl my-2 text-center">
				{t('skills_title')}
			</h1>
			<div className="w-full max-w-lg mx-auto text-xl bg-blue rounded-md h-8 overflow-hidden border-4 border-blue shadow shadow-aqua">
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
					className="h-full bg-lima transition-all duration-300 ease-out"
					style={{ width: `${percentage}%` }}
				></motion.div>
			</div>
		</section>
	)
}
export default DashboardSkills