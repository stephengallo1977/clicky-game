import React from "react";
import logo from "./logo.svg";
import "./App.css";

// let data = [
//   {
//     name: "Ben",
//     pets: ["Lana", "Bones"]
//   },
//   {
//     name: "Laura",
//     pets: ["Scrawny", "Hallie", "Sparkles"]
//   }
// ];

// class App extends React.Component {
//   state = { data }

//   newPerson = (person) => {
//     console.log(person)
//     this.setState({
//       data: this.state.data.push(person)
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.data.map(person => (
//           <DispPerson person={person} />
//         ))}
//         <NewPerson newPerson={this.newPerson} />
//       </div>
//     );
//   }
// }

// function NewPerson(props){
//   return <input type="button" onClick={()=>props.newPerson({name: "Bob", pets: []})} value="Submit"/>
// }

// class DispPerson extends React.Component {
//   render() {
//     return (
//       <>
//         <DispName name={this.props.person.name} />
//         {this.props.person.pets.map(pet => (
//           <h5>{pet}</h5>
//         ))}
//       </>
//     );
//   }
// }

// function DispName(props) {
//   return <h1>{props.name}</h1>;
// }

// export default App;
