
import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EmployeeList from './components/EmployeeList';
import EmployeeListItem from './EmployeeListItem';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <SearchBar/>
      <EmployeeList/>
      <EmployeeListItem/>
      <Header/>
      
    </div>
  );
}

export default App;
