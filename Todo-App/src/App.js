
import './App.css';
import Content from './componenets/content/content';
import Footer from './componenets/footer/footer';
import Header from './componenets/header/header';

function App() {
  return (
  <>
    <section className="todoapp">
    <Header/>
    <Content/>
    </section>
    <Footer/>
    </>
  );
}

export default App;
