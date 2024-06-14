
import './App.css';
// import AddTodo from './component/AddTodo';
// import Todos from './component/Todos';
import Container from './component/counter_redux/Container';
import Header from './component/counter_redux/Header';
import PrivacyMessage from './component/counter_redux/PrivacyMessage';
import DisplayContainer from './component/counter_redux/DisplayContainer';
import { useSelector } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import Controls from './component/counter_redux/Controls';


function App() {
  const privacy = useSelector((store) => store.privacy);
  return (     
    <center className='px-4 py-5 my-5 text-center'>
      <Container>
        <Header></Header>
        <div className='col-lg-6 mx-auto'>
          {privacy ? <PrivacyMessage/> : <DisplayContainer/>}
          <Controls/>
        </div>
      </Container>
    </center>
  );
}

export default App;
