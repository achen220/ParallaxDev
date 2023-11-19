import Drawer from "./Drawer"
import Dropdown from "./Dropdown"
function Header () {
  return (
    <div className="navbar shadow-2xl ">
      <div className="flex-none">
        <Drawer />
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl">Aaron Chen</a>
      </div>
      <div className="flex-none">
        <Dropdown />
      </div>
    </div>
  )
}

export default Header