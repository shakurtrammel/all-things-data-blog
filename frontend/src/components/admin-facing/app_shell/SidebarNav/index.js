import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { SidebarData } from './SidebarData.js'



// Styles
const NavContainer = styled.div`
    width: 80px;
    height: 100vh;
    background-color: #2f4050;
`;

const StyledUL = styled.ul`
    height: auto;
    width: 100%;
    padding: 0;
`;

const SubMenu = styled.ul`
    position: absolute;
    left: -80px;
    transition: 0.3s;
    list-style: none;
`;

const StyledLI = styled.li`
    &:hover ${SubMenu} {
        left: 100px;
    }
`;

const StyledNavLink = styled(NavLink)`
    height: 50px;
    width: 100%;
    list-style-type: none;
    margin: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    &:hover {
        background-color: #293846; 
    }
`;

const IconContainer = styled.div`
    display: grid;
    place-items: center;
`;

const TitleContainer = styled.div`
    flex: 70%;
`;





// Export default component.
class SidebarNav extends React.Component {

    render() {
        return (
            <NavContainer>
                <StyledUL>
                    {SidebarData.map( (item, key) => {
                        return (
                            <StyledLI key={key}>
                                <StyledNavLink to={item.path}>
                                    <IconContainer>{item.icon}</IconContainer>
                                    <SubMenu>
                                        <li><a href='/admin'>Category 1</a></li>
                                        <li><a href='/admin'>Category 2</a></li>
                                </SubMenu>
                                </StyledNavLink>
                            </StyledLI>
                        );
                    })}
                </StyledUL>
            </NavContainer>
        )
    }
}

export default SidebarNav
