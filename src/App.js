import './App.css';


import { Navbar, Header, Features, Download, Subscribe, FAQ, Footer } from './components';

function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar/>
        <Header/>
      </header>
      <Features/>
      <Download/>
      <Subscribe/>
      <FAQ/>
      <Footer/>
    </main>
  );
}

export default App;
