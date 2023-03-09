import React, { Component } from 'react';
import Button from '../Buttons/Button';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attacks: [
        {
          year: 1988,
          description: {
            name: 'Morris Worm',
            damage: 'The first large-scale cyberattack that spread over the '
              + 'Internet and affected more than 6,000 computers.'
          }
        },
        {
          year: 2000,
          description: {
            name: 'ILOVEYOU',
            damage: 'One of the most famous viruses that spread through e-mail '
              + 'and caused significant damage.'
          }
        },
        {
          year: 2007,
          description: {
            name: 'Storm Worm',
            damage: 'A massive botnet that was used to send spam and conduct '
              + 'DDoS attacks.'
          }
        },
        {
          year: 2017,
          description: {
            name: 'WannaCry',
            damage: 'A massive cyber attack that affected computer systems '
              + 'around the world, including healthcare systems and financial institutions.'
          }
        },
        {
          year: 2020,
          description: {
            name: 'SolarWinds',
            damage: 'The hacking attack on the American company SolarWinds, '
              + 'which took place due to a broken software package, affected many large companies and institutions.'
          }
        }
      ],
      ascending: true,
      activeElement: null
    };
  }

  renderTableContent = () => {
    const { attacks, activeElement } = this.state;
    return attacks.map((item) => {
      return (
        <tr
          key={item.year}
          onClick={() => this.handleRowClick(item)}
          className={activeElement === item ? 'activeRow' : ''}
        >
          <td>{item.year}</td>
          <td>{item.description.name}</td>
          <td>{item.description.damage}</td>
        </tr>
      );
    });
  };

  handleRowClick = (item) => {
    const { activeElement } = this.state;
    this.setState({ activeElement: activeElement === item ? null : item });
  };

  removeElementFromObject = () => {
    this.setState(({ attacks }) => {
      const [object] = attacks;
      const updatedObject = { ...object };
      delete updatedObject.description.damage;
      const updatedAttacks = [updatedObject, ...attacks.slice(1)];
      return { attacks: updatedAttacks };
    });
  };

  addElementToObject = () => {
    this.setState(({ attacks }) => {
      const newAttacks = [...attacks];
      newAttacks[0] = {
        ...newAttacks[0],
        description: {
          ...newAttacks[0].description,
          damage: 'The first large-scale cyberattack that spread over the '
            + 'Internet and affected more than 6,000 computers.',
        }
      };
      return { attacks: newAttacks };
    });
  };

  sortArray = () => {
    this.setState(({
      ascending,
      attacks
    }) => ({
      attacks: [...attacks].sort((a, b) => {
        return ascending ? a.year - b.year : b.year - a.year;
      }),
      ascending: !ascending
    }));
  };

  // sortArray = () => {
  //   this.setState(({ attacks }) => {
  //     const newAttacks = [...attacks];
  //     for (let i = newAttacks.length - 1; i >= 0; i -= 1) {
  //       for (let j = 1; j <= i; j += 1) {
  //         if (newAttacks[j - 1].year < newAttacks[j].year) {
  //           const buffer = newAttacks[j - 1];
  //           newAttacks[j - 1] = newAttacks[j];
  //           newAttacks[j] = buffer;
  //         }
  //       }
  //     }
  //     return { attacks: newAttacks };
  //   });
  // };

  addNewObject = () => {
    this.setState(({ attacks }) => {
      const newObject = {
        year: 2017,
        description: {
          name: 'Petya',
          damage: 'The program encrypts files on the victim computers hard drive, and also overwrites and encrypts '
              + 'the master boot record — the data needed to boot the operating system.'
        }
      };
      const newAttacks = [...attacks, newObject];
      return { attacks: newAttacks };
    });
  };

  removeLastElement = () => {
    this.setState(({ attacks }) => {
      const newAttacks = [...attacks];
      newAttacks.pop();
      return { attacks: newAttacks };
    });
  };

  rewriteBySpread = () => {
    this.setState(({ attacks }) => {
      const [object, ...rest] = attacks;
      const newObject = { year: '2080' };
      const sum = { ...object, ...newObject };
      return { attacks: [sum, ...rest] };
    });
  };

  render() {
    return (
      <section className="table">
        <div className="table__container container">
          <h1 className="table__title">The most popular cyber attacks</h1>
          <table className="table__inner">
            <tbody>
              <tr className="table__header">
                <th>Year</th>
                <th>Name</th>
                <th>Description</th>
              </tr>

              {this.renderTableContent()}

            </tbody>
          </table>
          <Button className="table__btn" text="Sort by years" onClick={this.sortArray} />
          <Button className="table__btn" text="Add new attack" onClick={this.addNewObject} />
          <Button className="table__btn" text="Remove" onClick={this.removeLastElement} />
          <Button className="table__btn" text="Remove element" onClick={this.removeElementFromObject} />
          <Button className="table__btn" text="Add element" onClick={this.addElementToObject} />
          <Button className="table__btn" text="Spread operator" onClick={this.rewriteBySpread} />
        </div>
      </section>
    );
  }
}

export default Table;
