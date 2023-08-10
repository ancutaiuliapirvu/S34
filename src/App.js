import './App.css';
import PostComponent from './componente/PostComponent';
import UserComponent from './componente/UserComponent';
import { useEffect, useState } from 'react';

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
  const [usersFromApi, setUsersFromApi] = useState([]);
  const [postsFromApi, setPostsFromApi] = useState([]);
  const [listDisplay, setListDisplay] = useState("users");
  
  useEffect(() => {    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((data) => {
        setUsersFromApi(data);
      });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then((data) => {
        setPostsFromApi(data);
      })
  }, [])

  return (
    <div className="App">
      <button>Afiseaza Useri</button>
      <button>Afiseaza Postari</button>
      {(listDisplay === 'users') && <UserComponent users={psgUsers}/>}
      {(listDisplay === 'users') && <UserComponent users={usersFromApi}/>}
      {(listDisplay === 'posts') && <PostComponent posts={postsFromApi}/>}


      
    </div>
  );
}

export default App;
