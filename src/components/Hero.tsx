import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="hero" className="pt-20 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">ILYA</span><br />
              <span className="gradient-text">KHUDOV</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-4">
              Гроза ночного клуба <span className="text-primary font-semibold">Hardy</span>
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Профессиональный диджей, создающий незабываемые вечеринки и заряжающий танцпол энергией.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Music" size={20} className="mr-2" />
                Послушать микс
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать выступление
              </Button>
            </div>
          </div>
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-30"></div>
              <img 
                src="/img/87b6ff43-be16-4926-b019-8fe1dff1ab07.jpg"
                alt="Илья Худов" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}