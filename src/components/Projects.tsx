import React from 'react' 
import Heading from './Heading';
import Card from './Card'; 
const data = [
    {
        id: 0,
        title: "Countdown Timer",
        desc: "A responsive countdown timer built using Next.js that helps users track time until a specific event.",
        img: "/project_02.jpg",
        tags: ["Next.JS", "Node", "CSS", "Typescript"],
    },
    {
        id: 1,
        title: "Interactive Resume",
        desc: "A Typescript-based interactive resume built with HTML and CSS,allowing users to showcase their skills dynamically.",
        img: "/project_01.jpg",
        tags: ["Next.JS", "Node", "CSS", "Typescript"],
    },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>  
    <Heading title='My Projects' />
    <div className='grid gap-06 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-2 place-items-center'>
    {data.map((el) => (<Card 
    key={el.id}
    title={el.title}
    desc={el.desc}
    img={el.img}
    tags={el.tags}
    />))}
    </div>
    </div>
  )
}

export default Projects
