import { Hero } from '@/components/Hero';
import { Featured } from '@/components/Featured';
import { MenuSection } from '@/components/MenuSection';
import { About } from '@/components/About';
import { Gallery } from '@/components/Gallery';
import { VisitUs } from '@/components/VisitUs';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Featured />
      <MenuSection />
      <About />
      <Gallery />
      <VisitUs />
    </>
  );
}
