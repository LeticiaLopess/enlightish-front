'use client';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { formatPhone, cleanPhone } from '@/utils/formatter';
import Button from '@/components/Button';
import { Input } from '@/components/Input';
import { SectionHeading } from '@/components/SectionHeading';

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [phone, setPhone] = useState('');

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(formatPhone(e.target.value));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const data = new FormData(form);
        const userName = data.get('name') as string;
        const phoneValue = data.get('phone') as string;

        if (!userName || userName.trim().split(/\s+/).length < 2) {
            toast.error(
                'Por favor, insira seu nome completo (nome e sobrenome)'
            );
            return;
        }

        const cleanedPhone = cleanPhone(phoneValue);
        if (cleanedPhone.length < 10 || cleanedPhone.length > 11) {
            toast.error('Por favor, insira um número completo com DDD');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/xnnzyjal', {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            toast.success(
                `Pronto, ${
                    userName.split(' ')[0]
                }! Recebemos sua mensagem e retornaremos em breve!`
            );
            form.reset();
            setPhone('');
        } catch (error) {
            console.error('Erro no envio:', error);
            toast.error(
                'Ops! Algo não saiu como planejado... Por favor, tente novamente ou nos chame no WhatsApp através do botão abaixo.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact" className="relative bg-white px-6 md:px-12 lg:px-40">
            <div className="relative flex flex-col lg:flex-row items-start w-full max-w-[1350px] m-auto">
                <section className="w-full lg:w-2/3 pt-24 z-10 lg:pr-24">
                    <SectionHeading title="Fale conosco" />

                    <p className="text-2xl lg:text-3xl font-semibold mt-8 text-night-600 mb-4 max-w-[40rem]">
                        Seu inglês, sua ferramenta para impactar vidas e transformar o mundo.
                    </p>
                    <p className="text-night-300 mb-4 lg:mb-0 max-w-[34rem]">
                        <strong>Sua missão começa aqui. </strong>O idioma não
                        deve ser uma barreira, mas a ponte para
                        <strong className="pl-1">
                            seu futuro
                        </strong>
                        .
                    </p>
                    {/* <p className="text-night-300">
                        Nosso time especializado está pronto para criar um plano
                        personalizado para suas necessidades.
                    </p> */}

                    <img
                        alt="Ilustração de comunicação global"
                        src="/assets/city-illustration.png"
                        className="w-full md:w-[600px] lg:w-[680px] brightness-200 lg:brightness-100"
                    />
                </section>

                <section className="lg:absolute lg:right-0 xl:self-center bg-night-700 w-full lg:w-1/3 my-10 p-9 z-10 rounded-2xl">
                    <p className="text-2xl font-semibold text-crayola mb-8">
                        Cadastre-se
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >
                        <Input
                            placeholder="Nome completo"
                            mode="light"
                            name="name"
                            required
                        />
                        <Input
                            placeholder="Seu melhor e-mail"
                            mode="light"
                            type="email"
                            name="email"
                            required
                        />
                        <Input
                            placeholder="WhatsApp"
                            mode="light"
                            name="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            required
                        />

                        <span className="text-[11px] text-start text-neutral-500">
                            Ao enviar, você concorda em receber informações
                            sobre nossos serviços.
                        </span>

                        <Button
                            type="submit"
                            className="mt-[2rem] px-16"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Enviando...' : 'Quero ser fluente'}
                        </Button>
                    </form>
                </section>
            </div>
        </div>
    );
}
