import { ButtonDefaultProps } from "../types/ButtonDefault";
import { IconBold } from "./IconBold";
import { IconOutlined } from "./IconOutline";

export function ButtonDefault({ children, icon, iconPosition = 'left', iconVariant = 'bold', className, onClick }: ButtonDefaultProps) {

    const renderIcon = () => {
        if(icon) {
            if(iconVariant === 'outline') {
                return <IconOutlined name={icon} />;

            } else if(iconVariant === 'bold') {
                return <IconBold name={icon} />;
            }
        }
        return null;
    };

    return (
        <button
            onClick={onClick}
            className={`w-fit py-2 px-5 rounded-lg flex justify-center items-center gap-2 text-white bg-crayola hover:bg-crayola/95 hover:shadow-sm ${className}`}
        >
            {icon && iconPosition === 'left' && renderIcon()}
            {children}
            {icon && iconPosition === 'right' && renderIcon()}
        </button>
    )
}