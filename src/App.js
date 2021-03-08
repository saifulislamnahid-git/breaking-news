
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import TopHeadline from './components/TopHeadline/TopHeadline';

function App() {
  return (
    <div>
      <h1>Breaking News with react Bootstrap</h1>
      <Header></Header>
      <TopHeadline></TopHeadline>
      <News></News>
    </div>
  );
}

export default App;
