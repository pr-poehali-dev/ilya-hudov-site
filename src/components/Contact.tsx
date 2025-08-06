import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Contact() {
  return (
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
  );
}