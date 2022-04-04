import React from "react";
import { Link } from "react-router-dom";
import Task from "./components/Task.jsx";

function Home() {

  return (
    <main>
      {/* <!-- navbar --> */}
      <nav className="navbar navbar-light">
        <span className="navbar-brand mb-0 h1">MULTIPLY BY 11</span>
        <span className="navbar-brand mb-0 h1">
          {/* <a className="navbar-brand" href="./about">
            ?
          </a> */}
          <Link className="navbar-brand" to="/about">
            ?
          </Link>
        </span>
      </nav>

      <div className="container-fluid">
        {/* <!--progressbar--> */}

        <div className="row progrees-bar-row">
          <div className="col-md-6 offset-md-3">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <Task />
        {/* <!--math-task--> */}
        <div className="row math-task-row">
          <div className="math">
            <div className="math-wrapper">

              <section className="task-wrapper">
                <section className="task">
                  <div className="operator">x</div>

                  <div className="numbers">
                    <div className="multiplicant">23</div> {/*col-sm-4 offset-md-4*/}
                    <div className="multiplier">11</div> {/*col-sm -4 offset-md-4*/}
                 </div>
                </section>
              </section>
              <section className="product-wrapper">
                <div className="product" id="result">?</div>
              </section>
            </div>
          </div>


          </div>
      </div>
    </main>
  );
}

export default Home;
