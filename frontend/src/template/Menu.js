import React from 'react'

export default function Menu() {
  return (
    <nav className="navbar navbar-inverse bg-inverse">
      <div className="container">
        <div className="navbar-header">
          <a href="#" className="navbar-brand">
            <i className="fa fa-calendar-check-o"></i>
          </a>
        </div>

        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="nav-item"><a href="#/todos">Tarefas</a></li>
            <li className="nav-item"><a href="#/about">Sobre</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
