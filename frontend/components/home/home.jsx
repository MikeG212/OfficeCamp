import NavBarContainer from '../nav_bar/nav_bar_container';
import React from 'react';

class Home extends React.Component {
  render() {
    return(<div className="home_container">
        <div className="home">
        <NavBarContainer />
      </div>
    </div>
  );
  }
}

export default Home;
