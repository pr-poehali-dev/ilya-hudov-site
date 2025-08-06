import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Biography from '@/components/Biography';
import Events from '@/components/Events';
import Music from '@/components/Music';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';

export default function Index() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Biography />
      <Events />
      <Music />
      <Reviews />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Илья Худов. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}