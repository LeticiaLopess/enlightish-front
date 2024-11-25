import '../../global/globals.css';
import { About } from './landing-page/about/page';
import { Start } from './landing-page/start/page';

export default function Home() {
  return (
    <>
      <Start />
      <About />
    </>
  );
}
