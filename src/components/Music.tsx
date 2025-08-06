import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Music() {
  return (
    <section id="music" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Популярная музыка</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover-lift group">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge className="bg-primary">Топ 1</Badge>
                <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="Play" size={16} />
                </Button>
              </div>
              <div className="w-full h-32 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Music" size={32} className="text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-1">Blinding Lights</CardTitle>
              <CardDescription className="mb-2">The Weeknd</CardDescription>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>3:22</span>
                <div className="flex items-center space-x-1">
                  <Icon name="Heart" size={14} />
                  <span>2.3M</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift group">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge className="bg-secondary">Топ 2</Badge>
                <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="Play" size={16} />
                </Button>
              </div>
              <div className="w-full h-32 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Music" size={32} className="text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-1">One More Time</CardTitle>
              <CardDescription className="mb-2">Daft Punk</CardDescription>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>5:20</span>
                <div className="flex items-center space-x-1">
                  <Icon name="Heart" size={14} />
                  <span>1.8M</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift group">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge className="bg-accent">Топ 3</Badge>
                <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="Play" size={16} />
                </Button>
              </div>
              <div className="w-full h-32 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <Icon name="Music" size={32} className="text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-1">Midnight City</CardTitle>
              <CardDescription className="mb-2">M83</CardDescription>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>4:03</span>
                <div className="flex items-center space-x-1">
                  <Icon name="Heart" size={14} />
                  <span>1.5M</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift group">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline">Топ 4</Badge>
                <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="Play" size={16} />
                </Button>
              </div>
              <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Music" size={32} className="text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-1">Levels</CardTitle>
              <CardDescription className="mb-2">Avicii</CardDescription>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>3:18</span>
                <div className="flex items-center space-x-1">
                  <Icon name="Heart" size={14} />
                  <span>1.2M</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift group">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline">Топ 5</Badge>
                <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="Play" size={16} />
                </Button>
              </div>
              <div className="w-full h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Icon name="Music" size={32} className="text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-1">Strobe</CardTitle>
              <CardDescription className="mb-2">Deadmau5</CardDescription>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>10:36</span>
                <div className="flex items-center space-x-1">
                  <Icon name="Heart" size={14} />
                  <span>900K</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift group">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline">Топ 6</Badge>
                <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="Play" size={16} />
                </Button>
              </div>
              <div className="w-full h-32 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Icon name="Music" size={32} className="text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-1">Animals</CardTitle>
              <CardDescription className="mb-2">Martin Garrix</CardDescription>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>5:27</span>
                <div className="flex items-center space-x-1">
                  <Icon name="Heart" size={14} />
                  <span>850K</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8">
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Icon name="Music" size={20} className="mr-2" />
            Слушать полный плейлист
          </Button>
        </div>
      </div>
    </section>
  );
}