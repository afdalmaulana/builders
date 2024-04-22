import { About } from "./About";
import { Footer } from "./Footer";
import { OurWorks } from "./OurWorks";
import { Banner } from "./Pages/Banner";
import { Services } from "./Pages/Services";
import { ViewParallax } from "./Pages/ViewParallax";

export const Home = () => {
  return (
    <>
      <Banner />
      <ViewParallax />
      <Services />
      <About />
      <OurWorks />
      <Footer />
    </>
  );
};
