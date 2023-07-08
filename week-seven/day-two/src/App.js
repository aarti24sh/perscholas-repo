import React from 'react';
import Header from './components/Header';
 import Nav from './components/Nav';
 import Article from './components/Article';
 import Footer from './components/Footer';
 import './index.css';


const App = () => {
  return (
    <div className="index">
    <Header />
    <Nav />
    <Article />
    <Footer />
    </div>
  ); 
}     
  
export default App;
  