import "./styles.css";
import type { ReactNode, MouseEvent } from "react";

type ButtonVariant = "outline" | "solid";
interface ButtonProps {
	variant?: ButtonVariant;
	className?: string;
	disabled?: boolean;
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
	children?: ReactNode;
	[key: string]: any;
}
const Button = ({
	variant = "solid",
	className = "",
	disabled = false,
	onClick,
	children,
	...props
}: ButtonProps) => {
	return (
		<button
			className={`${variant} ${className}`}
			disabled={disabled}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
