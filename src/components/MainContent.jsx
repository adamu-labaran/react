import ContactCard from "./ContactCard";

export default function MainContent(props) {
  const userInfo = [
    {
      title: "basic",
      services: "Services that we offer",
      sport1: "swimming",
      sport2: "Gym",
      sport3: "boxing",
      sport4: "footer",
    },
    {
      title: "premium",
      services: "Services that we offer",
      sport1: "swimming with item7",
      sport2: "Gym with suya",
      sport3: "boxing with chilled drinks",
      sport4: "footer",
    },
    {
      title: "Advance",
      services: "Services that we offer",
      sport1: "swimming with jacket",
      sport2: "Gym with ",
      sport3: "boxing boxing gloves",
      sport4: "football with soccer shoes",
    },
  ];

  return (
    <section className="services" style={{ display: "flex" }}>
      {userInfo.map((info) => {
        return <ContactCard user={info} />;
      })}
    </section>
  );
}
