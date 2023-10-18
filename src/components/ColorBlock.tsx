export const ColorBlock = (props) => {
	const colorBlockStyle = `background-color: ${props.color}`;
	return (
		<div class='color-block' style={colorBlockStyle}>
		</div>
	);
}
