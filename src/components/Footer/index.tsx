import { Icon } from "../IconAwesome";

export function Footer() {
    return (
        <div className="bg-neutral-900 px-6 py-16 md:px-12 lg:px-40 lg:py-20 lg:gap-16 flex flex-col items-center justify-between">
            <div className="hidden lg:block h-[1px] bg-white/30 w-full"></div>
            
            <div className="flex flex-col gap-10 lg:flex-row items-center justify-between w-full lg:px-20">
                <section>
                    <img src="/assets/logo.svg" className="h-40" alt="Logo Enlightish" />
                </section>

                <section className="flex flex-col gap-12">
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center">
                            <Icon name="location-dot" color="white" size={'20px'} /> 
                            <span className="text-day">Rio de Janeiro - RJ, Brazil</span>
                        </div>

                        <div className="flex gap-3 items-center">
                            <Icon name="envelope" color="white" size={'19px'} className="ml-[2px]"/> 
                            <span className="text-day">enlightish@gmail.com</span>
                        </div>
                    </div>

                    <div className="flex gap-8">
                        <p className="text-neutral-500">Social Media</p>

                        <a href="https://www.instagram.com/enlightish" target="_blank" rel="noopener noreferrer">
                            <Icon name="instagram" color="white" size={'24px'} style="brands" />
                        </a>

                        <a href="https://www.linkedin.com/company/enlightish/" target="_blank" rel="noopener noreferrer">
                            <Icon name="linkedin-in" color="white" size={'24px'} style="brands" />
                        </a>

                        <a href="https://www.youtube.com/@enlightish" target="_blank" rel="noopener noreferrer">
                            <Icon name="youtube" color="white" size={'24px'} style="brands" />
                        </a>

                        <a href="https://www.facebook.com/enlightish" target="_blank" rel="noopener noreferrer">
                            <Icon name="facebook" color="white" size={'22px'} style="brands" />
                        </a>
                    </div>
                </section>
            </div>


            <div className="hidden lg:block h-[1px] bg-white/30 w-full"></div>
        </div>
    )
}