'use client'
import { TopbarDesktop } from './subcomponents/TopbarDesktop';
import { TopbarMobile } from './subcomponents/TopbarMobile';

export function Topbar() {
    return (
        <>
            <header className="mx-6 md:mx-12 lg:mx-28">
                <div className='lg:hidden'>
                    <TopbarMobile />
                </div>
                <div className='hidden lg:block'>
                    <TopbarDesktop />
                </div>
            </header>
        </>
    )
}