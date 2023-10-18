import { useState } from 'preact/hooks';
import { checkColor } from '../utils/backendRequests';

export const ColorForm = (props) => {
	const [inputValue, setInputValue] = useState('');
	const [message, setMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isColor, setIsColor] = useState(false);
	
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
			const backendMessage = await checkColor(inputValue, props.color);
			setMessage(backendMessage.message);
			setIsLoading(false);
		} else {
			setMessage('Invalid color code.');
		}
	};

	const buttonStyle = isColor ? `background-color: ${inputValue}` : '';

	return (
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
	);
};
