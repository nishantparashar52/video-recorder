import logo from './logo.svg';
import './App.css';
import VideoRecorder from './components/VideoRecorder.tsx';
import TrafficLight from './components/TrafficLight.tsx';
import JobBoard from './components/JobBoard.tsx';
import { Tictactoe } from './components/TicTacToe.tsx';
import StarRating from './components/StarRating.tsx';
import ParentComponent from './components/useCallbackQ';

function App() {
  return (
    <div className="App">
      {/* <VideoRecorder />
      <TrafficLight />
      <JobBoard />
      <Tictactoe />
      <StarRating totalStars={5} /> */}
      <JobBoard />
      {/* <ParentComponent /> */}
    </div>
  );
}

export default App;
