import React            from 'react'
import styled           from 'styled-components'
import { NavLink }      from 'react-router-dom';
import Menu             from './Menu.js'



const SidebarWrapper = styled.div`
    grid-column-start: line1;
    grid-column-end: line2;
    grid-row-start: line1;
    grid-row-end: line2;
    position: fixed;
`;


// Admin Logo styles and subcomponents.
const LogoWrapper = styled.div`
    height: 75px;
    position: relative;
`;

const StyledH1 = styled.h1`
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 25px;
    font-size: 1.1em;
`;

const StyledLink = styled(NavLink)`
    :link {text-decoration: none;}
    :visited {text-decoration: none;}
    :hover {text-decoration: none;}
    :active {text-decoration: none; color: #152B59;}
    font-family: 'Source Sans Pro', sans-serif;
    color: black;
`;

const AdminLogo = () => {
    return (
        <LogoWrapper>
            <StyledH1>
                <StyledLink to="/admin">Simple CMS (admin)</StyledLink>
            </StyledH1>
        </LogoWrapper>
    );
}



// Sidebar styles and subcomponents.
const NavContainer = styled.nav`
    width: 225px;
    height: 100vh;
    background-color: lightblue;
`;



// Main component.
const SidebarNav = () => {
        return (
                <SidebarWrapper>
                    <AdminLogo />
                    <NavContainer>
                        {Menu.map((item, key) => {
                            return (
                            <div>{item.menu}</div>
                            )
                        })}
                    </NavContainer>
                </SidebarWrapper>
        )
}

export default SidebarNav
