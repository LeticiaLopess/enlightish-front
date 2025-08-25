import { SectionHeading } from '@/components/SectionHeading';
import { Check } from '@/components/Check';

export default function About() {
    return (
        <div id="about" className="px-6 md:px-12 lg:px-40 py-24">
            <div className="flex flex-col lg:flex-row items-start justify-between lg:gap-20 w-full max-w-[1350px] m-auto">
                <section className="flex flex-col w-full lg:w-1/2">
                    <SectionHeading title="Sobre a escola" />

                    <div>
                        <p className="text-2xl lg:text-3xl font-semibold mt-8 text-night-600 max-w-[36rem]">
                            Aqui, inglês e propósito caminham juntos: preparamos você para anunciar o amor de Cristo ao mundo.
                        </p>
                        <p className="text-md lg:text-lg mt-6 text-neutral-600 !leading-6">
                            Seu chamado é a nossa paixão. Nós te equipamos com a
                            fluência e o vocabulário necessário. Com um foco
                            exclusivo no contexto missionário, você terá a
                            confiança para evangelizar e pregar a Palavra em
                            qualquer lugar.
                        </p>
                    </div>

                    <div className="mt-20">
                        <p className="text-2xl lg:text-2xl font-semibold text-night-600 mb-6">
                            O que nos torna únicos?
                        </p>

                        <ul className="flex flex-col gap-3">
                            <li className="flex gap-3 text-sm md:text-lg">
                                {' '}
                                <Check /> Referência no ensino de inglês para cristãos
                            </li>
                            <li className="flex gap-3 text-sm md:text-lg">
                                {' '}
                                <Check /> Material didático de acordo com seu
                                nível e objetivo
                            </li>
                            <li className="flex gap-3 text-sm md:text-lg">
                                {' '}
                                <Check /> Study planners para consolidar seu
                                aprendizado
                            </li>
                            <li className="flex gap-3 text-sm md:text-lg">
                                {' '}
                                <Check /> Feedback e suporte para garantir sua
                                evolução{' '}
                            </li>
                            <li className="flex gap-3 text-sm md:text-lg">
                                {' '}
                                <Check /> Aulas extras livres para praticar com outros
                                alunos
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="w-full lg:w-1/2 flex justify-end">
                    <img
                        src="/assets/about-girls.png"
                        alt="Girls"
                        className="w-full max-w-[560px] mt-10 lg:mt-0"
                    />
                </section>
            </div>
        </div>
    );
}
