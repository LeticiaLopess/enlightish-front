import Button from '@/components/Button';
import { Input } from '@/components/Input';
import { SectionHeading } from '@/components/SectionHeading';

export function Contact() {
    return (
        <div id="contact" className="relative bg-white px-6 md:px-12 lg:px-40">
            <div className="relative flex flex-col lg:flex-row items-start w-full max-w-[1350px] m-auto">
                <section className="w-full lg:w-2/3 pt-24 z-10 lg:pr-24">
                    <SectionHeading title="Fale conosco" />

                    <p className="text-2xl lg:text-3xl font-semibold mt-8 text-night-600 mb-4">
                        Preparado(a) para conquistar a fluência em inglês que
                        você sempre sonhou?
                    </p>
                    <p className="text-night-300 mb-4 lg:mb-0">
                        <strong>Você pode ir além. </strong>A fluência é a ponte
                        entre onde você <strong>está</strong> e onde
                        <strong className="pl-1">deseja</strong> estar.
                    </p>
                    <p className="text-night-300">
                        Fale conosco! Nossa equipe está pronta para esclarecer
                        todas as suas dúvidas!
                    </p>

                    <img
                        alt="Europe"
                        src="/assets/city-illustration.png"
                        className="w-full md:w-[600px] lg:w-[680px] brightness-200 lg:brightness-100"
                    />
                </section>
                <section className="lg:absolute lg:right-0 lg:self-center bg-night-700 w-full lg:w-1/3 my-10 py-12 px-6 md:px-12 z-10 rounded-2xl">
                    <p className="text-2xl font-semibold text-crayola mb-8">
                        Preencha abaixo
                    </p>

                    <div className="flex flex-col gap-7">
                        <Input placeholder="Nome e Sobrenome" mode="light" />

                        <Input placeholder="E-mail" mode="light" />

                        <Input placeholder="DDD + Celular" mode="light" />

                        <span className="text-xs text-start text-neutral-500">
                            Ao clicar no botão abaixo, autorizo o contato por
                            WhatsApp e telefone.
                        </span>
                    </div>

                    <Button className="mt-[3rem] px-16">Enviar</Button>
                </section>
            </div>
        </div>
    );
}
