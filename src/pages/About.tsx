const About = () => {
  return (
    <div className="about">
      <div className="about_container">
        {/* todo */}
        {/* take a photo :') */}
        {/* <div className="about_image">
          <img src={temp} alt="" />
        </div> */}
        <div className="about_info">
          <h1 className="about_heading">About me</h1>
          <p className="about_desc">
            Hello, my name is Stepan, and I am a dedicated software web
            developer with a strong passion for learning and keeping up with the
            latest trends in the industry.
            <br />
            <br /> I have acquired multiple certifications in web development,
            and I am committed to continuously enhancing my skills. I am
            enthusiastic about the opportunity to contribute to the field of web
            development and am eager to further advance my expertise. <br />
            <br /> In my free time, I enjoy reading books and programming, as
            well as playing games.
          </p>
          <button type="button" className="about_btn">
            <a href="mailto:stepansubrt@icloud.com" className="about_link">
              Email
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
