import "./styles.css";
type SpinnerSize = "sm" | "md" | "lg";
interface SpinnerProps {
	size?: SpinnerSize;
	color?: string;
	[key: string]: any;
}
const Spinner = ({
	size = "md",
	color = "#007bff",
	...props
}: SpinnerProps) => {
	return (
		<span
			className={`spinner spinner-${size}`}
			style={{ borderTopColor: color }}
			{...props}
		></span>
	);
};

export default Spinner;
