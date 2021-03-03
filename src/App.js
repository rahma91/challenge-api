import './App.css';
import { Switch,Route } from 'react-router-dom';
import UsersListe from './Users/UsersListe'
import PostsList from './posts/PostsList';
import ListComments from './comments/ListComments';



function App() {

  return (
      

    <div className="App">
     

      <Switch>
          <Route exact path="/" component={UsersListe} />
          <Route  path="/user/post/userId/:id" component={PostsList} />
          <Route  path="/user/post/comments/postId/:id" component={ListComments} />
      </Switch>
        
    </div>
  );
}

export default App;
