import { teamMembers } from "../data/teamMembers";
import { TeamMember } from "./TeamMember";

export const MeetTheTeam = () => {
  return (
    <section className="section members" id="meet-the-team">
      <div className="container">
        <header className="section-header text-center">
          <h2 className="section-title">Meet our team</h2>
        </header>
        <div className="team" style={{ opacity: 1 }}>
          {teamMembers.map((member) => (
            <TeamMember {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};
