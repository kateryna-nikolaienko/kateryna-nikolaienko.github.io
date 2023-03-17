import React, { Component } from 'react';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
    };
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => response.json())
      .then((data) => this.setState({ team: data.data }));
  }

  render() {
    const { team } = this.state;
    return (
      <section className="team">
        <div className="container">
          <div className="team__inner">
            <div className="team__title">
              OUR BIG TEAM
            </div>
            <ul className="team__list">
              {team.map((person) => (
                <ul className="team__list-item" key={person.id}>
                  <li className="team__list-name">
                    {`${person.first_name} ${person.last_name}`}
                  </li>
                  <li className="team__list-email">
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
}

export default Team;
