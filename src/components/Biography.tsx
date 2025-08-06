import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Biography() {
  return (
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
  );
}