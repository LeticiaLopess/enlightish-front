"use client";

import Button from '@/components/Button';

export default function Start() {
    return (
        <div
            id="start"
            className="overflow-x-hidden px-6 md:px-12 lg:px-40 pt-8 lg:pt-40 pb-20 lg:pb-32"
        >
            <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-20 w-full max-w-[1350px] m-auto">
                <section className="w-full mt-20 lg:mt-0">
                    <p className="text-3xl lg:text-[54px] leading-[1.1] font-semibold text-night">
                        Tenha uma experiência enriquecedora enquanto aprende
                        <span className="text-crayola pl-3">inglês</span>
                    </p>

                    <p className="text-md lg:text-xl mt-6 text-night-200 max-w-[35rem]">
                        Escola de idiomas com inglês cristão e missionário que prepara você para impactar o mundo!
                    </p>

                    <Button
                        onClick={() =>
                            window.open('https://wa.me/5521979168064', '_blank')
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
        </div>
    );
}
