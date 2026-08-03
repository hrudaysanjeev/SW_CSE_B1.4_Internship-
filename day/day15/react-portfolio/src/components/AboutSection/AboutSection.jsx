import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/my photo.jpg' alt='Sanjeev' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Sanjeev, Studing Btech in MS Ramaiah University, Current Web developing Learner.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
