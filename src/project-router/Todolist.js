import React from 'react';
import './Todolist.css'
import Todo from "../componets/images/todovideo.mp4";
import Card from "react-bootstrap/Card";


function Todolist() {
  return (
    <Card className="text-center bg-transparent border-0 text-white todo-container" id="project">
      {/* Background video */}
      <video autoPlay muted loop className="background-video">
        <source src={Todo} type="video/mp4" />
      </video>

      {/* Main content */}
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title id="project-title"> Todo List Application </Card.Title>
        <Card.Text id="project-text">
        This Todo List application is built using React to manage tasks in an intuitive and user-friendly interface. It allows users to easily add, filter, and manage tasks with the following features:
        </Card.Text>
        <p className='futers-todo'>
          <p>. Add Tasks: Users can add tasks with a simple input field</p> <br></br>
          <p>. Task Completion: Users can toggle between marking tasks as complete or incomplete</p><br></br>
          <p>. Task Filtering: Tasks can be filtered by status, including all, complete, or incomplete</p><br></br>
          <p>. Delete Functionality: Tasks can be deleted individually to keep the list up-to-date</p><br></br>
          <p>. Responsive Design: The app is designed to be user-friendly on various screen sizes</p><br></br>
        </p>
        <div className="container-btn-todo">

          <a href='https://praveen-todolist-app-react-js.netlify.app/'>
          <button className='button'>live-link</button>
          </a>
        <a href="https://github.com/praveendeveloper17/todo-list.git">
          <button class="button">sorece-link</button>
        </a>
      </div>
      </Card.Body>
      </Card>
  )
}

export default Todolist