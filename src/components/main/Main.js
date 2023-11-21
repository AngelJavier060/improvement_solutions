import CarouselUsers from "./home/CarouselUsers";
import Home from "./home/Home";
import Learn from "./home/Learn";
import Plan from "./home/Plan";
import Program from "./home/Program";
import Question from "./home/Question";
import Services from "./home/Services";

const Main = () => {


  return (
    <div className="flex flex-col gap-y-8">
      <Home />
      <Program />
      <Services />
      <Plan />
      <CarouselUsers />
      <Question />
      <Learn />
    </div>
  );
};

export default Main;
