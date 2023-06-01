

interface ButtonProps {

    type: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    text: string;
    disabled?: boolean;
    variant?: "primary" | "secondary";

}

export default function Button(props: ButtonProps) {
    const { type, onClick, text, disabled, variant } = props;
    const bgColor = variant === "primary" ? "bg-primary hover:saturate-150 text-white" : "bg-white hover:bg-gray-100 text-primary border border-primary";

    return (
    <button 
    className={`px-4 py-2 rounded ${bgColor}`}
    type={type} 
    onClick={onClick} 
    disabled={disabled}>
        {text}
    </button>
  )
}
