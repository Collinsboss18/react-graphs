import './App.css';
import BarChart from './Components/BarChart';
import PieChart from './Components/PieChart';

function App() {
	return (
		<div className="App">
			<h1>React Graphs</h1>
			<div className={'ui container'}>
				<BarChart />
				<br />
				<PieChart />
			</div>
		</div>
	);
}

export default App;
