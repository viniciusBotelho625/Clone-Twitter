import React from 'react';
import StickBox from 'react-sticky-box';
import List from '../List';
import FullowSuggestion from '../FullowSuggestion';
import News from '../News';

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
            
            <StickBox>
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
                        elements={[<News />, <News />, <News />, ]}
                    />
                    <List 
                        title="Talvez você curta"
                        elements={[<News />, <News />, <News />, ]}
                    />
                    <List 
                        title="Talvez você curta"
                        elements={[<News />, <News />, <News />, ]}
                    />
                    <List 
                        title="Talvez você curta"
                        elements={[<News />, <News />, <News />, ]}
                    />
                    
                </Body>
            </StickBox>
        </Container>
    );
};

export default SideBar;