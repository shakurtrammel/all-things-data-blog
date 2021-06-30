import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { SidebarData } from './SidebarData.js'



// Styles
const StyledDiv = styled.div`
    height: 100vh;
    width: 250px;
    background-color: #2f4050;
`;

const StyledUL = styled.ul`
    height: 100%;
    width: 100%;
    padding: 0;
`;

const StyledNavLink = styled(NavLink)`
    height: 50px;
    width: 100%;
    border: 1px solid black;
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: row;
    color: white;
`;



// Export default component.
class SidebarNav extends React.Component {

    render() {
        return (
            <StyledDiv>
                <StyledUL>
                    {SidebarData.map( (item, key) => {
                        return (
                            <li key={key}>
                                <StyledNavLink to={item.path}>
                                    <div>{item.icon}</div>
                                    <div>{item.title}</div>
                                </StyledNavLink>
                            </li>
                        );
                    })}
                </StyledUL>
            </StyledDiv>
        )
    }
}

export default SidebarNav
