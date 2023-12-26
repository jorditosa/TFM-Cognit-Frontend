import { t } from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'
import Rombo from '../components/Rombo'
import Logo from '/assets/logo-no-background.svg'

const ErrorPage = () => {
	return (
		<section id="error-page" className="flex flex-col justify-center gap-28 items-center h-screen">

			<img src={Logo} alt="logo" className='w-full max-w-4xl' />

			<div className="container flex flex-col justify-center items-center gap-10 p-2">
				<h1 className="text-5xl text-lima">
					{t('errorPage_heading')}
				</h1>
				<p className="text-2xl text-lima text-center">
					{t('errorPage_subheading')}
				</p>
			</div>

			<Link
				to='/'
				className="text-2xl text-lima"
			>
				<Rombo
					className="mb-4"
					textContent={
						<p>Home</p>
					}
					font="md"
					size='sm'
				/>
			</Link>


		</section>
	)
}
export default ErrorPage