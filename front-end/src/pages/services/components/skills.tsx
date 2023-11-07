import mongoImg from "../../../assets/skills/mongo.png";
import dockerImg from "../../../assets/skills/docker.svg";
import nodeImg from "../../../assets/skills/node.png";
import threeImg from "../../../assets/skills/threejs.svg";
import wordPressImg from "../../../assets/skills/wordpress.svg";
import gsapImg from "../../../assets/skills/gsap.png";
import nextImg from "../../../assets/skills/next.png";
import reactImg from "../../../assets/skills/react.png";
import reactNativeImg from "../../../assets/skills/reactNative.webp";
import SkillsContainer from "../../../components/containers/services/skills";
import useServiceBgStore from "../../../store/services/serviceWay";

const skillsData = [
  {
    id: 1,
    url: reactImg,
    name: "React Js",
  },
  {
    id: 2,
    url: reactNativeImg,
    name: "React Native",
  },
  {
    id: 3,
    url: nextImg,
    name: "Next Js",
  },
  {
    id: 4,
    url: gsapImg,
    name: "GSAP",
  },
  {
    id: 5,
    url: threeImg,
    name: "Three Js",
  },
  {
    id: 6,
    url: wordPressImg,
    name: "WordPress",
  },
  {
    id: 7,
    url: dockerImg,
    name: "Docker",
  },
  {
    id: 8,
    url: nodeImg,
    name: "Node Js",
  },
  {
    id: 9,
    url: mongoImg,
    name: "MongoDB",
  },
];

function ServiceSkills() {
  const { serviceBg } = useServiceBgStore((state) => state);

  return (
    <section className={`${serviceBg ? "bg-black" : "bg-white"} duration-500`}>
      <div className="grid mx-auto w-[90%] grid-cols-2 md:grid-cols-3 gap-3 max-w-[1300px] md:w-[80%]">
        {skillsData.map((data) => (
          <SkillsContainer key={data.id} url={data.url} name={data.name} />
        ))}
      </div>
    </section>
  );
}

export default ServiceSkills;
