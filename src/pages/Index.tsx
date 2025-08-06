import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
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

      {/* Hero Section */}
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

      {/* Biography Section */}
      <section id="bio" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">О диджее</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl">Биография</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Илья Худов — один из самых ярких представителей клубной сцены города. 
                    Его имя стало синонимом качественной электронной музыки и незабываемых вечеринок.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    В клубе Hardy Илья зарекомендовал себя как мастер создания атмосферы. 
                    Его сеты всегда собирают полный танцпол и оставляют яркие впечатления у посетителей.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">House</Badge>
                    <Badge variant="secondary">Techno</Badge>
                    <Badge variant="secondary">Progressive</Badge>
                    <Badge variant="secondary">Deep House</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">5+ лет опыта</h3>
                    <p className="text-muted-foreground">Профессиональная диджейская карьера</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">500+ выступлений</h3>
                    <p className="text-muted-foreground">Успешных вечеринок и мероприятий</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Star" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Топ диджей</h3>
                    <p className="text-muted-foreground">Клуба Hardy уже 3 года подряд</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Предстоящие события</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-primary">15 августа</Badge>
                  <Icon name="Calendar" size={20} />
                </div>
                <CardTitle>Летний микс-сет</CardTitle>
                <CardDescription>Hardy Club • 23:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Специальный летний сет с лучшими треками сезона. Progressive house и deep techno.
                </p>
                <Button className="w-full" variant="outline">
                  Забронировать стол
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-secondary">22 августа</Badge>
                  <Icon name="Calendar" size={20} />
                </div>
                <CardTitle>Техно вечеринка</CardTitle>
                <CardDescription>Hardy Club • 22:30</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Мощная техно-вечеринка с гостевыми диджеями из Москвы и Санкт-Петербурга.
                </p>
                <Button className="w-full" variant="outline">
                  Забронировать стол
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-accent">30 августа</Badge>
                  <Icon name="Calendar" size={20} />
                </div>
                <CardTitle>Closing Party</CardTitle>
                <CardDescription>Hardy Club • 21:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Закрытие летнего сезона. Эксклюзивный 4-часовой сет от Ильи Худова.
                </p>
                <Button className="w-full" variant="outline">
                  Забронировать стол
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Отзывы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">А</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Анна К.</CardTitle>
                    <div className="flex">
                      {[1,2,3,4,5].map(i => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "Илья — настоящий профессионал! Его сеты всегда заряжают энергией и заставляют танцевать до утра. 
                  Обязательно приходим на его выступления в Hardy!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">М</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Михаил Р.</CardTitle>
                    <div className="flex">
                      {[1,2,3,4,5].map(i => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "Отличный диджей с прекрасным чувством толпы. Умеет создать нужную атмосферу 
                  и поддерживать энергию весь вечер. Рекомендую!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Е</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Екатерина В.</CardTitle>
                    <div className="flex">
                      {[1,2,3,4,5].map(i => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "Каждое выступление Ильи — это маленький праздник! Музыка всегда актуальная, 
                  микширование на высоте. Hardy без него уже не тот!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl">Заказать выступление</CardTitle>
                <CardDescription>
                  Свяжитесь со мной для бронирования на ваше мероприятие
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>ilya.khudov@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Instagram" size={20} className="text-primary" />
                  <span>@ilya_khudov_dj</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>Hardy Club, г. Москва</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl">Мои платформы</CardTitle>
                <CardDescription>
                  Следите за новостями и слушайте мои миксы
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Music" size={20} className="mr-3" />
                  SoundCloud
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Play" size={20} className="mr-3" />
                  Spotify
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Youtube" size={20} className="mr-3" />
                  YouTube
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="MessageCircle" size={20} className="mr-3" />
                  Telegram
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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