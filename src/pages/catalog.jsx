import { catalogHeroImg } from "../constants"
import { styles } from "../utils/style"

const Catalog = () => {
  return (
    <>
      <section className={`${styles.padding} flex flex-col  w-full h-[100vh] max-ss:h-auto relative top-32`}>
        {/* title  */}
        <h1 className="font-lora text-5xl max-md:text-6xl max-ss:text-2xl text-black leading-normal mb-10">Каталог</h1>

        {/* card  */}
        <div className={`${styles.flexCenter}`}>
          <div className={`grid grid-cols-4 max-md:grid-cols-2 max-ss:grid-cols-1 gap-5 mb-32`}>
            {catalogHeroImg.map((item) => (
              <div className={`${styles.flexCenter} w-[330px] h-[160px]`}>
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                <h1></h1>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  )
}

export default Catalog