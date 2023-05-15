import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ContextThemeColor from '../../context/ContextThemeColor';
import { teamData } from '../../store/team/selectors';
import { getTeam } from '../../store/team/actions';

function Team() {
  const dispatch = useDispatch();
  const teamArray = useSelector(teamData);
  const { isLoading } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(getTeam());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(getTeam());
  };

  const { theme } = useContext(ContextThemeColor);
  const { t } = useTranslation();

  return (
    <section className={`team ${theme}`}>
      <div className="container">
        <div className="team__inner">
          <div className="team__title">
            {t('team.title')}
            <button type="button" className="team__button" onClick={handleRefresh}>
              <img className="team__icon" alt="reload" src="https://htmlacademy.ru/assets/icons/reload-6x-white.png" />
              {isLoading ? (
                <span className="loader" />
              ) : (
                <span>{t('team.refresh')}</span>
              )}
            </button>
          </div>
          {teamArray !== undefined && (
            <ul className="team__list">
              {teamArray.map((person) => (
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
          )}
        </div>
      </div>
    </section>
  );
}

export default Team;
