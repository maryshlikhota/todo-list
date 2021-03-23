import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import AuthorList from './components/Authors.js'
import AuthorItem from './components/AuthorItem.js'
import ProjectsList from './components/Projects.js'
import ProjectItem from './components/ProjectItem.js'
import ToDoList from './components/ToDo.js'
import ToDoItem from './components/ToDoItem.js'
import Index from './components/Index.js'
import MenuList from './components/Menu.js'
import Footer from './components/Footer.js'
import { HashRouter, Route, Link, Switch, Redirect, BrowserRouter } from 'react-router-dom'

const NotFound404 = ({ location }) => {
    return (
        <div>
            <h1>Страница по адресу '{location.pathname}' не найдена</h1>
        </div>
    )
}

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'authors': [],
            'projects': [],
            'todo_list': [],
            'menu_list': [],
            'footer': []
        }
    }

    componentDidMount() {
        const requestAuthors = axios.get('http://127.0.0.1:8000/api/authors');
        const requestProjects = axios.get('http://127.0.0.1:8000/api/projects');
        const requestToDo = axios.get('http://127.0.0.1:8000/api/todo');
        axios.all([requestAuthors, requestProjects, requestToDo])
            .then(
                axios.spread((...responses) => {
                    const authors = responses[0].data;
                    const projects = responses[1].data;
                    const todo_list = responses[2].data;
                    this.setState(
                        {
                            'authors': authors,
                            'projects': projects,
                            'todo_list': todo_list,
                            'menu_list': [
                                {'url': '/', 'title': 'Main'},
                                {'url': '/authors', 'title': 'Authors'},
                                {'url': '/projects', 'title': 'Projects'},
                                {'url': '/todo', 'title': 'ToDo'},
                            ],
                            'footer': [
                                "Privacy | Terms © 2021 Todo Inc."
                            ]
                        }
                    )
                })
            ).catch(error => console.log(error))
    }

    render () {
        return (
            <div className="App Content">
                <BrowserRouter>
                    <MenuList menu_list={this.state.menu_list} />
                    <div className="ContentWrap">
                        <Switch>
                            <Route exact path='/' component={() => <Index />} />
                            <Route exact path='/authors' component={() => <AuthorList authors={this.state.authors} />}  />
                            <Route exact path='/projects' component={() => <ProjectsList projects={this.state.projects} />} />
                            <Route exact path='/todo' component={() => <ToDoList todo_list={this.state.todo_list} />} />
                            <Route path="/author/:username">
                                <AuthorItem authors={this.state.authors} />
                            </Route>
                            <Route path="/project/:id">
                                <ProjectItem projects={this.state.projects} />
                            </Route>
                            <Route path="/todo/:id">
                                <ToDoItem todo_list={this.state.todo_list} />
                            </Route>
                            <Route component={NotFound404} />
                        </Switch>
                    </div>
                    <Footer footer={this.state.footer} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App;