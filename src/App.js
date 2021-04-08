import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Team from "./Components/Team/Team";
import NotFound from './Components/NotFound/NotFound';
import TeamDetails from "./Components/TeamDetails/TeamDetails";

function App() {
  return (
    <div>
       <Router>
         <Switch>
           <Route path="/home">
             <Home></Home>
           </Route>
           <Route path="/teamDetails/:id">
            <TeamDetails></TeamDetails>
           </Route>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route path="/*">
             <NotFound></NotFound>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
