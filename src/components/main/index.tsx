import React from 'react';

import ProfilePage from '../ProfilePage';

import { Container, 
        Header, 
        BackIcon, 
        ProfileInfo,
        BottomMenu, 
        HomeIcon, 
        SearchIcon,
        BellIcon, 
        EmailIcon,
    } from './style';

const main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon />
              </button>

              <ProfileInfo>
                  <strong>Vincius Botelho</strong>
                  <span>613 Tweets</span>
              </ProfileInfo>
          </Header>

          <ProfilePage /> 

          <BottomMenu>
              <SearchIcon className="active"/>
              <HomeIcon />
              <BellIcon />
              <EmailIcon />
          </BottomMenu>
      </Container>
  );
}

export default main;