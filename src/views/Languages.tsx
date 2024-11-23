import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Rombo from '../components/Rombo'
import { setLanguage } from '../store/language/language.slice'

const Languages = () => {
	const dispatch = useDispatch()
	const { t, i18n } = useTranslation()

	const changeLanguage = (language) => {
		i18n.changeLanguage(language)
	}

	return (
		<section id='language-page' className='flex flex-col items-center'>

			<h1 className="text-lima text-2xl">
				{t('language_heading')}
			</h1>

			<div className='flex gap-12 mt-20'>
				<Link to='/'>
					<button
						onClick={() => {
							changeLanguage('ca')
							dispatch(setLanguage('ca'))
						}}
					>
						<Rombo
							textContent={
								t('language_catalan_btn')
							}
							font="md"
							size="sm"
						/>
					</button>
				</Link>
				<Link to='/'>
					<button
						onClick={() => {
							changeLanguage('es')
							dispatch(setLanguage('es'))
						}}
					>
						<Rombo
							textContent={
								t('language_spanish_btn')
							}
							font="md"
							size="sm"
						/>
					</button>
				</Link>
			</div>
		</section>
	)
}
export default Languages