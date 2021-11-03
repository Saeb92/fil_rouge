import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "MESSAOUDI Saeb" },
      { id: 2, nom: "Hanyce GUIREN" },
      { id: 3, nom: "Guillaume RAYNARD" }
    ]
  };
  render() {
    const title = "Lise de clients";

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map((client) => (
            <li>
              {client.nom} <button>X</button>
            </li>
          ))}
        </ul>
        <form>
          <input type="text" placeholder="Ajout un client" />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
