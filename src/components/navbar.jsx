import { useState } from "react"
import { close, logo, menu } from "../assets/icons"
import { navLinks, navLinks_btns } from "../constants/index"
import { styles } from "../utils/style"

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false)

  const toggleHandler = () => setToggleNav((prev) => !prev);

  return (
    <header className={`${styles.paddingX} ${styles.flexBetween} h-24 w-full mx-auto z-10 fixed bg-gradient`}>
      {/* Logo  */}
      <div className="">
        <a href="/">
          <img src={logo} alt="logo" /> 
        </a>
      </div>

      {/* Navbar Links  */}
      <ul className={`${styles.flexCenter} flex-1 gap-10 max-lg:hidden`}>
        {navLinks.map((item) => (
          <li key={item.id} className="text-white hover:text-gradient transition-all duration-500"><a href={item.href}>{item.title}</a></li>
        ))}
      </ul>

      {/* Navbar mobile */}
      <div className={"sm:hidden flex flex-1 justify-end items-center"}>
        <img
          src={toggleNav ? close : menu}
          alt="nav"
          className="w-[30px] h-[30px] object-contain cursor-pointer"
          onClick={toggleHandler}
        />

      </div>

      <div className={`${styles.flexCenter} gap-5 max-sm:hidden`}>
        {navLinks_btns.map((btn) => (
          <button key={btn.id} className={`${styles.flexCenter} relative top-0 pt-10 w-[50px] h-[97px] bg-white`}>
            <img src={btn.src} alt={btn.alt} />
          </button>
        ))}
      </div>

      <div
        className={`${styles.flexCenter} ${!toggleNav ? "hidden" : "flex"
          } flex-col bg-gradient p-6 absolute top-24 right-0 left-0 w-full h-[100vh] z-[99]`}
      >
        <div className={`${styles.flexCenter} absolute top-0 gap-5`}>
          {navLinks_btns.map((btn) => (
            <button key={btn.id} className={`${styles.flexCenter} relative top-5 w-[50px] h-[100px] bg-white`}>
              <img src={btn.src} alt={btn.alt} />
            </button>
          ))} 
        </div>

        <ul className={`${styles.flexCenter} flex-col list-none flex-1`}>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-white text-[2em]
              cursor-pointer transition-all duration-500`}
            >
              <a href={nav.href}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>

  )
}

export default Navbar