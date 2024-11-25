import Button from "@/components/Button";

export function Start() {
    return (
        <div className="px-6 md:px-12 lg:px-28 pt-16 pb-24 flex flex-col lg:flex-row items-center justify-between">

            <section className="w-full">
                <img
                    src="/illustrations/welcome-text.svg"
                    alt="Welcome"
                    className="w-full lg:w-[90%]"
                />

                <p className="flex lg:hidden text-sm mt-12 text-night-200">
                    Aprender inglês transforma não apenas suas habilidades linguísticas, mas também seu futuro, conectando você a culturas e experiências no mundo todo.
                </p>

                <p className="hidden lg:flex text-sm mt-12 text-night-200">
                    Aprender inglês transforma não apenas suas habilidades linguísticas, mas também <br /> seu futuro, conectando você a culturas e experiências no mundo todo.
                </p>

                <Button className="mt-7">Matricule-se</Button>
            </section>

            <section className="flex justify-end mt-20 lg:mt-0 w-full">
                <img
                    src="/assets/welcome-people.svg"
                    alt="Welcome"
                    className="hidden lg:flex lg:w-[50%]"
                />
                <img
                    src="/assets/welcome-people-mobile.svg"
                    alt="Welcome"
                    className="w-[100%] lg:hidden"
                />
            </section>

        </div>
    )
}