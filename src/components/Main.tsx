import { ContactUs } from "./ContactUs";
import Gallery from "./Gallery";
import { MeetTheTeam } from "./MeetTheTeam";
import { Mission } from "./Mission";
import { WhatWeOffer } from "./WhatWeOffer";
// import { WhyUs } from "./WhyUs";

export const Main = () => {
  return (
    <main id="main">
      <WhatWeOffer />
      <Mission />
      {/* <WhyUs /> */}
      <MeetTheTeam />
      {/* <Gallery /> */}
      <ContactUs />
    </main>
  );
};
