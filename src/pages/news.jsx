import { down } from "../assets/icons"
import { newsCards } from "../constants"
import { styles } from "../utils/style"

const News = () => {
  return (
    <>

      <section className={`${styles.padding} flex flex-col justify-center w-full mb-20`}>
        {/* title  */}
        <h1 className="font-lora text-5xl max-md:text-6xl max-ss:text-2xl text-black leading-normal mt-20 mb-5">Каталог</h1>

        {/* cards  */}
        <div className={`${styles.flexCenter}`}>
          <div className="grid grid-cols-2 max-md:grid-cols-1 flex-wrap gap-16">
            {newsCards.map((card) => (
              <div className="flex flex-col gap-5 w-[600px] max-ss:w-[290px]" key={card}>
                <div className="relative">
                  <img src={card.img} alt="image" className="object-contain" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="">{card.desc}</p>
                  <p className={`flex gap-5 font-montserrat font-bold text-base text-gradient cursor-pointer`}>Читать больше  <img src={down} alt="down" className="object-contain" /></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default News