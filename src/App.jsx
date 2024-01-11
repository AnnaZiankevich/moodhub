import '../src/styles/_main.scss'
import Header from './components/header/Header';
import MainComponent from './components/main-component/MainComponent.jsx';
import './app.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <MainComponent />
    </div>
  );
}

export default App;
