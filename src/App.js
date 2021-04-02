import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.sass';

function App() {
  return (
    pug`
      Container.App
        Row
          Col Home
    `
  );
}

export default App;
