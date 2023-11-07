import ContainerServicesAll from "../../../components/containers/services/all";
import useServiceBgStore from "../../../store/services/serviceWay";

const services = [
  {
    id: 1,
    title: "Web Applications",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 2,
    title: "Mobile Applications",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 3,
    title: "Website Fix",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 4,
    title: "Custom Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 5,
    title: "Wordpress",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

function ServicesAll() {
  /* States */
  const { serviceBg } = useServiceBgStore((state) => state);

  return (
    <section
      className={`${
        serviceBg ? "bg-black" : "bg-white"
      } duration-500 min-h-screen flex flex-col gap-10 md:flex-row`}
    >
      <aside className="text-center md:p-5">
        <h2
          className={`${
            serviceBg ? "text-white" : "text-black"
          } duration-500 text-4xl sticky top-5`}
        >
          Products
        </h2>
      </aside>

      {/* Services */}
      <aside className=" flex flex-col gap-6 justify-center items-center p-5 md:w-full">
        {services.map((data) => (
          <ContainerServicesAll
            key={data.id}
            title={data.title}
            description={data.description}
            bg={serviceBg}
          />
        ))}
      </aside>
    </section>
  );
}

export default ServicesAll;
