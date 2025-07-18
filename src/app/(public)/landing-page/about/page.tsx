import { SectionHeading } from "@/components/SectionHeading";
import { Check } from "@/components/Check";

export function About() {

    return (
        <div id="about" className="px-6 md:px-12 lg:px-40 py-24 flex flex-col lg:gap-20 lg:flex-row items-start justify-between">
            <section className="flex flex-col w-full lg:w-1/2">
                <SectionHeading title="Sobre a escola" />

                <div>     
                    <p className="text-2xl lg:text-3xl font-semibold mt-8 text-night-600">
                        A <span className="underline">única</span> escola online que une o ensino de inglês à missão cristã para transformar sua vida — e alcançar outras.
                    </p>
                    <p className="text-md lg:text-lg mt-6 text-neutral-600 !leading-6">
                        Prepare-se para missões cristãs com foco exclusivo no contexto missionário, ou alcance a fluência com nossa metodologia tradicional de excelência.
                    </p>
                </div>

                <div className="mt-20">
                    <p className="text-2xl lg:text-2xl font-semibold text-night-600 mb-6">O que nos torna únicos?</p>

                    <ul className="flex flex-col gap-3">
                        <li className="flex gap-3 text-sm md:text-lg"> <Check/> Único curso de inglês para cristãos no Brasil</li>
                        <li className="flex gap-3 text-sm md:text-lg"> <Check/> Material didático de acordo com seu nível e objetivo</li>
                        <li className="flex gap-3 text-sm md:text-lg"> <Check/> Study planners para consolidar seus aprendizados</li>
                        <li className="flex gap-3 text-sm md:text-lg"> <Check/> Feedback e suporte para garantir sua evolução </li>
                        <li className="flex gap-3 text-sm md:text-lg"> <Check/> Aulas extras para praticar com outros alunos</li>
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
    )

}
