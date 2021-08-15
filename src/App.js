import Board from './components/Board';
import Card from  './components/Card';
import './App.css';

function App() {
  return (
    <div className = "App">
      <main className ="flexbox">
        
        <Board id ="board-1" className = "board">
        <Card id ="Card-one" className="Card" draggable ="true">
          <p> Card one</p>
        </Card>
        </Board>
        

        <Board id ="board-2" className = "board">
        <Card id ="Card-two" className="Card" draggable ="true">
          <p> Card two</p>
        </Card>
      
        </Board>  




      </main>
    </div>
  );
}

export default App;
