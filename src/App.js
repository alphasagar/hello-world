import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Styelsheet from './components/Styelsheet';
import Inline from './components/Inline';
import './appStyles.css';
import Styles from './appStyles.module.css'


function App() {
  return (
    <div className="App">
      <h1 className='error'>ERROR</h1>
      <h1 className={Styles.success}>SUCCESS</h1>
      {/* <Inline/> */}
      {/* <Styelsheet primary = {true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind></EventBind> */}
      {/* <ClassClick></ClassClick> */}
      {/* <FunctionClick/> */}
      {/* <Counter/> */}
      {/* <Hello/> */}
      {/* <Greet name = "sagar" heroName = "kottagattu"/> */}
      {/* <Welcome name = "sagar" heroName = "kottagattu"/> */}
    </div>
  );
}

export default App;
