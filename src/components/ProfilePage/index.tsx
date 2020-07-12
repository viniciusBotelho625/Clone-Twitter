import React from 'react';
import Feed from '../Feed';

import { 
        Container, 
        Banner, Avatar, 
        ProfileData, 
        LocationIcon,
        CakeIcon, 
        Followage,
        EditButton,
        } from './style';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>

            <h1>Vinicius Botelho</h1>
            <h2>@poxa_botelho</h2>

            <p>
                Support at <a href="https://www.interplayers.com.br/">@Interplayers</a>
            </p>
            <ul>
                <li>
                    <LocationIcon />
                    São Paulo, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 16 de março de 2000
                </li>

                <Followage>
                    <span>
                        seguindo <strong>94</strong>
                    </span>
                    <span>
                        <strong>2000 </strong> seguidores
                    </span>
                </Followage>
            </ul>
          </ProfileData>

          <Feed />
      </Container>
  )
}

export default ProfilePage;