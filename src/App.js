import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div  className="App"> 

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-me">
            <About />
          </Route>
          <Redirect
            from='/about'
            to='/about-me'
          />
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/post/:postID">
            <Post />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function Post() {
  let { postID } = useParams();
  const [ post, setPost ] = React.useState()
  React.useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => setPost(json))
  },[postID])
  return (
    <div>
      <h2>Title post title is {post&&post.title}</h2>
      <p>{post&&post.body}</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>No match, 404 Not found</h2>
    </div>
  );
}

export default App;
