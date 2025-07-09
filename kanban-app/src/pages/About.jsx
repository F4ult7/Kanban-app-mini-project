import { useState } from "react"
import teamData from "../assets/aboutTeam.json"
import "./team.css"

const About = () => {
  const [teams, setTeams] = useState(teamData)
  return (
<>
<div class="team-container">
  <header class="team-header">
    <h2 class="team-title">Project Description</h2>
    <p class="team-intro">
      <strong>K-Lane Kanban Board</strong> is a lightweight task-tracking app built
      with React. Below is the team behind the project.
    </p>
  </header>

  <section class="team-list">
    {teams && teams.map(team => (
      <article class="team-member" key={team.id}>
        <h3 class="member-name">{team.name}</h3>
        <ul class="member-info">
          <li><span>Course:</span> {team.course}</li>
          <li><span>Role:</span> {team.type}</li>
          <li><span>Bootcamp:</span> {team.Bootcamp}</li>
          <li><span>Start:</span> {team.startDate}</li>
          <li><span>End:</span> {team.endDate}</li>
        </ul>
        {team.link?.length > 0 && (
          <div class="member-links">
            {team.link.map((item, i) => (
              <a
                class="member-link"
                key={i}
                href={item.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </article>
    ))}
  </section>
</div>
</>
  )
}
export default About