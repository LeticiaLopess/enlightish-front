'use client'
import { TopbarDesktop } from './subcomponents/TopbarDesktop';
import { TopbarMobile } from './subcomponents/TopbarMobile';

export function Topbar() {
    return (
        <>
            <header className="bg-white px-6 md:px-12 lg:px-40 fixed lg:relative w-full">
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