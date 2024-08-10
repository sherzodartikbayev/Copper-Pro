import { Link, useLocation } from "react-router-dom"
import { styles } from "../utils/style";

const BreadCrumbs = () => {
  const location = useLocation();
  const currentLink = [];
  const crumbs = location.pathname.split('/')
    .filter(crumb => () => crumb != '')
    .map((crumb) => {
      currentLink.push(`${crumb}`)
      return (
        <div className="" key={crumb}>
          <Link to={currentLink.join('')}>{crumb}</Link>
        </div>
      )
    })

  console.log(currentLink);

  return (
    <div className={`${styles.paddingX} relative top-32 text-xl font-montserrat font-bold capitalize cursor-pointer`}><Link to="">home</Link>/{crumbs}</div>
  )
}

export default BreadCrumbs