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

  if (moreDetsSPan.innerHTML === "") {
    moreDetsSPan.innerHTML = "Click for more details...";
  } else {
    moreDetsSPan.innerHTML = "";
  }

  tasksDiv.classList.toggle("job_more_details");
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
              <h4>Software engineer</h4>
              <h5>6/9/ - 5/5/2020</h5>
            </div>
            <div className="job_details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              iste asperiores incidunt esse temporibus reiciendis aliquid sunt.
              Ipsa, dolor quaerat.
              <div className="tasks">
                <h4>Tasks</h4>
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
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
              <h4 id="job_title">Digital Mold</h4>
              <div />
              <h5>Software engineer</h5>
              <h6>6/9/ - 5/5/2020</h6>
            </div>
            <div className="job_details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              iste asperiores incidunt esse temporibus reiciendis aliquid sunt.
              Ipsa, dolor quaerat.
              <div className="tasks">
                <h4>Tasks</h4>
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
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
              <h3 id="job_title">Digital Mold</h3>
              <div />
              <h4>Software engineer</h4>
              <h5>6/9/ - 5/5/2020</h5>
            </div>
            <div className="job_details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              iste asperiores incidunt esse temporibus reiciendis aliquid sunt.
              Ipsa, dolor quaerat.
              <div className="tasks">
                <h4>Tasks</h4>
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
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
