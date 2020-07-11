import React from 'react';

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

          {/* <ProfilePage />  */}

          <BottomMenu>
              <HomeIcon className="active"/>
              <SearchIcon />
              <BellIcon />
              <EmailIcon />
          </BottomMenu>
      </Container>
  );
}

export default main;