import { animated } from "@react-spring/web";
import { t } from "i18next";
import useFadeInAnimation from "../../hooks/useFadeInAnimation";

const ProfileAbout = () => {
  const props = useFadeInAnimation();

  return (
    <section className='w-full h-screen'>

      <animated.div style={props}>
        <div className="container mt-4 w-full flex flex-col">
          <h1 className="text-lima text-3xl my-2 border-b-4 w-full border-lima px-6">
            {t('about_heading')}
          </h1>
        </div>

        <div className="text-lima container px-6 pb-12">
          <article>
            <p className="mt-4">
              {t('about_explanation_1')}
            </p>
            <p className="mt-4">
              {t('about_explanation_2')}
            </p>

            <p className="mt-4">
              {t('about_explanation_3')}
            </p>

            <p className="mt-4">
             {t('about_explanation_4')}
            </p>
          </article>
        </div>
      </animated.div>


    </section>
  )
}
export default ProfileAbout