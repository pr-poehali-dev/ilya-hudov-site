import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import MusicPlayer from '@/components/MusicPlayer';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  likes: string;
  audioUrl: string;
}

export default function Music() {
  const [playerVisible, setPlayerVisible] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  const tracks: Track[] = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      duration: "3:22",
      likes: "2.3M",
      audioUrl: "https://www.soundjay.com/misc/sounds/beep-05a.mp3"
    },
    {
      id: 2,
      title: "One More Time",
      artist: "Daft Punk",
      duration: "5:20",
      likes: "1.8M",
      audioUrl: "https://www.soundjay.com/misc/sounds/beep-10.mp3"
    },
    {
      id: 3,
      title: "Midnight City",
      artist: "M83",
      duration: "4:03",
      likes: "1.5M",
      audioUrl: "https://www.soundjay.com/misc/sounds/beep-12.mp3"
    },
    {
      id: 4,
      title: "Levels",
      artist: "Avicii",
      duration: "3:18",
      likes: "1.2M",
      audioUrl: "https://www.soundjay.com/misc/sounds/beep-15.mp3"
    },
    {
      id: 5,
      title: "Strobe",
      artist: "Deadmau5",
      duration: "10:36",
      likes: "900K",
      audioUrl: "https://www.soundjay.com/misc/sounds/beep-18.mp3"
    },
    {
      id: 6,
      title: "Animals",
      artist: "Martin Garrix",
      duration: "5:27",
      likes: "850K",
      audioUrl: "https://www.soundjay.com/misc/sounds/beep-20.mp3"
    }
  ];

  const playTrack = (track: Track) => {
    setSelectedTrack(track);
    setPlayerVisible(true);
  };

  return (
    <>
      <section id="music" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Популярная музыка</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, index) => {
              const gradients = [
                'from-primary to-secondary',
                'from-secondary to-accent',
                'from-accent to-primary',
                'from-blue-500 to-purple-600',
                'from-green-500 to-teal-600',
                'from-red-500 to-pink-600'
              ];
              
              const badgeColors = [
                'bg-primary',
                'bg-secondary',
                'bg-accent',
                'variant-outline',
                'variant-outline',
                'variant-outline'
              ];

              return (
                <Card key={track.id} className="hover-lift group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge className={index < 3 ? badgeColors[index] : ''} variant={index >= 3 ? 'outline' : undefined}>
                        Топ {index + 1}
                      </Badge>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => playTrack(track)}
                      >
                        <Icon name="Play" size={16} />
                      </Button>
                    </div>
                    <div className={`w-full h-32 bg-gradient-to-br ${gradients[index]} rounded-lg flex items-center justify-center`}>
                      <Icon name="Music" size={32} className="text-white" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg mb-1">{track.title}</CardTitle>
                    <CardDescription className="mb-2">{track.artist}</CardDescription>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{track.duration}</span>
                      <div className="flex items-center space-x-1">
                        <Icon name="Heart" size={14} />
                        <span>{track.likes}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              onClick={() => playTrack(tracks[0])}
            >
              <Icon name="Music" size={20} className="mr-2" />
              Слушать полный плейлист
            </Button>
          </div>
        </div>
      </section>
      
      {playerVisible && selectedTrack && (
        <MusicPlayer tracks={tracks} initialTrack={selectedTrack} />
      )}
    </>
  );
}