import { t } from 'i18next'
import React from 'react'

const GameWater = () => {
	const gameType = 'quizz'

	return (
		<div className="container mt-40 w-full flex flex-col items-center">

			<h2 id="questionTitle" className="text-lima text-2xl">Titulo Juego</h2>

			{gameType === 'quizz' && (
				<div className="mt-6 w-full px-4">
					<input
						id="answer1"
						type="text"
						className={'mt-8 py-2 pl-4 w-full rounded-md border-lima-200 shadow-sm text-lima bg-blue border-4 border-lima  placeholder:text-lima'}
					/>
					<input
						id="answer2"
						type="text"
						className={'mt-8 py-2 pl-4 w-full rounded-md border-lima-200 shadow-sm text-lima bg-blue border-4 border-lima  placeholder:text-lima'}
					/>
					<input
						id="answer3"
						type="text"
						className={'mt-8 py-2 pl-4 w-full rounded-md border-lima-200 shadow-sm text-lima bg-blue border-4 border-lima  placeholder:text-lima'}
					/>
					<input
						id="answer4"
						type="text"
						className={'mt-8 py-2 pl-4 w-full rounded-md border-lima-200 shadow-sm text-lima bg-blue border-4 border-lima  placeholder:text-lima'}
					/>
				</div>
			)
			}

			{gameType === 'action' && (
				<div className="flex flex-col justify-center items-center mt-6 w-full px-4">
					<p className="text-lima text-xl">
            Acción
					</p>
					<button
						id="submitAction"
						type="submit"
						className={'mt-24 py-2 w-full text-3xl rounded-md border-lima-200 shadow-sm text-white bg-blue border-4 border-lima'}
					>
						{t('game_action_cta')}
					</button>
				</div>
			)}

		</div>
	)
}
export default GameWater