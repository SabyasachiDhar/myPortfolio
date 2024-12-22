import React from 'react';

function Home() {
    return (
        <div className="container">
            <header className="jumbotron my-5 text-center">
                <h1 className="display-3">Sabyasachi Dhar</h1>
                <p className="lead">Full Stack Developer | Tech Enthusiast | Lifelong Learner</p>
            </header>
            <section className="my-4">
                <h2>About Me</h2>
                <p> Seasoned front-end developer with 12 years of extensive experience in 
                    designing and implementing user interfaces for various platforms. 
                    Proven ability to develop responsive and visually appealing web applications 
                    using cutting-edge technologies like React, Angular, and Vue.js.Strong 
                    background in collaborating with cross-functional teams to deliver high-quality 
                    projects on time. Passionate about creating seamless and engaging user experiences. 
                    Seeking to leverage my expertise and creativity at [Company Name] to drive 
                    the development of innovative and user-centric digital solutions. </p>
            </section>
            <section className="my-4">
                <h2>Skills</h2>
                <ul className="list-group">
                    <li className="list-group-item">JavaScript</li>
                    <li className="list-group-item">React.js</li>
                    <li className="list-group-item">Node.js</li>
                    <li className="list-group-item">Express.js</li>
                    <li className="list-group-item">MongoDB</li>
                    <li className="list-group-item">HTML & CSS</li>
                </ul> </section> <section className="my-4">
                <h2>Contact</h2>
                <p>Email:
                    <a href="mailto:john.doe@example.com">john.doe@example.com</a></p>
                <p>LinkedIn:
                    <a href="https://www.linkedin.com/in/john-doe" target="_blank" rel="noopener noreferrer">linkedin.com/in/john-doe</a></p>
            </section> </div>);
}

export default Home;
