import './App.css';
import { Route, Routes } from 'react-router';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <section className="App">
      <Routes>
        <Route path='/'>
            <Route index element={<LandingPage />}/>
        </Route>
      </Routes>
    </section>
  );
}

export default App;
