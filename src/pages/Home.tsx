import Card from "../components/Card";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  const cardData = [
    {
      id: 1,
      title: "Total Projects",
      value: 15,
      image: "/images/total.png",
    },
    {
      id: 2,
      title: "Ongoing Projects",
      value: 5,
      image: "/images/ongoing.png",
    },
    {
      id: 3,
      title: "Upcoming Projects",
      value: 4,
      image: "/images/upcoming.png",
    },
    {
      id: 4,
      title: "Completed Projects",
      value: 6,
      image: "/images/completed.png",
    },
    {
      id: 5,
      title: "Overall Outreach",
      value: 5,
      image: "/images/outreach.png",
    },
    {
      id: 6,
      title: "Aggregate Inquiries",
      value: 5,
      image: "/images/enquiry.png",
    },
  ];

  return (
    <section>
      <h2 className="mb-8 text-[#2c323f] text-[22px] font-semibold">
        Welcome Admin!!
      </h2>
      {/* <section className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </section> */}
      <div className="grid md:grid-cols-3 gap-12 overflow-hidden rounded-xl">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Home;
