import { useEffect, useState } from "react";
import api from "../services/api";

function Projects() {

const [projects,setProjects]=useState([]);

useEffect(()=>{

api.get("/projects")
.then(res=>setProjects(res.data))
.catch(console.log);

},[]);

return(

<section id="projects">

<div className="topline">
    <h2>Projects</h2>
</div>

<div className="projects">

{projects.map(project=>(

<div className="project-card" key={project._id}>

<h3>{project.title}</h3>

<p>{project.description}</p>

<p>{project.technologies.join(", ")}</p>

<a href="https://github.com/Surendrasingh8093?tab=repositories">GitHub</a>

</div>

))}

</div>

</section>

);

}

export default Projects;