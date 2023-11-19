function Drawer () {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-ghost
         bg-transparent border-none drawer-button text-gray-200">          
          <svg fill="none" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li><a>Home</a></li>
          <li><a>About Me</a></li>
          <li><a>Experience</a></li>
          <li><a>Projects</a></li>
          <li><a>Contact Me</a></li>
        </ul>
      </div>
    </div>
  )
}
export default Drawer