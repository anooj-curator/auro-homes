import { ContactUs } from "./ContactUs";
import { MeetTheTeam } from "./MeetTheTeam";
import { Mission } from "./Mission";
import { WhatWeOffer } from "./WhatWeOffer";

export const Main = () => {
  return (
    <main id="main">
      <WhatWeOffer />
      <Mission />
      <MeetTheTeam />
      <ContactUs />
    </main>
  );
};
