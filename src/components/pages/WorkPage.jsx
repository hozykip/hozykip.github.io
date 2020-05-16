import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function showMoreDetails(event) {
  const originEl = event.target;

  let parentDiv;
  if (originEl.classList.contains("job_panel")) {
    parentDiv = originEl;
  } else {
    parentDiv = originEl.closest(".job_panel");
  }

  const tasksDiv = parentDiv.getElementsByClassName("tasks")[0]; //parentDiv.firstChild;

  const moreDetsSPan = parentDiv.querySelector("#job_details_more");

  moreDetsSPan.innerHTML = "";

  if (tasksDiv !== null && tasksDiv !== undefined)
    tasksDiv.classList.add("job_more_details");
}

function hideMoreDetails(event) {
  const originEl = event.target;

  let parentDiv;
  if (originEl.classList.contains("job_panel")) {
    parentDiv = originEl;
  } else {
    parentDiv = originEl.closest(".job_panel");
  }

  const tasksDiv = parentDiv.getElementsByClassName("tasks")[0];
  const moreDetsSPan = parentDiv.querySelector("#job_details_more");

  moreDetsSPan.innerHTML = "Click for more details...";

  if (tasksDiv !== null && tasksDiv !== undefined)
    tasksDiv.classList.remove("job_more_details");
}

function toggleMoreDetails(event) {
  const originEl = event.target;

  let parentDiv;
  if (originEl.classList.contains("job_panel")) {
    parentDiv = originEl;
  } else {
    parentDiv = originEl.closest(".job_panel");
  }

  const tasksDiv = parentDiv.getElementsByClassName("tasks")[0];
  const moreDetsSPan = parentDiv.querySelector("#job_details_more");

  // if (moreDetsSPan.innerHTML === "") {
  //   moreDetsSPan.innerHTML = "Click for more details...";
  // } else {
  //   moreDetsSPan.innerHTML = "";
  // }

  moreDetsSPan.innerHTML = "";
  tasksDiv.classList.add("job_more_details");
}

export default function WorkPage() {
  return (
    <section className="page job_page" id="job">
      <main>
        <h1 className="page_title">Job</h1>
        <div className="jobs_container">
          <div
            className="job_panel"
            onMouseOver={showMoreDetails}
            onMouseLeave={hideMoreDetails}
            onClick={toggleMoreDetails}
          >
            <div className="job_icon">
              <FontAwesomeIcon icon="briefcase" />
            </div>
            <div className="job_title">
              <h3 id="job_title">Digital Mold</h3>
              <div />
              <h4>Senior PHP Engineer</h4>
              <h5>9/2019 - to date</h5>
            </div>
            <div className="job_details">
              My current role involves working with a team that develops and
              modifies custom applications for clients.
              <div className="tasks">
                <h5 className="task_title">Tasks</h5>
                <ul>
                  <li>Understanding and modeling client requirements</li>
                  <li>
                    Extending existing client applications such as adding custom
                    WordPress plugins to process customized client data
                  </li>
                  <li>
                    Coding various processor-intensive and data-intensive web
                    applications and configuring APIs for mobile services.
                  </li>
                  <li>
                    Hosting, updating, and maintaining client applications on
                    CPanel, and DigitalOcean hosted domains.
                  </li>
                </ul>
              </div>
              <span id="job_details_more"> Click for more details...</span>
            </div>
          </div>

          <div
            className="job_panel"
            onMouseOver={showMoreDetails}
            onMouseLeave={hideMoreDetails}
            onClick={toggleMoreDetails}
          >
            <div className="job_icon">
              <FontAwesomeIcon icon="briefcase" />
            </div>
            <div className="job_title">
              <h4 id="job_title">Border Order ltd</h4>
              <div />
              <h5>Android devloper/graphics designer</h5>
              <h6>8/2018 - 5/2019</h6>
            </div>
            <div className="job_details">
              I started working here as an Android developer intern and was
              later promoted to junior developer role. We mostly used
              Android(Java), MySQL and Firebase tools
              <div className="tasks">
                <h5 className="task_title">Tasks</h5>
                <ul>
                  <li>Developing the company’s Android applications</li>
                  <li>Creating advertisement posters using Photoshop.</li>
                  <li>Updating and maintaining the company website</li>
                </ul>
              </div>
              <span id="job_details_more"> Click for more details...</span>
            </div>
          </div>

          <div
            className="job_panel"
            onMouseOver={showMoreDetails}
            onMouseLeave={hideMoreDetails}
            onClick={toggleMoreDetails}
          >
            <div className="job_icon">
              <FontAwesomeIcon icon="briefcase" />
            </div>
            <div className="job_title">
              <h3 id="job_title">
                Kerio Valley Development Authority <br />
                (KVDA)
              </h3>
              <div />
              <h4>ICT Attache</h4>
              <h5>2/2017 - 4/2017</h5>
            </div>
            <div className="job_details">
              Worked here during my industrial attachment. Most of the work was
              hardware and network related, but I also had the chance to
              maintain the organization's website, and to interract with the
              biometric system
              <div className="tasks">
                <h5 className="task_title">Tasks</h5>
                <ul>
                  <li>Computer servicing</li>
                  <li>Basic network troubleshooting</li>
                  <li>Software installation and maintenance</li>
                </ul>
              </div>
              <span id="job_details_more"> Click for more details...</span>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
