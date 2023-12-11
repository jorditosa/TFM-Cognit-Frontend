import { animated } from '@react-spring/web';
import { t } from "i18next";
import { Trans } from 'react-i18next';
import useFadeInAnimation from "../../hooks/useFadeInAnimation";

const DashboardInfo = () => {
  const props = useFadeInAnimation();

  return (
    <section className='w-full'>

      <animated.div style={props}>

        <div className="container mt-4 w-full flex flex-col">
          <h1 className="text-lima text-3xl my-2 border-b-4 w-full border-lima px-6">
            {t('about_app_header')}
          </h1>
        </div>

        <div className="text-lima container px-6 pb-12">
          <article>
            <h2 className="text-2xl font-semibold pt-6">
              {t('about_app_heading_1')}
            </h2>
            <Trans i18nKey='about_app_explanation_1'>
            </Trans>
            <Trans i18nKey='about_app_explanation_2'>
            </Trans>
          </article>

          <article>
            <h2 className="text-2xl font-semibold pt-6">
              {t('about_app_heading_2')}
            </h2>
            <Trans i18nKey='about_app_explanation_3'>
            </Trans>
            <div className="flex items-center justify-between gap-2 py-2">
              <img src="/assets/icons8-agua-64.png" alt="icono" />
              <img src="/assets/icons8-reciclaje-64.png" alt="icono" />
              <img src="/assets/icons8-árbol-de-hoja-caduca-64.png" alt="icono" />
              <img src="/assets/icons8-perro-64.png" alt="icono" />
            </div>
          </article>

          <article>
            <h2 className="text-2xl font-semibold pt-6">
              {t('about_app_heading_3')}
            </h2>
            <Trans i18nKey='about_app_explanation_4'>
            </Trans>
            <Trans i18nKey='about_app_explanation_5'>
            </Trans>
          </article>

          <article>
            <h2 className="text-2xl font-semibold pt-6">
              {t('about_app_heading_4')}
            </h2>
            <Trans i18nKey='about_app_explanation_6'>
            </Trans>
            <Trans i18nKey='about_app_explanation_7'>
            </Trans>
          </article>
        </div>
      </animated.div>


    </section>
  )
}
export default DashboardInfo