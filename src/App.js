import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import './App.css';
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container>
        <div>
          <Dashboard/>
        </div>
      </Container>
      
    </div>
  );
}

export default App;
