//import DataFetch from './components/DataFetch';
import DataSearch from './components/DataSearch';
//import DataPost from './components/DataPost';
import DataPostForm from './components/DataPostForm';
import DataFetch from './components/DataFetch';
import DataTable from './components/DataTable'
import './App.css';
import SortProducts from './components/SortProducts';
import DataTableTwo from './components/DataTableTwo';
import ShopWindow from './components/ShopWindow';


function App() {
  return (
    <div className="App">
      <DataTable />
      <DataTableTwo />
      <ShopWindow/>
      <DataPostForm />
      <DataSearch />
      <SortProducts />
      <DataFetch />
    </div>
  );
}

export default App;
