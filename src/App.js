import React from "react";
import "./App.css";
// import Header from "./Components/Header";
// import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import Login from "./Components/Login"
// import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import PopularG from './Components/PopularG'
import GamesUser from './Components/ChooseG'
import SearchUser from "./Components/SearchUser"
import NotFound from "./Components/NotFound";
import Layout from "./Components/Layout";


const App = () => {
  const [{ user }, dispatch] = useStateValue();


  return (
    <div className="app">
      <Router>
        {!user ? (
              <Login />
        ) : (
          <React.Fragment> 
          <Layout>
              <Switch>
              {/* <Route path="/" component={SearchUser}/>
              <Route path="/GamesUser" component={GamesUser}/> */}
              <Route path="/games" component={PopularG}/>
              <Route path="/room/:roomId" component={Chat}/>
              <Route component={NotFound}/>
              </Switch>
            </Layout>
          </React.Fragment>
        )}
      </Router>
    </div>
  );
}

// const Home = () => (
// <div>
//   <Switch>
//   <Route path="/" component={SearchUser}/>
//   <Route path="/GamesUser" component={GamesUser}/>
//   </Switch>
// </div>
// );

// <react.Fragment> esto es < > y </>
export default App;


// {
//   function App() {
//     const [{ user }, dispatch] = useStateValue();
  
  
//     return (
//       <div className="app">
//         <Router>
//           {!user ? (
//             <Login />
//           ) : (
//             <>
  
//               <Header />
//               <div className="app__body">
//                 <Sidebar/>
//                 <Switch>
//                 <Route path="/SearchUser" component={SearchUser}/>
//                 <Route path="/GamesUser" component={GamesUser}/>
//                 <Route path="/" component={PopularG}/>
//                 <Route path="/room/:roomId" component={Chat}/>
//                 <Route component={NotFound}/>
//                 </Switch>
//               </div>
//             </>
//           )}
//         </Router>
//       </div>
//     );
//   }
// }