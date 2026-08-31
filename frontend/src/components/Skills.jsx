function Skills() {

const skills=[
"HTML",
"CSS",
"JavaScript",
"React",
"Node.js",
"Express",
"MongoDB",
"JavaLanguage",
"SQL",
"AI & ML"
];

return(

<section id="skills">

<div className="topline">
    <h2>Skills</h2>
</div>

<div className="skill-grid">

{skills.map((skill)=>(
<div className="skill-card" key={skill}>
{skill}
</div>
))}

</div>

</section>

);

}

export default Skills;