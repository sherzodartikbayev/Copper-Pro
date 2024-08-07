import { Link } from "react-router-dom"
import { logo } from "../assets/icons"
import { footer, socialMedia } from "../constants"
import { styles } from "../utils/style"

const Footer = () => {
  return (
    <footer className={`${styles.padding} ${styles.flexBetween} w-full bg-gradient`}>
      <div className="flex flex-wrap justify-between w-full gap-10">
        <div className="flex flex-wrap justify-between w-full gap-10">
          <div className="flex flex-col gap-5">
            <img src={logo} alt="logo" className="w-[175px] h-[47px] object-contain" />
            <p className="font-montserrat text-base max-xs:text-sm text-gray">© 2021 “Copper Pro” <br /> Все права защищенны</p>
            <a href="#" className="font-montserrat text-base text-white max-xs:text-sm underline">Политика конфиденциальности</a>
          </div>
          <div className="grid grid-cols-3 max-ss:grid-cols-2 flex-wrap">
            {footer.map((item) => (
              <div className="flex flex-col gap-5" key={item.id}>
                <h1 className="font-montserrat font-bold text-xl text-white">{item.title}</h1>
                <ul className="flex flex-col gap-2">
                  {item.links.map((link) => (
                    <li className="font-montserrat hover:underline text-white cursor-pointer" key={link.name}>
                      <Link to={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-5 items-center justify-end">
          {socialMedia.map((icon) => (
            <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer" key={icon.id}>
              <a href={icon.href}>
                <img src={icon.src} alt={icon.alt} className="w-full h-full object-contain" />
              </a>
            </div>
          ))}
        </div>
      </div>

    </footer>
  )
}

export default Footer