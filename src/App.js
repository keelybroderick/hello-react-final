import logo from './logo.svg';
import './App.css';

const magazines = {
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true },
  { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false },
};

function ZineRack () {
  const listZines = magazines.map(zine ==>
    <li
      key={zine.ed}
      style={{
        color: zine.isAvailable ? 'green' : 'red'
      }}
    >
      {zine.title}
    </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}

const book = {
  title: 'A Farwell to Arms',
  author: 'Earnest Hemingway',
  published: '1929',
  image: '',
  width: '264',
  height: '378'
}

function Bookshelf() {
  return (
    <>
      <h2></h2>
      <p></p>
      <img>
        className="bookCover"
        src={book.title + 'cover'}
        style={{
          width: book.width,
          height: book.height
        }}
      </img>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ZineRack />
        <Bookshelf />
        <MagicButton />
      </header>
    </div>
  );
}

export default App;
