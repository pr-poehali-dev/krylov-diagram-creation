import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

interface Fable {
  id: number;
  title: string;
  year: number;
  category: string;
  characters: string[];
  moral: string;
  popularity: number;
}

const fables: Fable[] = [
  {
    id: 1,
    title: "Ворона и Лисица",
    year: 1807,
    category: "О лести и глупости",
    characters: ["Ворона", "Лисица"],
    moral: "Уж сколько раз твердили миру, что лесть гнусна, вредна",
    popularity: 100,
  },
  {
    id: 2,
    title: "Стрекоза и Муравей",
    year: 1808,
    category: "О труде и лени",
    characters: ["Стрекоза", "Муравей"],
    moral: "Ты всё пела? Это дело: так поди же, попляши!",
    popularity: 98,
  },
  {
    id: 3,
    title: "Квартет",
    year: 1811,
    category: "О бездарности",
    characters: ["Мартышка", "Осёл", "Козёл", "Медведь"],
    moral: "А вы, друзья, как ни садитесь, всё в музыканты не годитесь",
    popularity: 95,
  },
  {
    id: 4,
    title: "Лебедь, Щука и Рак",
    year: 1814,
    category: "О разладе",
    characters: ["Лебедь", "Щука", "Рак"],
    moral: "Когда в товарищах согласья нет, на лад их дело не пойдёт",
    popularity: 93,
  },
  {
    id: 5,
    title: "Мартышка и Очки",
    year: 1815,
    category: "О невежестве",
    characters: ["Мартышка"],
    moral: "К несчастью, то ж бывает у людей: как ни полезна вещь, — цены не зная ей",
    popularity: 90,
  },
  {
    id: 6,
    title: "Слон и Моська",
    year: 1808,
    category: "О самомнении",
    characters: ["Слон", "Моська"],
    moral: "Ай, Моська! знать она сильна, что лает на Слона!",
    popularity: 88,
  },
  {
    id: 7,
    title: "Волк и Ягнёнок",
    year: 1808,
    category: "О несправедливости",
    characters: ["Волк", "Ягнёнок"],
    moral: "У сильного всегда бессильный виноват",
    popularity: 85,
  },
  {
    id: 8,
    title: "Демьянова уха",
    year: 1813,
    category: "О навязчивости",
    characters: ["Демьян", "Фока"],
    moral: "Писатель, счастлив ты, коль дар прямой имеешь",
    popularity: 82,
  },
];

const categories = [
  "Все басни",
  "О лести и глупости",
  "О труде и лени",
  "О бездарности",
  "О разладе",
  "О невежестве",
  "О самомнении",
  "О несправедливости",
  "О навязчивости",
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все басни");
  const [selectedFable, setSelectedFable] = useState<Fable | null>(null);

  const filteredFables =
    selectedCategory === "Все басни"
      ? fables
      : fables.filter((f) => f.category === selectedCategory);

  const totalFables = 236;
  const yearsActive = 1809 - 1844;
  const avgPerYear = Math.round(totalFables / 35);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            И. А. Крылов
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Басни русского баснописца
          </p>
          <p className="text-sm text-muted-foreground">1769 — 1844</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="hover-scale">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <Icon name="BookOpen" className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-3xl font-bold">{totalFables}</p>
                  <p className="text-sm text-muted-foreground">Всего басен</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <Icon name="Calendar" className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-3xl font-bold">35</p>
                  <p className="text-sm text-muted-foreground">Лет творчества</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <Icon name="TrendingUp" className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-3xl font-bold">~{avgPerYear}</p>
                  <p className="text-sm text-muted-foreground">Басен в год</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="w-full mb-8 h-auto flex-wrap justify-start gap-2">
            <TabsTrigger value="gallery" className="gap-2">
              <Icon name="Grid3x3" size={16} />
              Галерея басен
            </TabsTrigger>
            <TabsTrigger value="timeline" className="gap-2">
              <Icon name="Clock" size={16} />
              Временная шкала
            </TabsTrigger>
            <TabsTrigger value="categories" className="gap-2">
              <Icon name="List" size={16} />
              По категориям
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gallery" className="space-y-8">
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <Badge
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 hover-scale"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFables.map((fable, index) => (
                <Card
                  key={fable.id}
                  className="hover-scale cursor-pointer transition-all hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setSelectedFable(fable)}
                >
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-lg leading-tight">
                        {fable.title}
                      </h3>
                      <Badge variant="secondary" className="ml-2 shrink-0">
                        {fable.year}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {fable.category}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {fable.characters.map((char) => (
                        <Badge key={char} variant="outline" className="text-xs">
                          {char}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex-1 bg-secondary rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-accent h-full transition-all"
                          style={{ width: `${fable.popularity}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground shrink-0">
                        {fable.popularity}%
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              {fables
                .sort((a, b) => a.year - b.year)
                .map((fable, index) => (
                  <div
                    key={fable.id}
                    className="relative pl-20 pb-8 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-accent border-4 border-background" />
                    <Card className="hover-scale">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">
                            {fable.title}
                          </h3>
                          <Badge>{fable.year}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground italic mb-2">
                          "{fable.moral}"
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {fable.characters.map((char) => (
                            <Badge key={char} variant="outline" className="text-xs">
                              {char}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            {categories.slice(1).map((category, index) => {
              const categoryFables = fables.filter((f) => f.category === category);
              return (
                <Card
                  key={category}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{category}</h3>
                      <Badge variant="secondary">
                        {categoryFables.length}{" "}
                        {categoryFables.length === 1 ? "басня" : "басни"}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      {categoryFables.map((fable) => (
                        <div
                          key={fable.id}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                          onClick={() => setSelectedFable(fable)}
                        >
                          <span className="font-medium">{fable.title}</span>
                          <span className="text-sm text-muted-foreground">
                            {fable.year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>
        </Tabs>

        {selectedFable && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in"
            onClick={() => setSelectedFable(null)}
          >
            <Card
              className="max-w-2xl w-full animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">
                      {selectedFable.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {selectedFable.category}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedFable(null)}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  >
                    <Icon name="X" size={20} />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-2">Год написания</p>
                    <Badge>{selectedFable.year}</Badge>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">Персонажи</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedFable.characters.map((char) => (
                        <Badge key={char} variant="outline">
                          {char}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">Мораль</p>
                    <p className="text-muted-foreground italic">
                      "{selectedFable.moral}"
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">Популярность</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-secondary rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-accent h-full transition-all"
                          style={{ width: `${selectedFable.popularity}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">
                        {selectedFable.popularity}%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
