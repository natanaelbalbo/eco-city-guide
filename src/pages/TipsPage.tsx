
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const tipsCategories = [
  {
    title: "Na Sua Casa",
    icon: "🏠",
    tips: [
      {
        title: "Organize a separação dos resíduos",
        description: "Tenha lixeiras específicas para cada tipo de material: papel, plástico, vidro e metal. Use cores diferentes ou etiquetas para facilitar a identificação.",
      },
      {
        title: "Reduza o volume dos materiais",
        description: "Amasse latinhas e garrafas PET, desmonte caixas de papelão e lave embalagens para economizar espaço e facilitar o transporte.",
      },
      {
        title: "Reutilize antes de reciclar",
        description: "Antes de descartar, pense se o item pode ter um novo uso. Potes de vidro podem virar organizadores, garrafas PET podem ser transformadas em vasos.",
      },
      {
        title: "Crie uma composteira doméstica",
        description: "Resíduos orgânicos como cascas de frutas e legumes podem ser compostados e transformados em adubo para suas plantas.",
      },
    ],
  },
  {
    title: "No Seu Bairro",
    icon: "🏙️",
    tips: [
      {
        title: "Conheça os ecopontos próximos",
        description: "Mapeie os pontos de coleta seletiva em seu bairro e descubra quais materiais são aceitos em cada local.",
      },
      {
        title: "Participe de mutirões de limpeza",
        description: "Engaje-se em ações comunitárias de limpeza e conscientização sobre a correta separação dos resíduos.",
      },
      {
        title: "Incentive seus vizinhos",
        description: "Compartilhe informações sobre reciclagem e organize iniciativas coletivas para a destinação correta de materiais.",
      },
      {
        title: "Apoie cooperativas locais",
        description: "Conheça e apoie cooperativas de catadores de materiais recicláveis em sua região, doando seus materiais separados.",
      },
    ],
  },
  {
    title: "No Dia a Dia",
    icon: "📅",
    tips: [
      {
        title: "Leve sua própria sacola",
        description: "Evite sacolas plásticas levando sua própria sacola reutilizável para compras.",
      },
      {
        title: "Use garrafas reutilizáveis",
        description: "Substitua garrafas de água descartáveis por uma garrafa reutilizável que pode durar anos.",
      },
      {
        title: "Diga não aos descartáveis",
        description: "Evite usar copos, talheres e canudos descartáveis. Opte por alternativas duráveis ou biodegradáveis.",
      },
      {
        title: "Compre a granel",
        description: "Sempre que possível, compre produtos a granel usando seus próprios recipientes para reduzir embalagens.",
      },
    ],
  },
  {
    title: "No Trabalho",
    icon: "💼",
    tips: [
      {
        title: "Promova a coleta seletiva",
        description: "Sugira a implementação de lixeiras separadas para diferentes materiais no ambiente de trabalho.",
      },
      {
        title: "Reduza o uso de papel",
        description: "Imprima apenas o necessário, use os dois lados do papel e opte por documentos digitais sempre que possível.",
      },
      {
        title: "Reutilize materiais de escritório",
        description: "Clipes, pastas, elásticos e outros materiais podem ser reutilizados várias vezes.",
      },
      {
        title: "Organize campanhas de conscientização",
        description: "Promova palestras e workshops sobre reciclagem e sustentabilidade para os colegas de trabalho.",
      },
    ],
  },
];

const TipsPage = () => {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Dicas de Reciclagem</h1>

        <div className="mb-10">
          <p className="text-lg text-foreground/80">
            Pequenas mudanças em nossa rotina podem fazer uma grande diferença para o meio ambiente e para nossas cidades. 
            Confira nossas dicas práticas para reduzir resíduos e melhorar suas práticas de reciclagem.
          </p>
        </div>

        <div className="space-y-10">
          {tipsCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {category.tips.map((tip, tipIndex) => (
                  <Card key={tipIndex} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">{tip.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {index < tipsCategories.length - 1 && (
                <Separator className="my-8" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-eco-green-light rounded-lg border border-eco-green/30">
          <h2 className="text-xl font-bold text-eco-green-dark mb-4">Lembre-se:</h2>
          <p className="text-lg">
            A melhor forma de reduzir o impacto dos resíduos é seguir a regra dos 5 Rs:
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <span className="font-bold text-eco-green-dark">Repensar</span>
              <span>- nossos hábitos de consumo e descarte</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-eco-green-dark">Recusar</span>
              <span>- o que não precisamos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-eco-green-dark">Reduzir</span>
              <span>- o consumo de recursos e a geração de resíduos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-eco-green-dark">Reutilizar</span>
              <span>- materiais ao invés de descartá-los</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-eco-green-dark">Reciclar</span>
              <span>- o que não pode ser reutilizado</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default TipsPage;
