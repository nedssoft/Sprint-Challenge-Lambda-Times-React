import React from 'react';
import { TopBarContainer, TopBarWrapper } from './TopBarStyle'
import Login from './Login'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = ({ showModal, showLogin, isLoggedIn, logout }) => {
  let authButton = (
    <div onClick={showLogin}>
      <span>LOG IN</span>
    </div>
  )
  if (isLoggedIn) {
    authButton = (
      <div onClick={() => logout()}>
        <span>LOG Out</span>
      </div>
    )
  }
  return (
    <React.Fragment>
      <Login showModal={showModal} showLogin={showLogin} />
      <TopBarWrapper>
        <TopBarContainer>
          <div>
            <span>TOPICS</span><span>SEARCH</span>
          </div>
          <div>
            <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
          </div>
          {authButton}
        </TopBarContainer>
      </TopBarWrapper>
    </React.Fragment>
  )
}

export default TopBar;