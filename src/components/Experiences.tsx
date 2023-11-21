import ExperienceCard from "./ExperienceCard";

function Experiences () {
  return (
  <section id="experience" className="items2 mx-auto w-full">
    <h1>Experiences</h1>
    <ExperienceCard company="AngoraForms" role="Software Engineer" imageLink="/public/angoralogo.png" webLink="https://angoraforms.com/"></ExperienceCard>
    <ExperienceCard company="BoyOhboy Co" role="Web Developer" imageLink="/public/boyohboy.png" webLink="https://boyohboy.store/"></ExperienceCard>
    <ExperienceCard company="Ideon" role="Data Admin" imageLink="/public/ideon.jpeg" webLink="https://ideonapi.com/"> </ExperienceCard>
    <ExperienceCard company="NYU Langone" role="Engineering Intern" imageLink="/public/NYULangone.jpeg" webLink="https://nyulangone.org/locations/rusk-rehabilitation"></ExperienceCard>
  </section>

  )
}

export default Experiences