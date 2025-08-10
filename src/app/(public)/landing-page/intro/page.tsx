import { Card } from './components/Card';

export function Intro() {
    return (
        <div
            id="intro"
            className="relative bg-night-800 px-6 md:px-12 lg:px-40"
        >
            <div className="flex flex-col lg:flex-row items-start justify-between lg:gap-24 w-full max-w-[1350px] m-auto">
                <section className="w-full lg:w-1/2 pt-24">
                    <div className="h-1 bg-crayola w-20 mb-4"></div>
                    <p className="text-3xl lg:text-4xl font-medium lg:!leading-[1.2] text-day-50">
                        O inglês é mais que uma habilidade, é a chave para novas
                        oportunidades.
                    </p>

                    <p className="text-night-100 mt-6">
                        Imagine falar de Deus em qualquer lugar, ter um trabalho
                        bacana no exterior, fazer amigos de todo canto e viajar
                        sem barreiras...
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
                            title="Fale sem usar tradutor"
                            text="Tenha boa compreensão e fale de forma natural, sem travar."
                        />

                        <Card
                            src="/assets/icon-business.svg"
                            title="Melhores oportunidades"
                            text="Com o inglês no currículo, você estará sempre à frente no mercado!"
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row justify-end gap-8 mb-12 lg:mb-0">
                        <Card
                            src="/assets/icon-group.svg"
                            title="Faça amigos pelo mundo"
                            text="Conecte-se com pessoas de diferentes culturas no mundo todo."
                        />

                        <Card
                            src="/assets/icon-airplane.svg"
                            title="Viaje com liberdade"
                            text="Conheça novos lugares com a liberdade de se comunicar sem precisar de tradutores."
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
