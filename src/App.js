import './App.css';
import { Navbar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop';
import Home from './Page/HomePage/Home';
import Products from './Page/Products/Products';
import Services from './Page/Services/Services';
import SignUp from './Page/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyle';

function App() {
  return (
    <div className='App'>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Products' exact component={Products} />
          <Route path='/Services' exact component={Services} />
          <Route path='/Sign-Up' exact component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
