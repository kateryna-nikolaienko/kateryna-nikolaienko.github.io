import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ContextThemeColor from '../../context/ContextThemeColor';
import { useGetTeamQuery } from '../../store/apis/team';

function Team() {
  const {
    data, refetch, isFetching, isError
  } = useGetTeamQuery();
  console.log(data);

  const { theme } = useContext(ContextThemeColor);
  const { t } = useTranslation();

  return (
    <section className={`team ${theme}`}>
      <div className="container">
        <div className="team__inner">
          <div className="team__title">
            {t('team.title')}
            <button type="button" className="team__button" onClick={refetch}>
              <img className="team__icon" alt="reload" src="https://htmlacademy.ru/assets/icons/reload-6x-white.png" />
              {isFetching && <span className="loader" />}
              {!isFetching && !isError && <span>{t('team.refresh')}</span>}
              {isError && (<h1>Error Loading</h1>)}
            </button>
          </div>
          {data && (
            <div className="team__list">
              {data.data.map((person) => (
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Team;
