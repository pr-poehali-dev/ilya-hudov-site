interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">ILYA KHUDOV</div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('bio')} className="hover:text-primary transition-colors">
              Биография
            </button>
            <button onClick={() => scrollToSection('events')} className="hover:text-primary transition-colors">
              События
            </button>
            <button onClick={() => scrollToSection('music')} className="hover:text-primary transition-colors">
              Музыка
            </button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}