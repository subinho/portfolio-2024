import { foto2 } from '../assets/images';
import { Link } from 'react-router-dom';
import { skillsData } from '../assets/data';
import { Hero } from '../components';

const About = () => {
  return (
    <>
    <Hero title='Who am I ?'/>
      <section className="about">
        <div className="about_container">
          <div className="about_info">
            <img src={foto2} alt="A profile picture" className='about_image' />
            <div>
              <h3 className='about_name'>Štěpán Šubrt</h3>
              <p className="about_desc">
                I am a software web
                developer with a strong passion for learning and keeping up with the
                latest trends in the industry.
                <br />
                <br /> I have acquired multiple certifications in web development,
                and I am committed to continuously enhancing my skills. I am
                enthusiastic about the opportunity to contribute to the field of web
                development and am eager to further advance my expertise. <br />
                <br /> In my free time, I enjoy reading manhwas and programming, as
                well as playing video games.
              </p>
            </div>
          </div>
          <div className='about_skills'>
            <h4>Skills</h4>
            <div>
              <ul className='about_list'>
                {skillsData.map((skill, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: skill['bgColor'],
                  color: skill['color'],
                }}
              >
                {skill['name']}
              </li>
            ))}
              </ul>
            </div>
          </div>

          <div className='about_socials'>
            <h4>Contact me</h4>
            <ul className='about_links'>
              <li><Link to='https://www.linkedin.com/in/stepansubrt/' target='_blank' className='about_links-linkedin' >LinkedIn</Link></li>
              <li><Link to ='mailto:stepansubrt@icloud.com' className='about_links-email' >Email</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
