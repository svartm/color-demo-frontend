import { render } from 'preact';
import { ColorGame } from './components/ColorGame';

import './style.css';


export function App() {
	return (
		<div>
			<ColorGame/>
		</div>
	);
}

render(<App />, document.getElementById('app'));
