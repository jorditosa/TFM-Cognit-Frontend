import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Rombo from '../../components/Rombo'
import { useLanguageStore } from '../../store'

const Languages = () => {
	const { t, i18n } = useTranslation()
	const setLanguage = useLanguageStore(state => state.setLanguage)

	const changeLanguage = (language: string) => {
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
							setLanguage('ca')
						}}
					>
						<Rombo
							textContent={
								t('language_catalan_btn')
							}
							font="md"
							size="sm"
							bg='lima'
						/>
					</button>
				</Link>
				<Link to='/'>
					<button
						onClick={() => {
							changeLanguage('es')
							setLanguage('es')
						}}
					>
						<Rombo
							textContent={
								t('language_spanish_btn')
							}
							font="md"
							size="sm"
							bg='lima'
						/>
					</button>
				</Link>
			</div>
		</section>
	)
}
export default Languages