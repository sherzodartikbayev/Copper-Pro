import { aboutHeroImg, quote, signature } from "../assets/images"
import { styles } from "../utils/style"

const About = () => {
  return (
    <>
      <section className={`${styles.padding} ${styles.flexBetween} max-md:justify-center flex-wrap justify-center w-full h-[100vh] max-md:h-auto max-ss:h-auto relative top-10`}>
        <div className="flex flex-col gap-10 max-ss:mb-20">
          <h1 className="font-lora text-8xl max-md:text-4xl max-ss:text-2xl text-black mt-20">О нас</h1>
          
          <div className={`${styles.flexCenter} relative`}>
            <img src={quote} alt="quote" className="absolute top-0 left-0" />
              <p className="font-montserrat text-4xl italic mx-16 text-gradient">Мы любим все, что <br /> сделано из меди</p>
            <img src={quote} alt="quote" className="absolute bottom-0 right-0" />
          </div>

          <div className={`flex flex-wrap gap-20`}>
            <p className="font-montserrat text-3xl text-gradient font-bold">Иван <br /> Иванов</p>
            <img src={signature} alt="signature" width={188} height={90} className="object-contain" />
          </div>
        </div>

        <div className={`${styles.flexCenter}`}>
          <img src={aboutHeroImg} alt="img" className="w-[400px] h-[400px] object-contain" />
        </div>
      </section>
    </>
  )
}

export default About