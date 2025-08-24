import { Card } from './components/Card';

export default function Intro() {
    return (
        <div
            id="intro"
            className="relative bg-night-800 px-6 md:px-12 lg:px-40"
        >
            <div className="flex flex-col lg:flex-row items-start justify-between lg:gap-24 w-full max-w-[1350px] m-auto">
                <section className="w-full lg:w-1/2 pt-24">
                    <div className="h-1 bg-crayola w-20 mb-4"></div>
                    <p className="text-3xl lg:text-4xl font-medium lg:!leading-[1.2] text-day-50">
                        O inglês é mais que uma habilidade: é a chave para alcançar o mundo.
                    </p>

                    <p className="text-night-100 mt-6">
                        Imagine falar de Deus em qualquer lugar, ter um trabalho
                        bacana no exterior, conhecer pessoas de todo canto e viajar
                        sem empecilhos...
                    </p>

                    <p className="text-night-100 mt-6 italic">
                        Aprender inglês é mais do que estudar uma língua, é se
                        preparar para viver tudo o que Deus tem reservado pra
                        você.
                    </p>

                    <p className="text-night-100 mt-6">
                        O futuro te espera — <strong>e ele fala inglês!</strong>
                    </p>

                    <img
                        alt="Europe"
                        src="/assets/tourism-illustration.png"
                        className="w-full md:w-[420px] lg:w-[600px]"
                    />
                </section>

                <section className="flex flex-col gap-8 justify-end w-full lg:w-1/2 py-24">
                    <div className="flex flex-col lg:flex-row justify-end gap-8">
                        <Card
                            src="/assets/icon-talk.svg"
                            title="Fale com confiança"
                            text="Use o inglês para evangelizar, compartilhar ideias e transformar vidas."
                        />

                        <Card
                            src="/assets/icon-business.svg"
                            title="Oportunidades sem limites"
                            text="O inglês conecta você a novas carreiras e propósitos."
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row justify-end gap-8 mb-12 lg:mb-0">
                        <Card
                            src="/assets/icon-group.svg"
                            title="Conecte-se com o mundo"
                            text="Faça amizades, compartilhe sua fé e una culturas através do inglês."
                        />

                        <Card
                            src="/assets/icon-airplane.svg"
                            title="Alcance novas nações"
                            text="Viaje sem barreiras e leve sua voz aonde Deus enviar sem precisar de tradutores."
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
