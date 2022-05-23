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
                        <p class="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla delectus ad voluptatum
                            libero
                            obcaecati eos illo error eaque eum iste!</p>

                        <div class="action-button">
                            <a href="#about">Check more about me</a>
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
                                    <h3>Primary School name</h3>
                                    <p>Your School Name</p>
                                    <p class="grade"><span>Grade:</span> .... </p>
                                </div>
                                <div class="time">
                                    <h4>January 2018 - December 2022</h4>
                                </div>
                            </li>

                            <li>
                                <div class="content">
                                    <h3>High School name</h3>
                                    <p>Your School Name</p>
                                    <p class="grade"><span>Grade:</span> .... </p>
                                </div>
                                <div class="time">
                                    <h4>January 2018 - December 2022</h4>
                                </div>
                            </li>

                            <li>
                                <div class="content">
                                    <h3>College name</h3>
                                    <p>Your School Name</p>
                                    <p class="grade"><span>Grade:</span> .... </p>
                                </div>
                                <div class="time">
                                    <h4>January 2018 - December 2022</h4>
                                </div>
                            </li>

                            <li>
                                <div class="content">
                                    <h3>University name</h3>
                                    <p>Daffodil International University</p>
                                    <p class="grade"><span>Grade:</span> .... </p>
                                </div>
                                <div class="time">
                                    <h4>January 2018 - December 2022</h4>
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