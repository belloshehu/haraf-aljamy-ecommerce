import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);
// import image from "../images/bread3.jpg";

export default function Slider() {
  return (
    <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={2000}
        animation="foldOutAnimation"
        media={[
          {
            source: "/images/bread1.jpg",
          },
          {
            source: "/images/bread3.jpg",
          },
          {
            source: "/images/conf3.jpg",
          },
        ]}></AutoplaySlider>
    </div>
  );
}
