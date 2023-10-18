import { useState } from 'preact/hooks';
import { getColor } from '../utils/backendRequests';

export const ColorBlock = () => {
	const [colorCode, setColorCode] = useState('#888888');
	
	const colorBlockStyle = `background-color: ${colorCode}`;
	return (
		<div class='color-block' style={colorBlockStyle}>
		</div>
	);
}
