import { backendStub } from '../utils/backendStub';

export function ColorBlock(props) {
	return (
		<div class='color-block' style={props.style}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</div>
	);
}
