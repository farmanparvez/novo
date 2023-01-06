
const Card = ({ img, title, para }) => {
    console.log(img, title, para)
  return (
    <div className="card-container">
      <img src={img} alt="" />
      <span className="title">{title}</span>
      <span className="para">{para}</span>
    </div>
  );
};

export default Card;
