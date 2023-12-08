import styles from "../CSS/homepage.module.css";
import { Tooltip } from "react-tooltip";
import Footer from "../Footer/Footer";
import Toggle_Mode from "../Mode/Toggle_Mode";
// import Offer from "../Offer/Offer";
import Navbar from "../Navbar/Navbar";
import Typewriter from "typewriter-effect";
import profile from "../../Images/inuse/pic2.jpg";
import react from "../../Images/inuse/react.svg";
import express from "../../Images/inuse/expressjs.svg";
import node from "../../Images/inuse/nodejs.svg";
import api from "../../Images/inuse/api.svg";
import javascript from "../../Images/inuse/javascript.svg";
import C from "../../Images/inuse/c++.svg";
import python from "../../Images/inuse/python.svg";
import html from "../../Images/inuse/html.svg";
import css from "../../Images/inuse/css.svg";
import php from "../../Images/inuse/php.svg";
import mysql from "../../Images/inuse/mysql.svg";
import mongodb from "../../Images/inuse/mongodb.svg";
import bootstrap from "../../Images/inuse/bootstrap.svg";
import git from "../../Images/inuse/git.svg";
import github from "../../Images/inuse/github.svg";
import aftereffects from "../../Images/inuse/afterEffects.svg";
import illustrator from "../../Images/inuse/illustrator.svg";
import canva from "../../Images/inuse/canva.svg";
import figma from "../../Images/inuse/figma.svg";
import wordpress from "../../Images/inuse/wordpress.svg";

import "bootstrap-icons/font/bootstrap-icons.css";
import Projects from "../Project Template/Projects";
// import { useState } from "react";

function Homepage() {
  // const [views, setViews] = useState(0);
  // const handleViews = () => {
  //   setViews(views + 1);
  // };
  return (
    <>
      <Navbar />
      <body className="container-fluid mt-5">
        <main className={`${styles.main} row column-gap-5 `}>
          {/* About me*/}
          <section className={`${styles.section}`}>
            <h1>
              {" "}
              <Typewriter
                options={{
                  strings: [
                    "Hi everyone, myself Yasir !",
                    "Nice to meet you !",
                    "Check out my Awesome portfolio!",
                    "Don't forget to follow me on Social Media Handlers!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            {/* <--------------------------Display Card -----------------------> */}
            {/* <div className="d-flex flex-row mb-3 mt-4 "> */}
            <div className={styles.about}>
              <div className={styles.display}>
                <img
                  className="rounded-circle"
                  src={profile}
                  alt="profile-pic"
                  width={100}
                />
                <h5>Yasir mansoori</h5>
                <h6>
                  MERN Developer || Full Stack Developer Enthusiast || <br />
                  Software Developer Enthusiast || CS undergrad at SRM
                  University || <br /> Lead Manager @GFG-SRMIST
                </h6>
              </div>
              <div>
                  {/* <Offer /> */}
              </div>
            </div>
            {/* <--------------------------Display Card end -----------------------> */}
            <hr />
          </section>
          {/* About me end*/}

          {/* Internships */}
          <section className={`${styles.section} pt-0`}>
            <h1>
              {" "}
              <Typewriter
                options={{
                  strings: ["My Internships !"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            {/* <-------------------------- Intern 1 -----------------------> */}
            {/* <div className="d-flex flex-row mb-3 mt-4"> */}

            <div className={`p-2`}>
              <div id="editor" className={styles.code_editor}>
                <div className={styles.header}>
                  <span className={styles.title}>
                    Technical Program Manager
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className={styles.icon}
                  >
                    <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      id="SVGRepo_tracerCarrier"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeWidth={2}
                        stroke="#4C4F5A"
                        d="M6 6L18 18"
                      />{" "}
                      <path
                        strokeLinecap="round"
                        strokeWidth={2}
                        stroke="#4C4F5A"
                        d="M18 6L6 18"
                      />{" "}
                    </g>
                  </svg>
                </div>
                <div className={styles.editor_content}>
                  <code className={styles.code}>
                    <p>
                      <span className={styles.color_0}>.Digipplus </span>{" "}
                      <span>{"{"}</span>
                    </p>
                    <p className={styles.property}>
                      <span className={styles.color_2}>Start </span>
                      <span> : </span>
                      <span className={styles.color_1}> November 2020</span>;
                    </p>
                    <p className={styles.property}>
                      <span className={styles.color_2}>End </span>
                      <span> : </span>
                      <span className={styles.color_preview_1} />
                      <span className=""> March 2021</span>;
                    </p>
                    <p
                      className={styles.property}
                      data-tooltip-id="C++"
                      data-tooltip-content="C++"
                      data-tooltip-place="bottom"
                    >
                      <span className={styles.color_2}>Location </span>
                      <span> : </span>
                      <span className={styles.color_1}>Online</span>;
                    </p>
                    <span>{"}"}</span>
                  </code>
                  <code className={styles.code}>
                    <p>
                      <span className={styles.color_0}>.Digipplus Role </span>{" "}
                      <span>{"{"}</span>
                    </p>
                    <p className={styles.property}>
                      <span className={styles.color_2}>
                        Collaborated with team members and clients to
                        troubleshoot and resolve technical issues related to
                        LaTeX software, providing timely support and assistance
                        as required.
                      </span>
                    </p>
                    <p className={styles.property}>
                      <span className={styles.color_2}>
                        Contributed to the enhancement of LaTeX documentation
                        for classes 11 and 12 at foreign universities by
                        actively participating in team meetings and
                        brainstorming sessions.
                      </span>
                    </p>
                    <p className={styles.property}>
                      <span className={styles.color_2}>
                        Acquired proficiency in other commonly used software
                        tools such as Git, Overleaf, and Markdown, which are
                        used in conjunction with LaTeX
                      </span>
                    </p>
                    <span>{"}"}</span>
                  </code>
                </div>
              </div>
            </div>

            {/* <--------------------------Intern 1 end -----------------------> */}
            <hr />
          </section>
          {/* Internships end */}

          {/* Projects  */}
          <section className={`${styles.section} pt-0`}>
            <h1>
              {" "}
              <Typewriter
                options={{
                  strings: [
                    "Welcome to my artwork !",
                    "Loook onto my projects !",
                    "Don't forget to give me a like !",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className={`${styles.project}`}>
              {/* Project 1 */}
              <Projects
                status="(Completed)"
                title="Gmail Automation Script"
                views={10}
                url="https://github.com/yasirmansoori/Gmail-Automation-Script"
                modalID="staticBackdrop1"
              />
              <div
                className="modal ease-in-out fade translate-y-4 "
                id="staticBackdrop1"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div
                    className="modal-content rounded-4 p-2"
                    style={{ backgroundColor: "#0d032d" }}
                  >
                    <div className="modal-header">
                      <h2 className="modal-title  " id="staticBackdropLabel">
                        Gmail Automation script &nbsp;
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-warning"
                          >
                            <img src={express} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-success"
                          >
                            <img src={node} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-warning"
                          >
                            <img src={javascript} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-secondary"
                          >
                            <img src={api} width={26} alt="" />
                          </div>
                        </div>
                      </h2>
                      <div className="tools">
                        <div
                          className="circle"
                          type="button"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          // onClick={handleViews}
                        >
                          <span className="red box"></span>
                        </div>
                        <div className="circle">
                          <span className="yellow box"></span>
                        </div>
                        <div className="circle">
                          <span className="green box"></span>
                        </div>
                      </div>
                    </div>
                    <div className="modal-body">
                      <h4>Description : </h4>
                      <p className="fs-5">
                        Do you want to spend your vacation stress-free, or are
                        you sick of receiving these emails? This Node.js script
                        automates the processing of unread emails in your Gmail
                        account. It retrieves unread emails, checks for prior
                        replies, and sends a predefined response if none exist.
                        It also adds a custom label (&apos;Vacation&apos;) to
                        the email and moves it out of the inbox.
                      </p>
                      <h4>Codebase :</h4>
                      <a
                        className={styles.button}
                        href="https://github.com/yasirmansoori/Gmail-Automation-Script"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          fill="#ffffff"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                          <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            id="SVGRepo_tracerCarrier"
                          />
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <title>github</title>{" "}
                            <rect fill="none" height={24} width={24} />{" "}
                            <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />{" "}
                          </g>
                        </svg>
                        Continue with Github
                      </a>
                    </div>
                    <div className="modal-footer"></div>
                  </div>
                </div>
              </div>
              {/* Project 1 content end  */}

              {/* Project 2 */}
              <Projects
                status="(Completed)"
                title="Forecast"
                views={12}
                url="https://telegram-weather-bot.azurewebsites.net/"
                modalID="staticBackdrop2"
              />
              <div
                className="modal ease-in-out fade translate-y-4 "
                id="staticBackdrop2"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div
                    className="modal-content rounded-4 p-2"
                    style={{ backgroundColor: "#0d032d" }}
                  >
                    <div className="modal-header">
                      <h2 className="modal-title  " id="staticBackdropLabel">
                        Forecast (A Telegram Bot) &nbsp;
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-success"
                          >
                            <img src={node} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-warning"
                          >
                            <img src={javascript} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-secondary"
                          >
                            <img src={api} width={26} alt="" />
                          </div>
                        </div>
                      </h2>
                      <div className="tools">
                        <div
                          className="circle"
                          type="button"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          // onClick={handleViews}
                        >
                          <span className="red box"></span>
                        </div>
                        <div className="circle">
                          <span className="yellow box"></span>
                        </div>
                        <div className="circle">
                          <span className="green box"></span>
                        </div>
                      </div>
                    </div>
                    <div className="modal-body">
                      <h4>Description : </h4>
                      <p className="fs-5">
                        Developed a versatile weather forecasting application
                        called &quot;Forecast&quot; using a Node.js framework.
                        This application seamlessly integrates with various APIs
                        to provide users with up-to-date weather information.
                        Hosted on Azure cloud services,The application is
                        equipped with a user-friendly bot that not only
                        facilitates easy access to weather conditions but also
                        enables users to set up daily, automatic, real-time
                        notifications. These notifications serve as timely
                        reminders and alerts, ensuring users stay informed about
                        the latest weather developments. Overall, Forecast
                        offers a streamlined and adaptable solution for users to
                        stay updated on the current weather effortlessly.
                      </p>
                      <h4>Codebase :</h4>
                      <a
                        className={styles.button}
                        href="https://github.com/yasirmansoori/weather-bot"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          fill="#ffffff"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                          <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            id="SVGRepo_tracerCarrier"
                          />
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <title>github</title>{" "}
                            <rect fill="none" height={24} width={24} />{" "}
                            <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />{" "}
                          </g>
                        </svg>
                        Continue with Github
                      </a>
                    </div>
                    <div className="modal-footer"></div>
                  </div>
                </div>
              </div>
              {/* Project 2 content end  */}

              {/* Project 3 */}
              <Projects
                status="(Updating)"
                title="Newswav"
                views={8}
                url="https://github.com/yasirmansoori/Newswav"
                modalID="staticBackdrop3"
              />
              <div
                className="modal ease-in-out fade translate-y-4 "
                id="staticBackdrop3"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div
                    className="modal-content rounded-4 p-2"
                    style={{ backgroundColor: "#0d032d" }}
                  >
                    <div className="modal-header">
                      <h2 className="modal-title  " id="staticBackdropLabel">
                        Newswav &nbsp;
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-primary"
                          >
                            <img src={react} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-success"
                          >
                            <img src={node} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-warning"
                          >
                            <img src={javascript} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-secondary"
                          >
                            <img src={api} width={26} alt="" />
                          </div>
                        </div>
                      </h2>
                      <div className="tools">
                        <div
                          className="circle"
                          type="button"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          // onClick={handleViews}
                        >
                          <span className="red box"></span>
                        </div>
                        <div className="circle">
                          <span className="yellow box"></span>
                        </div>
                        <div className="circle">
                          <span className="green box"></span>
                        </div>
                      </div>
                    </div>
                    <div className="modal-body">
                      <h4>Description : </h4>
                      <p className="fs-5">
                        Developed a dynamic news website utilizing technologies
                        like ReactJS, HTML, Bootstrap-CSS, and JavaScript to
                        enhance accessibility and user experience. The site
                        dynamically fetches and displays news content
                        categorized by country, spanning topics like finance,
                        sports, and business, with the capability to access news
                        data from the past 30 days. Additionally, working on
                        implementing a subscription feature that will allow
                        users to receive personalized, real-time news updates in
                        their feeds by filtering content based on categories.
                      </p>
                      <h4>Codebase :</h4>
                      <a
                        className={styles.button}
                        href="https://github.com/yasirmansoori/Newswav"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          fill="#ffffff"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                          <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            id="SVGRepo_tracerCarrier"
                          />
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <title>github</title>{" "}
                            <rect fill="none" height={24} width={24} />{" "}
                            <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />{" "}
                          </g>
                        </svg>
                        Continue with Github
                      </a>
                    </div>
                    <div className="modal-footer"></div>
                  </div>
                </div>
              </div>
              {/* Project 3 content end  */}

              {/* Project 4 */}
              <Projects
                status="(Updating)"
                title="QR Code Generator"
                views={15}
                url="https://qr-code-generetor.netlify.app/"
                modalID="staticBackdrop4"
              />
              <div
                className="modal ease-in-out fade translate-y-4 "
                id="staticBackdrop4"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div
                    className="modal-content rounded-4 p-2"
                    style={{ backgroundColor: "#0d032d" }}
                  >
                    <div className="modal-header">
                      <h2 className="modal-title  " id="staticBackdropLabel">
                        QR Code Generator &nbsp;
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-primary"
                          >
                            <img src={react} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-success"
                          >
                            <img src={node} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-danger"
                          >
                            <img src={html} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-warning"
                          >
                            <img src={javascript} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-primary"
                          >
                            <img src={bootstrap} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-secondary"
                          >
                            <img src={api} width={26} alt="" />
                          </div>
                        </div>
                      </h2>
                      <div className="tools">
                        <div
                          className="circle"
                          type="button"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          // onClick={handleViews}
                        >
                          <span className="red box"></span>
                        </div>
                        <div className="circle">
                          <span className="yellow box"></span>
                        </div>
                        <div className="circle">
                          <span className="green box"></span>
                        </div>
                      </div>
                    </div>
                    <div className="modal-body">
                      <h4>Description : </h4>
                      <p className="fs-5">
                        Developed a versatile QR Code Generator using ReactJS,
                        HTML, Bootstrap-CSS, and JavaScript. This tool
                        streamlines the creation of customized QR codes for
                        different types of URLs, offering a user-friendly
                        experience. Users can easily generate QR codes without
                        relying on external applications, and the tool allows
                        for sharing in both digital and physical formats,
                        enhancing its adaptability for diverse applications and
                        purposes.
                      </p>
                      <h4>Codebase :</h4>
                      <a
                        className={styles.button}
                        href="https://github.com/yasirmansoori/QR-generator"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          fill="#ffffff"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                          <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            id="SVGRepo_tracerCarrier"
                          />
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <title>github</title>{" "}
                            <rect fill="none" height={24} width={24} />{" "}
                            <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />{" "}
                          </g>
                        </svg>
                        Continue with Github
                      </a>
                    </div>
                    <div className="modal-footer"></div>
                  </div>
                </div>
              </div>
              {/* Project 4 content end  */}

              {/* Project 5 */}
              <Projects
                status="(Completed)"
                title="My-Blog"
                views={20}
                url="https://yasir-blog.netlify.app/"
                modalID="staticBackdrop5"
              />
              <div
                className="modal ease-in-out fade translate-y-4 "
                id="staticBackdrop5"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div
                    className="modal-content rounded-4 p-2"
                    style={{ backgroundColor: "#0d032d" }}
                  >
                    <div className="modal-header">
                      <h2 className="modal-title  " id="staticBackdropLabel">
                        My-Blog &nbsp;
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-primary"
                          >
                            <img src={react} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-success"
                          >
                            <img src={node} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-danger"
                          >
                            <img src={html} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-warning"
                          >
                            <img src={javascript} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-primary"
                          >
                            <img src={bootstrap} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-secondary"
                          >
                            <img src={api} width={26} alt="" />
                          </div>
                        </div>
                      </h2>
                      <div className="tools">
                        <div
                          className="circle"
                          type="button"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          // onClick={handleViews}
                        >
                          <span className="red box"></span>
                        </div>
                        <div className="circle">
                          <span className="yellow box"></span>
                        </div>
                        <div className="circle">
                          <span className="green box"></span>
                        </div>
                      </div>
                    </div>
                    <div className="modal-body">
                      <h4>Description : </h4>
                      <p className="fs-5">
                        Created a personal blog website using ReactJS and
                        open-source libraries like universe.io and
                        Bootstrap-css. The focus is on curating valuable content
                        for developers by aggregating information from various
                        online sources. The blog aims to stay up-to-date,
                        addressing daily trends and challenges within the
                        developer community. It provides a convenient platform
                        for developers to access and engage with concise,
                        interactive content sourced from the internet. The blog
                        is consistently updated to address current trends and
                        challenges in the developer&apos;s community.
                      </p>
                      <h4>Codebase :</h4>
                      <a
                        className={styles.button}
                        href="https://github.com/yasirmansoori/my-blog"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          fill="#ffffff"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                          <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            id="SVGRepo_tracerCarrier"
                          />
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <title>github</title>{" "}
                            <rect fill="none" height={24} width={24} />{" "}
                            <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />{" "}
                          </g>
                        </svg>
                        Continue with Github
                      </a>
                    </div>
                    <div className="modal-footer"></div>
                  </div>
                </div>
              </div>
              {/* Project 5 content end   */}

              {/* Project 6 */}
              <Projects
                status="(Completed)"
                title="SRMLP"
                views={11}
                url="https://yasirmansoori.github.io/SRMLP/"
                modalID="staticBackdrop6"
              />
              <div
                className="modal ease-in-out fade translate-y-4 "
                id="staticBackdrop6"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div
                    className="modal-content rounded-4 p-2"
                    style={{ backgroundColor: "#0d032d" }}
                  >
                    <div className="modal-header">
                      <h2 className="modal-title  " id="staticBackdropLabel">
                        SRMLP &nbsp;
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-danger"
                          >
                            <img src={html} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-primary"
                          >
                            <img src={bootstrap} width={26} alt="" />
                          </div>
                          <div
                            type="button"
                            className="btn btn-lg btn-outline-warning"
                          >
                            <img src={javascript} width={26} alt="" />
                          </div>
                        </div>
                      </h2>
                      <div className="tools">
                        <div
                          className="circle"
                          type="button"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          // onClick={handleViews}
                        >
                          <span className="red box"></span>
                        </div>
                        <div className="circle">
                          <span className="yellow box"></span>
                        </div>
                        <div className="circle">
                          <span className="green box"></span>
                        </div>
                      </div>
                    </div>
                    <div className="modal-body">
                      <h4>Description : </h4>
                      <p className="fs-5">
                        Designed innovative learning portal for SRM students,
                        boasts cutting-edge features and a user-friendly
                        interface, thanks to advanced functionalities
                        implemented using the Bootstrap front-end programming
                        platform and coded in HTML, CSS, and JS. The development
                        process included conducting thorough user research among
                        SRM students to identify their challenges, leading to
                        the implementation of solutions aimed at enhancing the
                        learning experience and ensuring a seamless user
                        journey.
                      </p>
                      <h4>Codebase :</h4>
                      <a
                        className={styles.button}
                        href="https://github.com/yasirmansoori/SRMLP"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          fill="#ffffff"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                          <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            id="SVGRepo_tracerCarrier"
                          />
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <title>github</title>{" "}
                            <rect fill="none" height={24} width={24} />{" "}
                            <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />{" "}
                          </g>
                        </svg>
                        Continue with Github
                      </a>
                    </div>
                    <div className="modal-footer"></div>
                  </div>
                </div>
              </div>
              {/* Project 6 content end  */}
            </div>
            <hr />
          </section>
          {/* Projects end */}

          {/* resume*/}
          <section className={`${styles.section} pt-0`}>
            <h3>
              {" "}
              <Typewriter
                options={{
                  strings: [
                    "Let's lookup about me!",
                    "Like what skills I have!",
                    "Where I studied!",
                    "Positions I held!",
                    "My achievements!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
            <div className={`${styles.resume}`}>
              <div className={`${styles.education}`}>
                <h2>Education</h2>
                <h4>Bachelor Of Technology </h4>
                <p className="text-secondary fst-italic d-inline-block">
                  - SRM University (Sri Ramaswamy Memorial University)
                </p>
                <p className="d-inline-block float-end">(2020 - 2024)</p>
                <p className="fs-4">
                  4th year student pursing Bachelor of Technology degree from
                  SRM University, where I excelled both academically and
                  athletically. My strong academic background reflects my
                  commitment to learning and achieving excellence in my studies.
                </p>
              </div>
              <div className={`${styles.skills}`}>
                <h2>Skills</h2>
                <h5>Proficient Skills -</h5>
                <span>
                  <div
                    className="btn btn-lg btn-outline-info m-2"
                    data-tooltip-id="C++"
                    data-tooltip-content="C++"
                    data-tooltip-place="left"
                  >
                    <Tooltip id="C++" />
                    <img className="" src={C} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg btn-outline-primary m-2"
                    data-tooltip-id="Python"
                    data-tooltip-content="Python"
                    data-tooltip-place="bottom"
                  >
                    <Tooltip id="Python" />
                    <img className="" src={python} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg btn-outline-danger m-2"
                    data-tooltip-id="HTML"
                    data-tooltip-content="HTML"
                    data-tooltip-place="bottom"
                  >
                    <Tooltip id="HTML" />
                    <img className="" src={html} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg btn-outline-primary m-2"
                    data-tooltip-id="CSS"
                    data-tooltip-content="CSS"
                    data-tooltip-place="bottom"
                  >
                    <Tooltip id="CSS" />
                    <img className="" src={css} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg btn-outline-warning m-2"
                    data-tooltip-id="javascript"
                    data-tooltip-content="Javascript"
                    data-tooltip-place="bottom"
                  >
                    <Tooltip id="javascript" />
                    <img className="" src={javascript} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg m-2"
                    style={{ borderColor: "purple" }}
                    data-tooltip-id="PHP"
                    data-tooltip-content="PHP"
                    data-tooltip-place="right"
                  >
                    <Tooltip id="PHP" />
                    <img className="" src={php} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg btn-outline-info m-2"
                    data-tooltip-id="mysql"
                    data-tooltip-content="Mysql"
                    data-tooltip-place="left"
                  >
                    <Tooltip id="mysql" />
                    <img className="" src={mysql} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg btn-outline-warning m-2"
                    data-tooltip-id="express"
                    data-tooltip-content="Express.js"
                    data-tooltip-place="bottom"
                  >
                    <Tooltip id="express" />
                    <img className="" src={express} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg btn-outline-success m-2"
                    data-tooltip-id="node"
                    data-tooltip-content="Node.js"
                    data-tooltip-place="bottom"
                  >
                    <Tooltip id="node" />
                    <img className="" src={node} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg btn-outline-success m-2"
                    data-tooltip-id="MongoDb"
                    data-tooltip-content="MongoDb"
                    data-tooltip-place="bottom"
                  >
                    <Tooltip id="MongoDb" />
                    <img className="" src={mongodb} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg btn-outline-primary m-2"
                    data-tooltip-id="Reactjs"
                    data-tooltip-content="Reactjs"
                    data-tooltip-place="bottom"
                  >
                    <Tooltip id="Reactjs" />
                    <img className="" src={react} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg m-2"
                    style={{ borderColor: "#702cf7" }}
                    data-tooltip-id="Bootstrap"
                    data-tooltip-content="Bootstrap"
                    data-tooltip-place="right"
                  >
                    <Tooltip id="Bootstrap" />
                    <img className="" src={bootstrap} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg btn-outline-secondary m-2"
                    data-tooltip-id="wordpress"
                    data-tooltip-content="Wordpress"
                    data-tooltip-place="left"
                  >
                    <Tooltip id="wordpress" />
                    <img className="" src={wordpress} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg btn-outline-secondary m-2"
                    data-tooltip-id="api"
                    data-tooltip-content="Api"
                    data-tooltip-place="right"
                  >
                    <Tooltip id="api" />
                    <img className="" src={api} width={26} alt="" />
                  </div>
                </span>
                <h5>Software/Tools -</h5>
                <span>
                  <div
                    className="btn btn-lg btn-outline-primary m-2"
                    data-tooltip-id="Aftereffects"
                    data-tooltip-content="After Effects"
                    data-tooltip-place="bottom"
                  >
                    <Tooltip id="Aftereffects" />
                    <img className="" src={aftereffects} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg btn-outline-warning m-2"
                    data-tooltip-id="illustrator"
                    data-tooltip-content="Adobe illustrator"
                    data-tooltip-place="bottom"
                  >
                    <Tooltip id="illustrator" />
                    <img className="" src={illustrator} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg btn-outline-primary m-2"
                    data-tooltip-id="canva"
                    data-tooltip-content="Canva"
                    data-tooltip-place="bottom"
                  >
                    <Tooltip id="canva" />
                    <img className="" src={canva} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg btn-outline-warning m-2"
                    data-tooltip-id="figma"
                    data-tooltip-content="Figma"
                    data-tooltip-place="bottom"
                  >
                    <Tooltip id="figma" />
                    <img className="" src={figma} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg btn-outline-secondary m-2"
                    data-tooltip-id="git"
                    data-tooltip-content="Git"
                    data-tooltip-place="bottom"
                  >
                    <Tooltip id="git" />
                    <img className="" src={git} width={26} alt="" />
                  </div>
                  <div
                    className="btn btn-lg btn-outline-dark m-2"
                    data-tooltip-id="github"
                    data-tooltip-content="Github"
                    data-tooltip-place="bottom"
                  >
                    <Tooltip id="github" />
                    <img className="" src={github} width={26} alt="" />
                  </div>
                </span>
              </div>
            </div>
            <div className={`${styles.resume}`}>
              <div className={`${styles.por}`}>
                <h2>Position of Responsibility</h2>
                <p className="text-secondary fst-italic d-inline-block">
                  - GeeksForGeeks SRMIST Delhi-NCR Chapter
                </p>
                <p className="d-inline-block float-end">(2020 - 2024)</p>
                <p className="fs-4">
                  Led a 30-member design team in successfully delivering
                  projects for campus events. Collaborated with the web
                  development team to create an interactive website, ensuring a
                  seamless user experience. Mentored junior designers, imparting
                  design principles and project management skills. Established
                  collaborative relationships with other student organizations,
                  providing design services and support for their initiatives.
                </p>
              </div>
              <div className={`${styles.awards}`}>
                <h2>Certifications</h2>
                <p className="fs-4">
                  <ul>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/15SB9qt4_Zo2a7TVc3K3EiIRaYIHrWsaB/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        AWS Cloud Virtual Course
                      </a>
                      <p className="text-secondary fst-italic">
                        Tech Stack aquired - AWS Cloud, Data analytics
                      </p>
                      <span>
                        In this course, I focused extensively on the core
                        principles of cloud computing, with a specific emphasis
                        on AWS Cloud services. The curriculum provided a
                        comprehensive exploration of cloud management, data
                        analysis, and cloud architecture. The opportunity to
                        participate in AWS Academy Cloud Architecting and AWS
                        Academy Cloud Foundations further enriched my knowledge
                        in these domains, contributing to a well-rounded
                        understanding of AWS cloud technologies.
                      </span>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <hr />
          </section>
          {/* resume end*/}

          {/* Contact Me*/}
          <section className={`${styles.section}`}>
            <h1>
              {" "}
              <Typewriter
                options={{
                  strings: [
                    "Liked my portfolio!",
                    "Contact me!",
                    "Or just say Hi!",
                    "Open for any feedback!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className={styles.contact}>
              <div className="p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596270.269222974!2d74.33274668560746!3d28.329125700422125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce19466e19ae1%3A0x45ceeb565fd5de6c!2sNational%20Capital%20Region!5e0!3m2!1sen!2sin!4v1700768620434!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-2 flex-grow-1">
                <div className="Contact_card">
                  <div className="tools">
                    <div className="circle">
                      <span className="red box"></span>
                    </div>
                    <div className="circle">
                      <span className="yellow box"></span>
                    </div>
                    <div className="circle">
                      <span className="green box"></span>
                    </div>
                  </div>

                  <div className="card__content">
                    <form
                      action="https://formsubmit.co/be5a4c10ce3abbd4180c9482941a6c39"
                      method="POST"
                    >
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="name"
                          name="name"
                          className="form-control"
                          id="name"
                          aria-describedby="nameHelp"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="email"
                          aria-describedby="emailHelp"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Textarea" className="form-label">
                          Feedback / Query
                        </label>
                        <textarea
                          name="textarea"
                          className="form-control"
                          id="Textarea"
                          rows="3"
                          required
                        ></textarea>
                      </div>
                      <input
                        type="hidden"
                        name="_next"
                        value="https://my-portfoliospace.netlify.app/"
                      ></input>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                ></div>
              </div>
            </div>
            <hr />
          </section>
          {/* Contact Me end*/}
        </main>
      </body>
      {/* Toggle dark mode */}
      <Toggle_Mode />
      {/* Toggle dark mode end */}

      {/* Footer  */}
      <Footer />
      {/* Footer end */}
    </>
  );
}
export default Homepage;
