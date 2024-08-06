import { catalogHeroImg } from "../constants"
import { styles } from "../utils/style"

const Catalog = () => {
  return (
    <>
      <section className={`${styles.padding} flex flex-col justify-center w-full h-[100vh] relative top-10`}>
        {/* title  */}
        <h1 className="font-lora text-5xl max-md:text-6xl max-ss:text-2xl text-black leading-normal mb-10">Каталог</h1>

        {/* card  */}
        <div className={`${styles.flexCenter}`}>
          {catalogHeroImg.map((item) => (
            <div className={`${styles.flexCenter} w-[327px] h-[160px]`}>
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
              <h1></h1>
            </div>
          ))}
        </div>

      </section>
    </>
  )
}

export default Catalog