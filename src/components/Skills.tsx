import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl'>Technologies I Use</h2>
          <p className='#555555 pt-2'>
            I have a foundation in web development, specializing in HTML, CSS and JavaScript. I am able to use basic HTML elements like headings, paragraphs, lists, images, and links to create simple web pages.With CSS, I can style elements to make them look better and create basic layouts.While I'm still learning, I am excited to continue improving my skills and working on small projects to practice what I have learned.
          </p>
        </div>
        <div>
<div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
  <div className='space-y-2'>
    <h2 data-aos="zoom-in-up">Typescript</h2>
    <h2 data-aos="zoom-in-up">React.js</h2>
    <h2 data-aos="zoom-in-up">Next.js</h2>
  </div>
  <div className='space-y-2'>
    <h2 data-aos="zoom-in-up">Tailwind</h2>
    <h2 data-aos="zoom-in-up">CSS</h2>
    <h2 data-aos="zoom-in-up">Node.js</h2>
    </div>
</div>
        </div>
      </div>
    </div>
  )
}

export default Skills
