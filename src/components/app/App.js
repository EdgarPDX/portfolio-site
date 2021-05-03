import './App.css';
import Header from '../header/Header'
import Content from '../../container/Content'
import Footer from '../footer/Footer'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}

export default App;
