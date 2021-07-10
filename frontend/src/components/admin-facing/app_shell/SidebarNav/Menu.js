import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'



// Styled components.
const DropdownLabel = styled.div`
    padding: 0.5em 2em 0.5em 1.5em;
    border: 1px solid #ccc;
    background-color: #eee;
    & ::after {
        content: '';
        position: absolute;
        right: 1em;
        top: 1em;
        border: 0.3em solid;
        border-color: black transparent transparent;
    }
`;

const DropdownMenu = styled.div`
    display: none;
    position: absolute;
    left: 0;
    top: 2.1em;
    min-width: 100%;
    background-color: #eee;
`;

const DropdownContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 100%;
    &:hover {
        ${DropdownMenu} {
            display: block;
        }
        ${DropdownLabel} ::after {
            top: 0.7em;
            border-color: transparent transparent black;
        }
        z-index: 1;
    }
`;

const Submenu = styled.ul`
    padding-left: 0;
    margin: 0;
    list-style-type: none;
    border: 1px solid #999;
`;

const StyledLink = styled(NavLink)`
    display: block;
    padding: .5em 1.5em;
    background-color: #eee;
    color: #369;
    text-decoration: none;
    border-top: 1px solid #999;
    &:hover {
        background-color: #fff;
    }
`;



// Main component.
const Menu = [
    {
        label: 'Articles',
        menu: <DropdownContainer id='dropdown-container'>
                    <DropdownLabel id='dropdown-label'>
                        <span>Articles</span>
                    </DropdownLabel>
                    <DropdownMenu id='dropdown-menu'>
                        <Submenu id='submenu'>
                            <StyledLink to='/admin/create-article'>Create Article</StyledLink>
                            <StyledLink to='/admin'>Read Article</StyledLink>
                            <StyledLink to='/admin'>Update Article</StyledLink>
                            <StyledLink to='/admin/delete-article'>Delete Article</StyledLink>
                        </Submenu>
                    </DropdownMenu>
                </DropdownContainer>,
    },
    {
        label: 'Analytics',
        menu: <DropdownContainer id='dropdown-container'>
                    <DropdownLabel id='dropdown-label'>
                        <span>Analytics</span>
                    </DropdownLabel>
                    <DropdownMenu id='dropdown-menu'>
                        <Submenu id='submenu'>
                            <StyledLink to='/admin'>Create Article</StyledLink>
                            <StyledLink to='/admin'>Read Article</StyledLink>
                            <StyledLink to='/admin'>Update Article</StyledLink>
                            <StyledLink to='/admin'>Delete Article</StyledLink>
                        </Submenu>
                    </DropdownMenu>
                </DropdownContainer>,
    },
    {
        label: 'Subscriptions',
        menu: <DropdownContainer id='dropdown-container'>
                    <DropdownLabel id='dropdown-label'>
                        <span>Subscriptions</span>
                    </DropdownLabel>
                    <DropdownMenu id='dropdown-menu'>
                        <Submenu id='submenu'>
                            <StyledLink to='/admin'>Create Article</StyledLink>
                            <StyledLink to='/admin'>Read Article</StyledLink>
                            <StyledLink to='/admin'>Update Article</StyledLink>
                            <StyledLink to='/admin'>Delete Article</StyledLink>
                        </Submenu>
                    </DropdownMenu>
                </DropdownContainer>,
    },

]

export default Menu;
