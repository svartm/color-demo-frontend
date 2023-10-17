import { useState } from 'preact/hooks';
import { backendStub } from '../utils/backendStub';

export const ColorForm = () => {
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
			const response = await backendStub(inputValue);
			setMessage(response);
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