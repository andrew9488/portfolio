import React from "react"
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {MyProjects} from "./MyProjects/MyProjects";
import {Contacts} from "./Contacts/Contacts";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main/>
                <Skills/>
                <MyProjects/>
                <Contacts/>
                {/*<Route path={"/main"} render={() => <Main/>}/>*/}
                {/*<Route path={"/skills"} render={() => <Skills/>}/>*/}
                {/*<Route path={"/myProjects"} render={() => <MyProjects/>}/>*/}
                {/*<Route path={"/contacts"} render={() => <Contacts/>}/>*/}
                <Route path="/social-network" render={()=> window.location.href = 'https://github.com/andrew9488/social-network'}/>
                <Route path="/todolist" render={()=> window.location.href = 'https://github.com/andrew9488/todoList'}/>
                <Route path="/linkedId" render={()=> window.location.href = 'https://www.linkedin.com/in/andrewpashkevich/'}/>
                <Route path="/github" render={()=> window.location.href = 'https://github.com/andrew9488'}/>
                <Route path="/telegram" render={()=> window.location.href = 't.me/Pashkevichandrew'}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
