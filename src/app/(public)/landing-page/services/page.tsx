import { SectionHeading } from '@/components/SectionHeading';
import { Card } from './components/Card';
import { Check } from '@/components/Check';

export function Services() {
    return (
        <section
            id="services"
            className="bg-crayola-50/40 px-6 md:px-12 lg:px-40 py-24"
        >
            <div className="flex flex-col items-start w-full max-w-[1350px] m-auto">
                <SectionHeading title="Nossos serviços" />

                <div className="w-full max-w-[31rem]">
                    <p className="text-2xl lg:text-3xl font-semibold mt-8 text-night-600">
                        É por isso que a Enlightish nasceu: para que o idioma
                        jamais seja um obstáculo entre a sua voz e as pessoas.
                    </p>

                    <p className="text-md lg:text-lg mt-6 text-neutral-600 !leading-6">
                        Chega de cursos genéricos. Cada objetivo tem um plano,
                        Encontre o seu aqui.
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <div className="w-full flex flex-col gap-8 lg:flex-row justify-between mt-16">
                        <Card
                            buttonLink={() =>
                                window.open(
                                    'https://wa.me/5521982794750',
                                    '_blank'
                                )
                            }
                            src="/assets/star.svg"
                            title="Inglês para Missões/Cristãos"
                            text="Sua voz é a ferramenta mais poderosa do seu chamado. Este curso foi criado para cristãos que precisam de mais que um idioma: precisam da fluência para levar a Palavra para o mundo."
                            list={
                                <ul className="flex flex-col gap-2">
                                    <li className="flex gap-3 text-sm items-center">
                                        <Check /> Vocabulário missionário e
                                        bíblico
                                    </li>
                                    <li className="flex gap-3 text-sm items-center">
                                        <Check /> Prática com alunos de mesmo
                                        propósito
                                    </li>
                                    <li className="flex gap-3 text-sm items-center">
                                        <Check /> Material feito para a
                                        realidade do campo
                                    </li>
                                </ul>
                            }
                        />

                        <Card
                            buttonLink={() =>
                                window.open(
                                    'https://wa.me/5521982794750',
                                    '_blank'
                                )
                            }
                            src="/assets/checkered.svg"
                            title="Inglês Padrão - Aulas em Grupo"
                            text="As aulas em grupo são a forma mais dinâmica e acessível de evoluir, e ainda você vai contar com o apoio de quem está no mesmo objetivo que você."
                            list={
                                <ul className="flex flex-col gap-2">
                                    <li className="flex gap-3 text-sm items-center">
                                        <Check /> Ganha confiança praticando de
                                        verdade
                                    </li>
                                    <li className="flex gap-3 text-sm items-center">
                                        <Check /> Material feito pro seu nível{' '}
                                    </li>
                                    <li className="flex gap-3 text-sm items-center">
                                        <Check /> Você aprende com a experiência
                                        dos outros
                                    </li>
                                </ul>
                            }
                        />

                        <Card
                            buttonLink={() =>
                                window.open(
                                    'https://wa.me/5521982794750',
                                    '_blank'
                                )
                            }
                            src="/assets/circle.svg"
                            title="Inglês Padrão - Aulas Individuais"
                            text="Nem todo mundo consegue seguir o ritmo de um grupo, e está tudo bem. Se você tem uma rotina puxada ou metas bem específicas, as aulas individuais são uma boa alternativa."
                            list={
                                <ul className="flex flex-col gap-2">
                                    <li className="flex gap-3 text-sm items-center">
                                        <Check /> Mais autonomia de horário
                                    </li>
                                    <li className="flex gap-3 text-sm items-center">
                                        <Check /> Foco no que importa pra você{' '}
                                    </li>
                                    <li className="flex gap-3 text-sm items-center">
                                        <Check /> Um ritmo diferente de
                                        aprendizado
                                    </li>
                                </ul>
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
