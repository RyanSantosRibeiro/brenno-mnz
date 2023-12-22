import './App.css';
import './scss/reset.scss';
import './scss/all.scss';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './pages/Home';
import WhiteLabel from './pages/WhiteLabel';
import Me from './pages/Me';
import Header from './components/Header';
import Footer from './components/Footer';
import Develop from './components/Develop';
import Brenno from './pages/Brenno';
import Suits from './pages/Suits';



function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/brenno-mnz" element={<Home />} />
      <Route exact path="/white-label" element={<WhiteLabel />} />
      <Route exact path="/suits" element={<Suits />} />
      <Route exact path="/brenno" element={<Brenno />} />
      {/* <Route path="users" element={<Users />}>
        <Route path="me" element={<OwnUserProfile />} />
        <Route path=":id" element={<UserProfile />} />
      </Route> */}
    </Routes>
    <Footer/>
    <Develop/>
  </BrowserRouter>
  );
}

export default App;