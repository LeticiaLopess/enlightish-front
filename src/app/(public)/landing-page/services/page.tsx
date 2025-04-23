import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "./components/Card";
import { Check } from "@/components/Check";

export function Services() {
    return (
        <div id="services" className="bg-crayola-50/40 px-6 md:px-12 lg:px-40 py-24 flex flex-col items-start">
            <SectionHeading title="Nossos serviços" />

            <div className="w-full max-w-[30rem]">
                <p className="text-2xl lg:text-3xl font-semibold mt-8 text-night-600">
                    A Enlightish quer te ver fluente, independente e livre para viver novas experiências.
                </p>

                <p className="text-md lg:text-lg mt-6 text-neutral-600 !leading-6">
                    Cada serviço abaixo foi planejado pra tornar isso mais possível — e mais leve.
                </p>
            </div>

            <div className="w-full flex justify-center">
                <div className="w-full flex flex-col gap-8 lg:flex-row justify-between mt-16">
                    <Card 
                        src="/assets/star.svg"
                        title="Inglês para Missões/Cristãos"
                        text="Você tem o chamado pra missões? A gente te ajuda a estar pronto(a). Esse curso é voltado pra cristãos que querem comunicar a Palavra em qualquer lugar do mundo."
                        list={
                            <ul className="flex flex-col gap-2">
                                <li className="flex gap-3 text-sm"> <Check/> Vocabulário missionário e bíblico</li>
                                <li className="flex gap-3 text-sm"> <Check/> Prática com alunos de mesmo propósito</li>
                                <li className="flex gap-3 text-sm"> <Check/> Material feito para a realidade do campo</li>
                            </ul>
                        }
                    />

                    <Card 
                        src="/assets/checkered.svg"
                        title="Inglês Padrão - Aulas em Grupo"
                        text="As aulas em grupo são a forma mais dinâmica e acessível de evoluir — e ainda contar com o apoio de quem está no mesmo nível que você."
                        list={
                            <ul className="flex flex-col gap-2">
                                <li className="flex gap-3 text-sm"> <Check/> Ganha confiança praticando de verdade</li>
                                <li className="flex gap-3 text-sm"> <Check/> Material feito pro seu nível </li>
                                <li className="flex gap-3 text-sm"> <Check/> Você aprende com a experiência dos outros</li>
                            </ul>
                        }
                    />

                    <Card 
                        src="/assets/circle.svg"
                        title="Inglês Padrão - Aulas Individuais"
                        text="Nem todo mundo consegue seguir o ritmo de um grupo, e tá tudo bem. Se você tem uma rotina puxada ou metas bem específicas, as aulas individuais são uma alternativa mais personalizada."
                        list={
                            <ul className="flex flex-col gap-2">
                                <li className="flex gap-3 text-sm"> <Check/> Mais autonomia de horário</li>
                                <li className="flex gap-3 text-sm"> <Check/> Foco no que importa pra você </li>
                                <li className="flex gap-3 text-sm"> <Check/> Um ritmo diferente de aprendizado</li>
                            </ul>
                        }
                    />
                </div>
            </div>

        </div>
    )
}