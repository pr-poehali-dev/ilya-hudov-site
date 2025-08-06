import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Reviews() {
  return (
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
  );
}