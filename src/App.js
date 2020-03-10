import React from "react";

class ContractList extends React.Component {
  render() {
    const people = this.props.contacts;

    return (
      <ol>
        {people.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ol>
    );
  }
}

function App() {
  return (
    <div className="App">
      <ContractList contacts={[{ name: "Tyler" }, { name: "Karen" }]} />
      <ContractList contacts={[{ name: "Mikenzi" }, { name: "Amanda" }]} />
      <ContractList contacts={[{ name: "Karen" }, { name: "Richard" }]} />
    </div>
  );
}

export default App;
