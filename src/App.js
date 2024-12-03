import './App.css';
import Home from './componets/Home';
import Navtop from './componets/Navtop';
import About from './componets/About';
import Footer from './componets/Footer';
import Skills from './componets/Skills';
import Projectlayout from './project-router/Projectlayout';
// import ContactForm from './componets/CcontactForm';


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Navtop />
      <Home />
      <About />
      <Skills />
      <Projectlayout/>
      <Footer />
      
    </>
  );
}

export default App;
