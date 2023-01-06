import Card from "./Card";
import calender from "../../assets/image/calendar.svg";
import sec from "../../assets/image/cyber-security.svg";
import office from "../../assets/image/office.svg";
import wifi from "../../assets/image/wifi.svg";

const CardSection = () => {
  const data = [
    {
      img: calender,
      title: "Feature Title",
      para: "Lorem Ipsum is simply dummy text of the printing industry.",
    },
    {
      img: sec,
      title: "Feature Title",
      para: "Lorem Ipsum is simply dummy text of the printing industry.",
    },
    {
      img: office,
      title: "Feature Title",
      para: "Lorem Ipsum is simply dummy text of the printing industry.",
    },
    {
      img: wifi,
      title: "Feature Title",
      para: "Lorem Ipsum is simply dummy text of the printing industry.",
    },
  ];
  return (
    <div className="card-section-container">
      {data?.map(val => (<Card {...val} />))}
    </div>
  );
};

export default CardSection;
