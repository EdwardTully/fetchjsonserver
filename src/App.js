import DataFetch from './DataFetch';
import DataSearch from './DataSearch';
import DataPost from './DataPost';
import './App.css';

function App() {
  return (
    <div className="App">
    <DataFetch/>
    <DataSearch/>
    <br/>
    <DataPost/>
    </div>
  );
}

export default App;
