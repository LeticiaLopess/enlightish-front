import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
    return (
        <div id="contact" className="relative flex flex-col lg:flex-row items-start">
            <section className="w-full lg:w-2/3 px-6 md:px-12 lg:px-40 pt-24 pb-24 lg:pb-48">   
                <SectionHeading title="Fale conosco" />

                <p className="text-2xl lg:text-3xl font-semibold mt-8 text-night-600 mb-4">
                    Preparado(a) para conquistar a fluência em inglês que você sempre sonhou?
                </p>
                <p className="text-night-300 mb-4 lg:mb-0">
                    <strong>Você pode ir além. </strong>
                    A fluência é a ponte entre onde você <strong>está</strong> e onde <strong>deseja</strong> estar.
                </p>
                <p className="text-night-300">
                    Fale conosco! Nossa equipe está pronta para esclarecer todas as suas dúvidas!
                </p>

                <img 
                    alt="Europe"
                    src="/assets/city-illustration.png"
                    className="w-[350px] md:w-[420px] lg:w-[680px] absolute bottom-0 left-1/2 -translate-x-1/2 md:left-12 lg:left-28 lg:translate-x-0 brightness-200 lg:brightness-100"                
                />
            </section>
            <section className="bg-night-700 h-full w-full lg:w-1/3 px-6 md:px-12 lg:px-20 pt-24 pb-48 lg:pb-24">
                <p className="text-2xl font-semibold text-crayola mb-8">Preencha abaixo</p>

                <div className="flex flex-col gap-7">
                    <Input placeholder="Nome e Sobrenome" mode="light" />

                    <Input placeholder="E-mail" mode="light" />

                    <Input placeholder="DDD + Celular" mode="light" />

                    <span className="text-xs text-start text-neutral-500">Ao clicar no botão abaixo, autorizo o contato por WhatsApp e telefone. Também concordo em receber ofertas e dicas por e-mail e SMS.</span>
                </div>

                <Button className="mt-10 px-16">Enviar</Button>
            </section>

        </div>
    );
}