import MeetingRoom from "./MeetingRoom";
import DedicatedRoom from "./DedicatedRoom";
import ConferenceRoom from "./ConferenceRoom";
import Cowk from "./CowkRoom"

const OfferSection = () => {
  return (
    <div className="offer-section-container">
      <span className="tittle">Solutions we Offer</span>
      <MeetingRoom />
      <DedicatedRoom />
      <ConferenceRoom />
      <Cowk />
    </div>
  );
};

export default OfferSection;
