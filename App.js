import './App.css';

function App() {
  const title = 'Welcome to the stream list moive';
  const moives = 60;

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Play { StreamListMovie } times</p>
      </div>
    </div>
  );
}

export default App;
