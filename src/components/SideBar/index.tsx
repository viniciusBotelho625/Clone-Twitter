import React from 'react';

import { 
    Container, 
    SearchWrapper, 
    SearchInput, 
    SearchIcon, 
    Body 
} from './style';

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <Body>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quas repellat sint excepturi ipsa voluptatem. Incidunt assumenda corporis ut blanditiis est amet aut ab laudantium magni accusamus, ex debitis reprehenderit.</p>
            </Body>
        </Container>
    );
};

export default SideBar;