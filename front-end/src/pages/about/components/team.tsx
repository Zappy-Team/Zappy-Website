import TeamContainer from "../../../components/containers/team";
import { useTranslation } from "react-i18next";
const teamData = [
	{
		id: 1,
		name: "Giorgi",
		title: "Co-Founder | Web-Developer",
		img: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/399789115_7315556715143893_6509487026057571875_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE3L7xMrXoKuWv7hFPbC1J1JAaU5RZo5HckBpTlFmjkd2yunamYYmOT0uaPkRBeBwJjcK72LJHA9SrA4xHYZVhc&_nc_ohc=xp46YIKgjZUAX9YvIvj&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfAjmZ-zPpTSFq5qRRqVS4fCIxA5bmhWT5evAr4gIyrHDQ&oe=654FBA22",
	},
	{
		id: 2,
		name: "Nick",
		title: "Co-Founder | Web-Developer",
		img: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/277561972_1894029417455917_5664707423561181083_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFPAvsLxNXcRBpeMsMXoLuA5tVY8pxSonLm1VjynFKickhCbe974fzqP3EDaUMAMNMydZ32hfwYtmfZxDsQHjGR&_nc_ohc=qpvN5eF5ivAAX9hMlbg&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCtV6x8QRwNeknDEnlvsGSjfoULaAHHvTodC3yw-QChGw&oe=654E7C4B",
	},
];

function OurTeam() {
    const [ t ] = useTranslation();
	return (
		<section className="min-h-screen flex-col pb-40">
			{/* Title */}
			<header className="flex flex-col mt-40 gap-10 w-[90%] mx-auto">
				<h2 className="text-5xl font-bold tracking-widest text-center md:text-left">
					{t("global.about.team.header")}
				</h2>
				<aside className="md:self-end md:max-w-[500px]">
					<p className="text-xl text-right">
                        {t("global.about.team.description")}
					</p>
				</aside>
			</header>

			{/* Team */}
			<div className="grid grid-cols-2 w-[90%] mx-auto gap-5 mt-36 md:grid-cols-3 lg:grid-cols-4">
				{teamData.map((data) => (
					<TeamContainer
						key={data.id}
						img={data.img}
						name={data.name}
						title={data.title}
					/>
				))}
			</div>
		</section>
	);
}

export default OurTeam;
