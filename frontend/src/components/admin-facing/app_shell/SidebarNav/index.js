import React from 'react'
import styled from 'styled-components'
import Menu from './Menu.js'



// Styled components.
const NavContainer = styled.nav`
    width: 200px;
    height: 100vh;
    background-color: #2f4050;
`;



// Main component.
const SidebarNav = () => {
        return (
                <NavContainer>
                    {Menu.map((item, key) => {
                        return (
                           <div>{item.menu}</div>
                        )
                    })}
                </NavContainer>
        )
}

export default SidebarNav
