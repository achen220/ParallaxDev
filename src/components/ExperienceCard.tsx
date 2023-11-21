import './ExperienceCard.css'

function ExperienceCard (props) {
  return (
    <div id="experienceCardContainer">
      <div id="experienceCard" className="mx-auto">
        <div id="frontCard" className="w-full text-gray-700 bg-white dark:bg-[#F4EEE0] px-5 my-5 shadow-lg shadow-black flex ">
          <div className="py-5 border-r-2 border-gray-700 rounded-tr-full rounded-br-full opacity-100">
            <h1 id="company">{props.company}</h1>
            <h2 id="role">{props.role}</h2>
          </div>
          <div id="companyImage" className="w-full opacity-20" style={{backgroundImage: `URL(${props.imageLink})`}}>
          </div>
        </div>
        <div id="backCard" className="absolute -top-5 w-full h-full text-gray-700 bg-white dark:bg-[#F4EEE0] px-5 my-5 shadow-lg shadow-black flex py-5" style={{backgroundImage: `URL(${props.imageLink})`}}>
          <a href={props.webLink} className="m-auto" target="_blank">
            <button mat-raised-button color="primary">More Info</button>
          </a>
        </div>
      </div>
    </div>
  )
}
export default ExperienceCard