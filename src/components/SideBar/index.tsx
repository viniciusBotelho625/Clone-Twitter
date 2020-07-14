import React from 'react';
import List from '../List';
import FullowSuggestion from '../FullowSuggestion';

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
                <List 
                    title="Talvez você curta"
                    elements={[
                        <FullowSuggestion 
                            name="Yuri Ramalho" nickname="@yuriramalho"
                        />,
                        <FullowSuggestion 
                            name="Lucas Souza" nickname="@fullstack"
                        />,
                        <FullowSuggestion 
                            name="Rodrigo Guirra" nickname="@guirra"
                        />
                        
                    ]}
                />
                <List 
                    title="Talvez você curta"
                    elements={[<h1>Teste</h1>,<h1>Teste</h1>,<h1>Teste</h1>,
                    ]}
                />
            </Body>
        </Container>
    );
};

export default SideBar;