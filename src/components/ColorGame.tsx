import { useEffect, useState } from 'preact/hooks';
import { checkColor, fetchColor } from '../utils/backendRequests';

export function ColorGame() {
	const [colorCode, setColorCode] = useState('#444444');
	const [inputValue, setInputValue] = useState('');
	const [message, setMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isColor, setIsColor] = useState(false);
	
	useEffect(() => {
	  const getColor = async () => {
	  	const newColor = await fetchColor();
	  	setColorCode(newColor);
	  };
		getColor();
	}, []);

	const handleInput = (e: Event) => {
		const value = (e.target as HTMLInputElement).value;
		const formattedValue = value.startsWith('#') ? value : `#${value}`;
		setInputValue(formattedValue);
		const isValidColorCode = /^#?([0-9A-Fa-f]{6})$/.test(formattedValue);
		setIsColor(isValidColorCode);
	};

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		if (isColor) {
			setIsLoading(true);
			const backendMessage = await checkColor(inputValue, colorCode);
			setMessage(backendMessage.message);
			setIsLoading(false);
		} else {
			setMessage('Invalid color code.');
		}
	};

	const buttonStyle = isColor ? `background-color: ${inputValue}` : '';
	const colorBlockStyle = `background-color: ${colorCode}`;

	return (
		<div>
			<div 
				class='color-block' 
				style={colorBlockStyle}
			/>
			<h1>Guess the color!</h1>
		  <form onSubmit={handleSubmit}>
		  	<input
		  		type="text"
		  		value={inputValue}
		  		onInput={handleInput}
		  		placeholder="#000000"
		  	/>
		  	<button type="submit" style={buttonStyle}>Submit</button>
		  	<div class='message'>
		  	{isLoading ? <p></p> : <p>{message}</p>}
		  	</div>
		  </form>
		</div>
	);
};
