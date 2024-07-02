import React from "react";
import { Button } from "shared/ui";
import { ButtonSize } from "shared/ui/button/Button.tsx";

interface QuantityButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
    children: React.ReactNode;
}

export const QuantityButton = ({ children, onClick, ...props }: QuantityButtonProps) => (
    <Button rounded size={ButtonSize.XL} type="button" onClick={onClick} {...props}>
        {children}
    </Button>
);
