
import './App.css';

const book = {
  title: 'A Farwell to Arms',
  author: 'Earnest Hemingway',
  published: '1929',
  image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51AudOuC4-L.jpg',
  width: '264',
  height: '378'
};
 
function Bookshelf() {
 return (
   <div>
     <h2>{book.title} ({book.published})</h2>
     <p>{book.author}</p>
     <img
        className="bookCover"
        src={book.image}
        alt={book.title + ' cover'}
        style={{
          width: book.width,
          height: book.height
        }}
     />
    </div>
  );
}


function MagicButton() {
  return (
    <div>
      <h3>This is a magic button</h3>
      <button>Magic</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bookshelf />
        <MagicButton />
      </header>
    </div>
  );
}
export default App;