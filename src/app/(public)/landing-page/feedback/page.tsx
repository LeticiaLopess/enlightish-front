import { SectionHeading } from '@/components/SectionHeading';
import { Card } from './components/Card';

export function Feedback() {
    return (
        <div
            id="feedback"
            className="bg-neutral-900 px-6 md:px-12 lg:px-40 py-24 flex flex-col items-start"
        >
            <SectionHeading title="Feedback de alunos" />
            <div className="w-full flex flex-col lg:flex-row justify-between mt-8">
                <p className="text-[28px] lg:text-[34px] font-semibold leading-[1.2] text-day-50 max-w-[40rem] mb-2">
                    Confira o que nossos alunos dizem sobre a escola e como o
                    inglês tem impactado a vida deles!
                </p>
                <p className="text-night-100 max-w-[30rem]">
                    Histórias reais, transformações incríveis: Veja como a
                    fluência em inglês deu aos nossos alunos a liberdade para
                    alcançar suas metas e realizar seus sonhos.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 mt-12 lg:overflow-y-hidden lg:overflow-x-scroll w-full custom-scroll pb-8">
                <Card
                    src="/assets/student-marcelo.png"
                    text="A Enlightish me mostrou que o idioma não seria uma barreira pra alcançar outros países. Sem falar que, aqui eu aprendi que não tem obstáculo pra eu falar inglês. Estou aprendendo a superar cada desafio e a confiar no meu potencial. Hoje, o inglês não é mais um desafio, mas sim uma extensão para algo que eu nunca imaginaria aprender."
                    name="Marcelo Ferreira"
                    career="Missionário e Estudante"
                />

                <Card
                    src="/assets/student-aline.png"
                    text="Estou aprendendo inglês na Enlightish e estou amando! Como veterinária, sabia que precisava, mas tinha inseguranças. As aulas são práticas e agora me sinto confiante para conversar com clientes em inglês e ter novas oportunidades na minha carreira!"
                    name="Aline Vasquez"
                    career="Médica Veterinária"
                />

                <Card
                    src="/assets/student-marcelo.png"
                    text="Estou aprendendo o inglês para missões e sou muito grato por isso. As aulas são legais e o ambiente e as professoras são muito inspiradoras. Fico animado para cada aula e me preparo para viver experiências incríveis em diferentes culturas."
                    name="Marcelo Ferreira"
                    career="Missionário e Estudante"
                />

                <Card
                    src="/assets/student-aline.png"
                    text="Estou aprendendo inglês na Enlightish e estou amando! Como veterinária, sabia que precisava, mas tinha inseguranças. As aulas são práticas e agora me sinto confiante para conversar com clientes em inglês e ter novas oportunidades na minha carreira!"
                    name="Aline Vasquez"
                    career="Médica Veterinária"
                />
            </div>
        </div>
    );
}
