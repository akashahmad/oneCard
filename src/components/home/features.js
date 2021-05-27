import CarousalComponent from "./featureLists";

const Features = () => {
  return (
    <div className="home_feature_container">
      <div className=" py-12 container mx-auto">
        {/* title */}
        <div>
          <h4 className="text-2xl primary_clr text-center font-bold">
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
  );
};
export default Features;
