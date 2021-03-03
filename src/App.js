import './App.css';
import NavBar from './NavBar';
import { Switch,Route } from 'react-router-dom';
import UsersListe from './Users/UsersListe'
import PostsList from './posts/PostsList';
import ListComments from './comments/ListComments';



function App() {

  return (
      

    <div className="App">
      <NavBar />

      <Switch>
          <Route exact path="/" component={UsersListe} />
          <Route  path="/user/post/userId/:id" component={PostsList} />
          <Route  path="/user/post/comments/postId/:id" component={ListComments} />
      </Switch>
        
    </div>
  );
}

export default App;
