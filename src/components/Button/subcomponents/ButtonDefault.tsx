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
            className={`w-fit py-2 lg:py-1.5 px-3 rounded-lg text-sm flex justify-center items-center gap-2 text-white bg-crayola-500 hover:bg-crayola-500/95 hover:shadow-sm ${className}`}
        >
            {icon && iconPosition === 'left' && renderIcon()}
            {children}
            {icon && iconPosition === 'right' && renderIcon()}
        </button>
    )
}