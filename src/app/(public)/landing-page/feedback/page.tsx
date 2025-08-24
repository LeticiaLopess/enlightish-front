import { SectionHeading } from '@/components/SectionHeading';
import { Card } from './components/Card';

export default function Feedback() {
    return (
        <div
            id="feedback"
            className="bg-neutral-900 px-6 md:px-12 lg:px-40 py-24"
        >
            <div className="flex flex-col items-start w-full max-w-[1350px] m-auto">
                <SectionHeading title="Feedback de alunos" />
                <div className="w-full flex flex-col lg:flex-row justify-between mt-8">
                    <p className="text-[28px] lg:text-[34px] font-semibold leading-[1.2] text-day-50 max-w-[40rem] mb-2">
                        Confira o que nossos alunos dizem sobre a escola e como
                        o inglês tem impactado a vida deles!
                    </p>
                    <p className="text-night-100 max-w-[30rem]">
                        Histórias reais, transformações incríveis: Veja como a
                        fluência em inglês deu aos nossos alunos a liberdade
                        para alcançar suas metas e realizar seus sonhos.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 mt-12 lg:overflow-y-hidden lg:overflow-x-scroll w-full custom-scroll pb-8">
                    <Card
                        src="/assets/student-marcelo.png"
                        text="A Enlightish me mostrou que o idioma não seria uma barreira pra alcançar outros países. Sem falar que, aqui eu aprendi que não tem obstáculo pra falar inglês. Estou aprendendo a superar cada desafio e a confiar no meu potencial. Hoje, o inglês não é mais um desafio, mas sim uma extensão para algo que eu nunca imaginaria aprender."
                        name="Marcelo Ferreira"
                        career="Missionário e Estudante"
                    />

                    <Card
                        src="/assets/student-gabriella.png"
                        text="Gostei muito do meu início do curso de inglês! As aulas são dinâmicas, leves e já senti que evolui. 
                              Viajei com a família do meu namorado e consegui falar com o tio dele que é nativo e saiu muito natural... me surpreendi!"
                        name="Gabriella Lopes"
                        career="Analista de Supply Chain"
                    />

                    <Card
                        src="/assets/student-matheus.jpg"
                        text="A metodologia das aulas é prática e dinâmica, permitindo exercitar bem o speaking, além de ser aberta para tirar dúvidas e corrigir erros que eu costumava cometer."
                        name="Matheus Cirino"
                        career="Desenvolvedor de Software"
                    />

                    {/* <Card
                        src="/assets/student-aline.png"
                        text="Estou aprendendo inglês na Enlightish e estou amando! Como veterinária, sabia que precisava, mas tinha inseguranças. As aulas são práticas e agora me sinto confiante para conversar com clientes em inglês e ter novas oportunidades na minha carreira!"
                        name="Aline Vasquez"
                        career="Médica Veterinária"
                    /> */}
                </div>
            </div>
        </div>
    );
}
