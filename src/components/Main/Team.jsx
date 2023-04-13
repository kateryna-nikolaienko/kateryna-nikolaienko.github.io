import React, { useContext, useEffect, useState } from 'react';
import ContextThemeColor from '../../context/ContextThemeColor';

function Team() {
  const [team, setTeam] = useState([]);

  const getData = async () => {
    const response = await fetch('https://reqres.in/api/users?page=2');
    const { data } = await response.json();
    setTeam(data);
  };

  useEffect(() => {
    getData()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const { theme } = useContext(ContextThemeColor);

  return (
    <section className={`team ${theme}`}>
      <div className="container">
        <div className="team__inner">
          <div className="team__title">
            OUR BIG TEAM
          </div>
          <ul className="team__list">
            {team.map((person) => (
              <ul className="team__list-item" key={person.id}>
                <li className={`team__list-name ${theme}`}>
                  {`${person.first_name} ${person.last_name}`}
                </li>
                <li className={`team__list-email ${theme}`}>
                  {person.email}
                </li>
                <li className="team__list-img">
                  <img src={person.avatar} alt="Person" />
                </li>
              </ul>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Team;
