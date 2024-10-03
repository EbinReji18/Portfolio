import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import Works from './Components/Works';
import './bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Introduction />
      <Works />
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App