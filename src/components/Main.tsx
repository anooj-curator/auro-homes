import { ContactUs } from "./ContactUs";
import { MeetTheTeam } from "./MeetTheTeam";
import { Mission } from "./Mission";
import { WhatWeOffer } from "./WhatWeOffer";
import { WhyUs } from "./WhyUs";

export const Main = () => {
  return (
    <main id="main">
      <WhatWeOffer />
      <Mission />
      <WhyUs />
      <MeetTheTeam />
      <ContactUs />
    </main>
  );
};
