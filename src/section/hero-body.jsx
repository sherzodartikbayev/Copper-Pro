import { down, like, union } from "../assets/icons"
import { HeroBodyCard, HeroBodyEndCard, HeroBodySaleCard, HeroBodyUserCard } from "../constants"
import { styles } from "../utils/style"
import { Button } from "../components"

const HeroBody = () => {

  return (
    <>
      <section className={`${styles.padding} flex flex-col justify-center bg-white w-full min-h-screen`}>
        {/* title  */}
        <h1 className="font-lora text-5xl max-md:text-4xl max-ss:text-2xl text-black text-center mt-5 lg:mb-10 xs:mb-5">Наша продукция</h1>

        {/* cards */}
        <div className={`grid grid-cols-3 max-md:grid-cols-2 max-ss:grid-cols-1 gap-10 flex-wrap m-auto mt-5`}>
          {HeroBodyCard.map((item) => (
            <div className="w-[300px] h-[300px] relative" key={item.id}>
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.padding} ${styles.flexCenter} flex-col gap-5 w-full min-h-screen sale`}>
        {/* title  */}
        <h1 className="font-lora text-5xl max-md:text-4xl max-ss:text-2xl text-black text-center mt-5 lg:mb-10 xs:mb-5">Лучшие продажи</h1>

        {/* cards */}
        <div className={`grid grid-cols-3 max-md:grid-cols-2 max-ss:grid-cols-1 flex-wrap gap-5 mb-10`}>
          {HeroBodySaleCard.map((card) => (
            <div className={`${styles.flexCenter} p-5 flex-col w-[370px] h-[420px] relative`} key={card.id}>
              <div className="w-[400px] h-[350px]">
                <button className={`${styles.flexCenter} absolute right-0 w-[50px] h-[60px] bg-white`}>
                  <img src={like} alt="like" className="object-contain" />
                </button>

                <img src={card.src} alt={card.alt} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-wrap justify-end">
                <p className="font-montserrat text-xl text-black">{card.text}</p>
                <p className="font-montserrat font-bold text-xl ss:text-xl text-black">{card.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 mb-10"><Button text="Перейти в каталог" /></div>
      </section>

      <section className={`${styles.padding} ${styles.flexCenter} flex-col gap-5 max-container w-full min-h-screen`}>
        {/* title  */}
        <h1 className="font-lora text-5xl max-md:text-4xl max-ss:text-2xl text-black text-center mt-5 lg:mb-10 xs:mb-5">Новинки</h1>

        {/* cards */}
        <div className={`grid grid-cols-3 max-md:grid-cols-2 max-ss:grid-cols-1 flex-wrap gap-16`}>
          {HeroBodySaleCard.map((card) => (
            <div className={`${styles.flexCenter} p-5 bg-white flex-col w-[370px] h-[420px] relative`} key={card.id}>
              <div className="w-[400px] h-[350px]">
                <button className={`${styles.flexCenter} absolute right-0 w-[50px] h-[60px] bg-white`}>
                  <img src={like} alt="like" className="object-contain" />
                </button>

                <img src={card.src} alt={card.alt} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-wrap gap-2 justify-end">
                <p className={`font-montserrat text-xl text-black ${card.id === 2 ? "text-red-500" : "text-black"}}`}>{card.text}</p>
                <p className="font-montserrat font-bold text-3xl ss:text-xl text-black">{card.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 mb-10"><Button text="Перейти в каталог" /></div>
      </section>

      <section className={`${styles.padding} w-full h-[80vh] flex flex-col justify-center gap-10 max-md:gap-7 max-ss:gap-5 max-container home`}>
        {/* title  */}
        <h1 className="font-lora text-8xl max-md:text-6xl max-ss:text-3xl text-white leading-normal">1 + 1 = 3</h1>

        {/* description  */}
        <p className="font-montserrat font-bold text-white text-4xl max-md:text-3xl max-ss:text-xl">Закажите два товара и получите третий бесплатно</p>

        {/* Button  */}
        <Button text="Купить" />
      </section>

      <section className={`${styles.flexCenter} ${styles.padding} flex-col w-full bg-white`}>
        {/* title  */}
        <h1 className="font-lora text-5xl max-md:text-4xl max-ss:text-2xl text-black text-center mt-5 lg:mb-16 ss:mb-10 xs:mb-8">Что думают о нас</h1>

        {/* card  */}
        <div className={`grid grid-cols-3 max-md:grid-cols-2 max-ss:grid-cols-1 flex-wrap gap-16`}>
          {HeroBodyUserCard.map((card) => (
            <div className="relative flex flex-col gap-5 w-[360px] h-[400px] " key={card.id}>
              <img src={union} alt="union" className="absolute top-0 right-0" />
              <img src={card.img} alt={card.alt} className="w-[63px] h-[63px] object-contain" />
              <h1 className="font-semibold text-3xl">{card.name}</h1>
              <p className="font-montserrat italic font-normal md:font-medium">{card.desc}</p>
              <p className="font-bold text-xl">{card.date}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.padding} ${styles.flexCenter} flex-col gap-5 w-full min-h-screen`}>
        {/* title  */}
        <h1 className="font-lora text-5xl max-md:text-4xl max-ss:text-2xl text-black text-center mt-5 lg:mb-10 xs:mb-5">Мы рекомендуем</h1>

        {/* cards */}
        <div className={`grid grid-cols-3 max-md:grid-cols-2 max-ss:grid-cols-1 flex-wrap gap-5 mb-10`}>
          {HeroBodySaleCard.map((card) => (
            <div className={`${styles.flexCenter} mb-10 p-5 bg-white flex-col w-[370px] h-[420px] relative`} key={card.id}>
              <div className="w-[400px] h-[350px]">
                <button className={`${styles.flexCenter} absolute right-0 w-[50px] h-[60px] bg-white`}>
                  <img src={like} alt="like" className="object-contain" />
                </button>
                <img src={card.src} alt={card.alt} className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-wrap justify-end w-full gap-2">
                <p className="font-montserrat text-xl text-black">{card.text}</p>
                <p className="font-montserrat font-bold text-3xl ss:text-xl text-black">{card.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-10"><Button text="Перейти в каталог" /></div>
      </section>


      <section className={`${styles.padding} ${styles.flexCenter} flex-col gap-5 w-full min-h-screen`}>
        {/* title  */}
        <h1 className="font-lora text-5xl max-md:text-4xl max-ss:text-2xl text-black text-center mt-5 lg:mb-10 xs:mb-5">Скидки</h1>

        {/* cards */}
        <div className={`grid grid-cols-3 max-md:grid-cols-2 max-ss:grid-cols-1 flex-wrap gap-16 mb-10`}>
          {HeroBodySaleCard.map((card) => (
            <div className={`${styles.flexCenter} p-5 bg-white flex-col w-[370px] h-[420px] relative`} key={card.id}>
              <div className="w-[400px] h-[350px]">
                <div className={`${styles.flexCenter} absolute top-7 left-4 w-[84px] h-[36px] bg-primary text-white font-montserrat font-semibold`}>sale</div>

                <button className={`${styles.flexCenter} absolute right-0 w-[50px] h-[60px] bg-white`}>
                  <img src={like} alt="like" className="object-contain" />
                </button>

                <img src={card.src} alt={card.alt} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-wrap justify-end">
                <p className="font-montserrat text-xl text-black">{card.text}</p>

                <div className="flex flex-col">
                  <p className="font-montserrat font-bold text-xl ss:text-xl text-slate-300 line-through">{card.price}</p>
                  <p className="font-montserrat font-bold text-3xl ss:text-xl text-primary">{card.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16"><Button text="Перейти в каталог" /></div>
      </section>

      <section className={`${styles.padding} ${styles.flexCenter} flex-col w-full sale`}>
        {/* title  */}
        <h1 className="font-lora text-5xl max-md:text-4xl max-ss:text-2xl text-black text-center mt-5 mb-15 lg:mb-10 xs:mb-5">Почему выбирают нас</h1>

        <div className={`grid grid-cols-4 max-md:grid-cols-2  gap-10 mx-auto max-w-[1920px]`}>
          {HeroBodyEndCard.map((item) => (
            <div className="flex flex-col gap-5" key={item.id}>
              <div className={`${styles.flexCenter} bg-gradient w-[76px] h-[76px]`}>
                <img src={item.icon} alt={item.alt} className="object-contain" />
              </div>

              <h1 className="font-montserrat font-bold text-xl max-xs:text-base">{item.title}</h1>
              <p className="font-montserrat text-base max-sm:text-sm">{item.desc}</p>
              <p className={`flex gap-5 font-montserrat font-bold text-base text-gradient cursor-pointer`}>Читать больше  <img src={down} alt="down" className="object-contain" /></p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default HeroBody