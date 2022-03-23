import './App.css';
import Navbar from './navbar/navbar';
import Content from './content/content';

function App() {
  const title = 'Welcome to the blog';
  const liked = 50;

  return (
    <div className='App'>
      <Navbar/>
      <div className='Content'>
        <Content/>
      </div>
    </div>
  );
}

export default App;
