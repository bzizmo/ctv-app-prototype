import content from "../data/content.json";
import MainLayout from "../layout/MainLayout";
import HeroBanner from "../components/HeroBanner";
import ContentRail from "../components/ContentRail";

export default function Home() {
  return (
    <MainLayout>
      <HeroBanner />
      {content.rails.map((rail, i) => (
        <ContentRail
          key={i}
          title={rail.title}
          items={rail.items}
          railIndex={i}
        />
      ))}
    </MainLayout>
  );
}
