'use client'

interface SectionHeadingProps {
    title: string
}

export function SectionHeading({ title }: SectionHeadingProps) {
    return (
        <div className="flex flex-col">
            <div className="h-1 bg-crayola w-20 mb-4"></div>
            <p className="text-crayola uppercase text-xl">{title}</p>
        </div>
    )
}