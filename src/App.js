import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ViewMore from './components/ViewMore';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/details/:name" element={<ViewMore />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
