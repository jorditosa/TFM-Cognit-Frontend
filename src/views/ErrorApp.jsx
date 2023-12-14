import { t } from 'i18next'

const ErrorApp = () => {
  return (
    <section className="bg-dark flex flex-col justify-center gap-28 items-center h-screen">

       <div className="container flex flex-col justify-center items-center gap-10 p-2">
        <h1 className="text-5xl text-lima">
          {t('errorPage_heading')}
        </h1>
        <p className="text-2xl text-lima text-center">
          {t('errorPage_subheading')}
        </p>
      </div>

    </section>
  )
}
export default ErrorApp