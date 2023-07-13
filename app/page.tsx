import './globals.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Introsec from './components/main/Introsec';
import Showstyle from './components/main/Showstyle';
import Showspace from './components/main/Showspace';
import Doubleimage from './components/main/Doubleimage';
import Threesubsection from './components/main/Threesubsection';
import Testimonial from './components/main/Testimonial';

export default function Home() {
  return (
    <main className="">
      <div>
        <Hero />
      </div>
      <Introsec />
      <Showstyle />
      <Showspace />
      <Doubleimage />
      <Threesubsection />
      <Testimonial />
    </main>
  );
}
