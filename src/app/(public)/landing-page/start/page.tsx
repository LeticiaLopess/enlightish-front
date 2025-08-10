import Button from '@/components/Button';

export function Start() {
    return (
        <div
            id="start"
            className="overflow-x-hidden px-6 md:px-12 lg:px-40 lg:gap-20 pt-8 lg:pt-20 pb-20 lg:pb-32 flex flex-col lg:flex-row items-center justify-between"
        >
            <section className="w-full mt-20 lg:mt-0">
                <p className="text-3xl lg:text-[54px] leading-[1.1] font-semibold text-night">
                    Tenha uma experiência enriquecedora enquanto aprende{' '}
                    <span className="text-crayola">inglês</span>
                </p>

                <p className="text-md lg:text-xl mt-6 text-night-200">
                    A única escola de idiomas com ensino de inglês cristão e
                    missionário no Brasil!
                </p>

                <Button
                    onClick={() =>
                        window.open('https://wa.me/5521982794750', '_blank')
                    }
                    className="w-full mt-10 mb-16 lg:mb-0 text-lg py-2.5 lg:text-xl lg:w-fit lg:!px-12 lg:!py-3"
                >
                    Quero começar agora!
                </Button>
            </section>

            <img
                src="/assets/introduction-girl.png"
                alt="Welcome"
                className="w-[100%] lg:w-[50%] lg:min-w-[430px]"
            />
        </div>
    );
}
