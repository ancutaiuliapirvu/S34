import './App.css';
import UserComponent from './componente/UserComponent';

const psgUsers = [
  {
    name: "Lionel Messi",
    email: "lionel.messi@gmail.com",
    marketValueTrend: "same",
    isNew: true,
    id:0
  },
  {
    name: "Kylian Mbappe",
    email: "kylian.mbappe@gmail.com",
    marketValueTrend: "up",
    isNew: false,
    id:1
  },
  {
    name: "Neymar Jr.",
    email: "neymar.jr@gmail.com",
    marketValueTrend: "down",
    isNew: false,
    id: 2
  },
  {
    name: "Lionel Messi",
    email: "lionel.messi@gmail.com",
    marketValueTrend: "same",
    isNew: true,
    id:3
  },
];

function App() {
  return (
    <div className="App">
      <UserComponent users={psgUsers}/>
    </div>
  );
}

export default App;
