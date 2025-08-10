'use client';

import { Footer } from '@/components/Footer';
import '../../global/globals.css';
import { About } from './landing-page/about/page';
import { Contact } from './landing-page/contact/page';
import { Feedback } from './landing-page/feedback/page';
import { Intro } from './landing-page/intro/page';
import { Services } from './landing-page/services/page';
import { Start } from './landing-page/start/page';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'unset';

        setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'smooth';
        }, 0);
    }, []);

    return (
        <>
            <Start />
            <Intro />
            <About />
            <Services />
            <Feedback />
            <Contact />
            <Footer />
        </>
    );
}
