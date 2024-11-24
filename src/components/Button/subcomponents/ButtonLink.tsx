
export function ButtonLink({ children, to, className, onClick }: ButtonLinkProps) {
    return (
        <a href={to} onClick={onClick} className={`text-sm text-night-500 cursor-pointer w-fit flex justify-center items-center hover:underline hover:text-crayola-500 ${className}`}>
            {children}
        </a>
    )
}