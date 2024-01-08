import TeamContainer from "../../../components/containers/team";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { getWorkersData } from "../../../API/workers/get";

function OurTeam() {
  const [t] = useTranslation();

  const query = useQuery({ queryKey: ["teams"], queryFn: getWorkersData });
  // queryClient.invalidateQueries({ queryKey: ["branch"] });

  return (
    <section className="min-h-screen flex-col pb-40">
      {/* Title */}
      <header className="flex flex-col mt-40 gap-10 w-[90%] mx-auto">
        <h2 className="text-5xl font-bold tracking-widest text-center md:text-left">
          {t("global.about.about_us.header")}
        </h2>
        <aside className="md:self-end md:max-w-[500px]">
          <p className="text-xl text-right">
            {t("global.about.team.description")}
          </p>
        </aside>
      </header>

      {/* Team */}
      <div className="grid grid-cols-1 w-[90%] mx-auto gap-10 mt-36 md:grid-cols-3 lg:grid-cols-4">
        {query.isSuccess &&
          query.data.status === "success" &&
          query.data.data.map((team) => (
            <TeamContainer
              key={team._id}
              img={team.worker_id.avatar?.url}
              name={team.name}
              title={team.title}
              about={team.description}
            />
          ))}
      </div>
    </section>
  );
}

export default OurTeam;
