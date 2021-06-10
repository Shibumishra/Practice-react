import logo from './logo.svg';
import './App.css';
import Event from './Event';
import Apple from './Event/Event_class';
import Input from './Input';
import HideShow from './HideShow';
import Form from './Form';
import Profile from './Profile';
import User from './Component/User';
import Parent from './LifeCycleClassMethods';
import Parents from './LifeCycleFuncationMethod';


function App() {
  return (
    <div className="App">

     <Event />
     <hr />
     <Apple />
     <hr />
     <Input />
     <hr />
     <HideShow />
     <hr />
     <Form />
     <hr />
     <Profile />
     <hr />
     <User />
     <hr />
     <Parent />
     <hr /> 
     <Parents />
    </div>

  );
}

export default App;
