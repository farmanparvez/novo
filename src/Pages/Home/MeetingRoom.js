import React from "react";
import room from "../../assets/image/room.svg";

const MeetingRoom = () => {
  return (
    <div className="container">
      <div className="left">
        <div>
          <div className="tittle">Meeting Rooms</div>
          <div className="para">
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry. Lorem <br /> Ipsum has been the industry's
            standard <br /> dummy text ever since the 1500s, when an <br />{" "}
            unknown printer.
          </div>
          <button className="btn" type="butto">
            Know More
          </button>
        </div>
      </div>
      <div className="right">
        <div className="logo-box">
          <img src={room} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;
