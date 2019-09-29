import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className='nav-link' to="/">Admin Register</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/about">Faculty Register</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/topics">Student Register</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/search">Search User</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
  );
}
function Search() {
  return (
    <div className="main-block">
      <div className="left-part">
        <i class="fas fa-search"></i>
        <h1>Enter User info</h1>
      </div>
      <form method="POST" id="sform">
        <div className="title">
          <i className="fas fa-pencil-alt"></i>
          <h2>Search For User</h2>
        </div>
        <div class="info">
          <input className="fname" type="text" name="name" placeholder="Username" />
          <input type="text" name="id" placeholder="User ID" />
        </div>
        <div class="btn-group">
          <button class="btn-item" type="submit" form="sform" formAction="http://localhost:8051/user_search">search</button>
          <button class="btn-item" type="submit" form="sform" formAction="http://localhost:8051/user_delete">delete</button>
        </div>
      </form>
    </div>
  )
}
function Home() {
  return (
    <div className="main-block">
      <div className="left-part">
        <i className="fas fa-users-cog"></i>
        <h1>Enter Admin info</h1>
      </div>
      <form method="POST" id="sform">
        <div className="title">
          <i className="fas fa-pencil-alt"></i>
          <h2>Register here</h2>
        </div>
        <div class="info">
          <input type="text" name="adminid" placeholder="Admin ID" />
          <input type="text" name="Password" placeholder="Password" />
          <input type="text" name="ConfirmPassword" placeholder="Confirm Password" />
        </div>
        <div class="btn-group">
          <button class="btn-item" type="submit" form="sform" formAction="http://localhost:8051/admin_search">search</button>
          <button class="btn-item" type="submit" form="sform" formAction="http://localhost:8051/admin_insert">insert</button>
          <button class="btn-item" type="submit" form="sform" formAction="http://localhost:8051/admin_delete">delete</button>
        </div>
      </form>
    </div>
  );
}

function About() {
  return (
    <div class="main-block">
      <div class="left-part">
        <i class="fas fa-chalkboard-teacher"></i>
        <h1>Teacher Detail Form</h1>
      </div>
      <form method="POST" id="sform">
        <div class="title">
          <i class="fas fa-pencil-alt"></i>
          <h2>Register here</h2>
        </div>
        <div class="info">
          <input type="text" name="Name" placeholder="Full name" />
          <input type="text" name="Facultyid" placeholder="Faculty ID" />
          <input type="text" name="Department" placeholder="Department" />
          <input type="text" name="Courseid" placeholder="Course ID" />
          <input type="text" name="Password" placeholder="Password" />
        </div>
        <div class="btn-group">
          <button class="btn-item" type="submit" form="sform" formAction="http://localhost:8051/teach_search">search</button>
          <button class="btn-item" type="submit" form="sform" formAction="http://localhost:8051/teach_insert">insert</button>
          <button class="btn-item" type="submit" form="sform" formAction="http://localhost:8051/teach_delete">delete</button>
        </div>
      </form>
    </div>
  );
}

function Topics() {
  return (
    <div class="main-block">
      <div class="left-part">
        <i class="fas fa-graduation-cap"></i>
        <h1>Student Detail Form</h1>
      </div>
      <form method="POST" id="sform">
        <div class="title">
          <i class="fas fa-pencil-alt"></i>
          <h2>Register here</h2>
        </div>
        <div class="info">
          <input class="fname" type="text" name="Name" placeholder="Full name" />
          <input type="text" name="Rollno" placeholder="Rollno" />
          <input type="text" name="Section" placeholder="Section" />
          <input type="text" name="Department" placeholder="Department" />
          <input type="text" name="Semester" placeholder="Semester" />
        </div>
        <div class="btn-group">
          <button class="btn-item" type="submit" form="sform" formAction="http://localhost:8051/stud_search">search</button>
          <button class="btn-item" type="submit" form="sform" formAction="http://localhost:8051/stud_insert">insert</button>
          <button class="btn-item" type="submit" form="sform" formAction="http://localhost:8051/stud_delete">delete</button>
        </div>
      </form>
    </div>
  );
}

// function Topic({ match }) {
//   return (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   );
// }

export default App;
