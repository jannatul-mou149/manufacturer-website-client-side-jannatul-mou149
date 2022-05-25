import React from 'react';
import './MyPorfolio.css';
import one from '../../Assests/images/one.png';
const MyPortfolio = () => {
    return (
        <div>
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <p class="hi">Hi There, I'm </p>
                        <h1 class="name">Jannatul Ferdousi <br />
                            <span>I build things for the web</span>
                        </h1>
                        <p class="des">Pursuing BSc in Computer Science and Engineering from Daffodil International University. My goal is to become a web developer.
                        </p>

                        <div class="action-button">
                            <a href="https://www.linkedin.com/in/jannatul-ferdousi-mou-0145881a0/" target="_blank">Check more about me</a>
                        </div>

                        <div class="contact">
                            <a href="mailto:jannatulferdousi79@gmai.com">jannatulferdousi79@gmai.com</a>
                        </div>

                    </div>
                </div>
            </section>

            <section class="about-me" id="about">
                <div class="container">
                    <div class="sec-title">
                        <div class="line"></div>
                        <div class="title">Educational Background</div>
                    </div>
                    <div class="timeline">
                        <ul>
                            <li>
                                <div class="content">
                                    <h3>Tiny Tots Preparatory School</h3>
                                    <p> Bhajahari Saha Street, Dhaka</p>
                                    <p class="grade"><span>Grade:</span> 5.00 </p>
                                </div>
                                <div class="time">
                                    <h4>January 2004 - December 2008</h4>
                                </div>
                            </li>

                            <li>
                                <div class="content">
                                    <h3> Swarupkathi Collegiate Academy</h3>
                                    <p> Swarupkati,Perojpur</p>
                                    <p class="grade"><span>Grade:</span> 5.00 </p>
                                </div>
                                <div class="time">
                                    <h4>January 2009 - December 2015</h4>
                                </div>
                            </li>

                            <li>
                                <div class="content">
                                    <h3>Dania College</h3>
                                    <p>Dania, Dhaka-1236</p>
                                    <p class="grade"><span>Grade:</span> 4.75 </p>
                                </div>
                                <div class="time">
                                    <h4>January 2016 - December 2018</h4>
                                </div>
                            </li>

                            <li>
                                <div class="content">
                                    <h3>Daffodil International University</h3>
                                    <p>Dhanmondi, Dhaka</p>
                                    <p class="grade"><span>CGPA:</span> 3.80 </p>
                                </div>
                                <div class="time">
                                    <h4>January 2019 - December 2022</h4>
                                </div>
                            </li>
                            <div style={{ "clear": "both" }}></div>
                        </ul>
                    </div>
                </div>
            </section>


            <section class="skills">
                <div class="container">
                    <div class="sec-title">
                        <div class="line"></div>
                        <div class="title">Skills I Have</div>
                    </div>

                    <div class="skill-names">
                        <p><span>HTML</span><span>CSS</span><span>JavaScript</span><span>ReactJS</span><span>NodeJS</span><span>MongoDB</span><span>FireBase</span>
                        </p>
                    </div>
                </div>
            </section>

            <section class="my-project">
                <div class="container">
                    <div class="sec-title">
                        <div class="line"></div>
                        <div class="title">My Projects</div>
                    </div>

                    <div class="projects">
                        <div class="project-1 project">
                            <img src={one} alt="" />
                            <div class="info">
                                <p class="type">Frontend Project</p>
                                <h3 class="name">Project Name</h3>
                                <p class="project-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                                    aperiam natus maxime. Atque aspernatur aut dolores magni temporibus, assumenda amet
                                    consequatur saepe reprehenderit illum quasi nobis tempora ullam cumque. Ducimus.</p>
                                <p class="technology">HTML CSS JS React MongoDB</p>
                                <div class="links">
                                    <ul>
                                        <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                                        <li><a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="project-1 project">
                            <img src={one} alt="" />
                            <div class="info">
                                <p class="type">Frontend Project</p>
                                <h3 class="name">Project Name</h3>
                                <p class="project-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                                    aperiam natus maxime. Atque aspernatur aut dolores magni temporibus, assumenda amet
                                    consequatur saepe reprehenderit illum quasi nobis tempora ullam cumque. Ducimus.</p>
                                <p class="technology">HTML CSS JS React MongoDB</p>
                                <div class="links">
                                    <ul>
                                        <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                                        <li><a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="project-1 project">
                            <img src={one} alt="" />
                            <div class="info">
                                <p class="type">Frontend Project</p>
                                <h3 class="name">Project Name</h3>
                                <p class="project-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                                    aperiam natus maxime. Atque aspernatur aut dolores magni temporibus, assumenda amet
                                    consequatur saepe reprehenderit illum quasi nobis tempora ullam cumque. Ducimus.</p>
                                <p class="technology">HTML CSS JS React MongoDB</p>
                                <div class="links">
                                    <ul>
                                        <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                                        <li><a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MyPortfolio;