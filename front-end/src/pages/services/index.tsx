import ServicesHero from "./components/hero";
import ServicesAll from "./components/services";
import ServiceSkills from "./components/skills";
import ServiceWay from "./components/way";

function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesAll />
      <ServiceWay />
      <ServiceSkills />
    </>
  );
}

export default ServicesPage;
