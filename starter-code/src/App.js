import React from "react";
import "./App.css"; //permet de rassembler le CSS par composant ("offert" par webpack) import+son chemin

class App extends React.Component { //App avec un A est une convention React pour dire que c'est un composant 
  render() {
    return ( //parenthèses pour return du html sur plus d'une ligne 
      <div className="App"> {/* parce que nous sommes en react, on écrira className au lieu de class*/}
      <div>
        <img src="../public/images/menu-top.svg"/>
      </div>
        <h1> Say hello to <br></br>
        ReactJS </h1>
      </div>
    );
  }
}

export default App; //~module.exports = App; en Node