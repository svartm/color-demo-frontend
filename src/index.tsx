import { render } from 'preact';
import { ColorBlock } from './components/ColorBlock';
import { ColorForm } from './components/ColorForm';

import './style.css';

export function App() {
	return (
		<div>
			<ColorBlock
				style='background-color: #00ff00' 
			/>
			<h1>Guess the color!</h1>
			<ColorForm />
		</div>
	);
}

render(<App />, document.getElementById('app'));
