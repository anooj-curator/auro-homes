import { ITeamMember } from "../types";

export const TeamMember = ({
  name,
  role,
  passion,
  currentImg,
  childhoodImg,
}: ITeamMember) => (
  <div className="team-member">
    <div className="card">
      <div className="card-front">
        <div className="team-member__image">
          <figure className="img-holder">
            <img loading="lazy" src={currentImg} alt="current" />
          </figure>
        </div>
        <div className="team-member__body">
          <h3 className="team-member__title">{name}</h3>
          <span className="team-member__subtitle">{role}</span>
        </div>
      </div>
      <div className="card-back">
        <div className="team-member__image">
          <figure className="img-holder">
            <img loading="lazy" src={childhoodImg} alt="childhood" />
          </figure>
        </div>
        <div className="team-member__body">
          <h3 className="team-member__title">{name}</h3>
          <span className="team-member__subtitle">Wanted to be {passion}</span>
        </div>
      </div>
    </div>
  </div>
);
