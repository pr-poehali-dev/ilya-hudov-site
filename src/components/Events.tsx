import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Events() {
  return (
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
  );
}