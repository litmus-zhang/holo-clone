import { Button as Btn } from "@chakra-ui/react";



interface ButtonProps {

    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    text: string;
    variant?: "ghost" | "outline" | "solid";
    size?: "lg" | "md" | "sm" | "xs"
    colorScheme?: "brand" | string
}

export default function Button(props: ButtonProps) {
    const { type, onClick, text, variant, size, colorScheme } = props;

    const defaults: Pick<ButtonProps, 'colorScheme'> = {
        colorScheme: 'brand'
    }

    return (
        <Btn
            {...defaults}
            size={size}
            type={type}
           // colorScheme={colorScheme}
            onClick={onClick}
            variant={variant}>
            {text}
        </Btn>
    )
}
