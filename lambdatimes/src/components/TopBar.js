import React from 'react';
import {TopBarContainer, TopBarWrapper } from './TopBarStyle'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarWrapper>
      <TopBarContainer>
        <div>
          <span>TOPICS</span><span>SEARCH</span>
        </div>
        <div>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </div>
        <div>
          <span>LOG IN</span>
        </div>
      </TopBarContainer>
    </TopBarWrapper>
  )
}

export default TopBar;