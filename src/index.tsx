import { render } from 'preact';
import { ColorBlock } from './components/ColorBlock';
import { ColorForm } from './components/ColorForm';
import { getColor } from './utils/backendRequests';

import './style.css';

const colorCode = await getColor();

export function App() {
	return (
		<div>
			<ColorBlock
				color={colorCode}
			/>
			<h1>Guess the color!</h1>
			<ColorForm
				color={colorCode}
			/>
		</div>
	);
}

render(<App />, document.getElementById('app'));
