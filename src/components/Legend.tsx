import { t } from 'i18next'
import { Link } from 'react-router-dom'

const Legend = () => {
	return (
		<div className="container w-full mx-auto flex items-center justify-center mt-96 ">
			<div
				className="relative flex items-center justify-between gap-4 bg-blue/50 rounded-full p-4 text-white"
			>
				<p className="text-lg font-medium">
					{t('help_tag_game')}
				</p>

				<Link
					to="/"
					title="help"
				>
					<button
						aria-label="Close"
						className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"

					>
						<img src="/assets/icons8-ayuda-50.png" alt="" />
					</button>
				</Link>
			</div>
		</div>
	)
}
export default Legend