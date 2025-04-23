import { ButtonLinkProps } from "../types/ButtonLink";

export function ButtonLink({ children, to, className, onClick }: ButtonLinkProps) {
    return (
        <a href={to} onClick={onClick} className={`text-night cursor-pointer w-fit flex justify-center items-center hover:underline hover:text-crayola ${className}`}>
            {children}
        </a>
    )
}