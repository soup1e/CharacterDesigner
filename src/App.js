import './App.css';
import Editor from './components/editor/Editor.js';
import Stats from './components/stats/Stats.js';
import Header from './components/header/Header.js';
import Display from './components/display/Display.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Main">
        <Editor />
        <Stats />
        <Display />
      </div>
    </div>
  );
}

export default App;
