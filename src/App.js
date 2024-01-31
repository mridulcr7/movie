
import './App.css';
import Body from './components/body';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import ShowDetails from './components/showdetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={Body} />
          <Route path="/show/:id" element={ShowDetails} />
        </Routes>
      </Router>
     
      
    
    </div>
  );
}

export default App;
