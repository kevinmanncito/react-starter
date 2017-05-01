import React from 'react';


class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <h1>React</h1>
        <img src={require('../images/me.png')} />
      </header>
    );
  }
}

export default Header;
