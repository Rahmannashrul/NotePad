import './Components/Css/App.css';
import Notes from './Components/NoteComponents/Notes';
import Header from './Components/NoteComponents/Header';

function App() {
  return (
    <div className='main'>
      <Header />
      <Notes />
    </div>
  );
}

export default App;
