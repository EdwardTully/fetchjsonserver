import DataFetch from './DataFetch';
import DataSearch from './DataSearch';
import DataPost from './DataPost';
import './App.css';

function App() {
  return (
    <div className="App">
    
    <DataSearch/>
    <br/>
    <DataPost/>
    <br/>
    <DataFetch/>
    </div>
  );
}

export default App;
