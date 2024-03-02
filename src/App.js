//import DataFetch from './components/DataFetch';
import DataSearch from './components/DataSearch';
//import DataPost from './components/DataPost';
import DataPostForm from './components/DataPostForm';
import DataFetch from './components/DataFetch';
import DataTable from './components/DataTable'
import './App.css';
import SortProducts from './components/SortProducts';
import DataTableTwo from './components/DataTableTwo';


function App() {
  return (
    <div className="App">
    <DataTable/>
    <DataTableTwo/>
   <DataPostForm/>
   <DataSearch/>
   <SortProducts/>
   <DataFetch/>
  
   
   
   
    </div>
  );
}

export default App;
