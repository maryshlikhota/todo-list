import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import AuthorList from './components/Author.js'
import MenuList from './components/Menu.js'
import Footer from './components/Footer.js'

class App extends React.Component {

   constructor(props) {
       super(props)
       this.state = {
           'authors': [],
           'menu_list': [],
           'footer': []
       }
   }

   componentDidMount() {
       axios.get('http://127.0.0.1:8000/api/authors')
           .then(response => {
               const authors = response.data
               this.setState(
                   {
                       'authors': authors,
                       'menu_list': [
                            'How It Works',
                            'Premium',
                            'For Teams',
                            'About Us',
                            'Contacts',
                       ],
                       'footer': [
                            "Privacy | Terms © 2021 Todo Inc."
                       ]
                   }
               )
           }).catch(error => console.log(error))
    }

   render () {
       return (
            <div className="Content">
                <MenuList menu_list={this.state.menu_list} />
                <AuthorList authors={this.state.authors} />
                <Footer footer={this.state.footer} />
            </div>
       )
   }
}


export default App;