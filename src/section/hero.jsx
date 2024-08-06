import { Button } from "../components";
import { styles } from "../utils/style";

const Hero = () => {
  return ( 
    <section className={`${styles.paddingX} w-full flex flex-col justify-center min-h-screen gap-10 max-md:gap-7 max-ss:gap-5 max-container home`}>
      {/* title  */}
      <h1 className="font-lora text-8xl max-md:text-6xl max-ss:text-3xl text-white leading-normal">Хит продаж</h1>
      {/* description  */}
      <p className="font-montserrat font-bold text-white text-4xl max-md:text-3xl max-ss:text-xl">Дистиллятор для эфирных масел</p>
      <div className="flex gap-20 max-md:gap-10 max-ss:gap-5">
        <p className="font-montserrat text-3xl max-md:text-2xl max-ss:text-base text-white">Цена</p>
        <p className="font-montserrat font-bold text-3xl max-md:text-2xl max-ss:text-base text-white">4 906 грн</p>
      </div>
      {/* Button  */}
      <Button text="Купить" />
    </section>
  )
}

export default Hero