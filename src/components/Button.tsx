

interface ButtonProps {

    type: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    text: string;
    disabled?: boolean;
    variant?: "primary" | "secondary" | "white";

}

export default function Button(props: ButtonProps) {
    const { type, onClick, text, disabled, variant } = props;
    let bgColor
    switch (variant) {
        case "primary":
            bgColor = "bg-primary hover:saturate-150 text-white"

            break;
        case "secondary":
            bgColor = "bg-white hover:bg-gray-100 text-primary border border-primary"
            break;

        case "white":
            bgColor = "bg-none hover:bg-gray-700 text-white border border-white"
            break;
        default:
            bgColor = "bg-primary hover:saturate-150 text-white"
            break;
    }

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
