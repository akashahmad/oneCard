import CarousalComponent from "./featureLists";
import { Parallax } from "react-parallax";
import FeatureBackImage from "../../assets/images/featureBackImage.png";

const Features = () => {
  return (
    <Parallax
      blur={10}
      bgImage={FeatureBackImage}
      bgImageAlt=""
      strength={200}
    >
      <div className="home_feature_container lg:pt-12 xl:pt-12">
        <div className=" py-12 container mx-auto">
          {/* title */}
          <div className="lg:pt-12 xl:pt-12">
            <h4 className="text-3xl primary_clr text-center font-bold">
              Features
            </h4>
            <p className="primary_clr text-center py-3">
              We Empower you to get the most out of your cards!
            </p>
          </div>
          <div className="py-5">
            <CarousalComponent />
          </div>
        </div>
      </div>
    </Parallax>
  );
};
export default Features;
