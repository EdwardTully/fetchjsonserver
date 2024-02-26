//import DataFetch from './components/DataFetch';
import DataSearch from './components/DataSearch';
//import DataPost from './components/DataPost';
import DataPostForm from './components/DataPostForm';
import DataFetch from './components/DataFetch';
import './App.css';
import SortProducts from './components/SortProducts';

function App() {
  return (
    <div className="App">
    
   <DataPostForm/>
   <DataSearch/>
   <DataFetch/>
   <SortProducts/>
   
    </div>
  );
}

export default App;
