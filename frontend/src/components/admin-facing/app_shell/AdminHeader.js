import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



const MainHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 3;
    height: 75px;
    grid-column-start: line2;
    grid-column-end: line3;
    grid-row-start: line1;
    grid-row-end: line2;

`;

const StyledLink = styled(NavLink)`
    :link {text-decoration: none;}
    :visited {text-decoration: none;}
    :hover {text-decoration: none;}
    :active {text-decoration: none; color: #152B59;}
    font-family: 'Source Sans Pro', sans-serif;
    color: black;
`;

const MainNav = styled.nav`
    position: absolute;
    bottom: 0;
    right: 4em;
    display: inline-block;
    font-size: .85em;
`;

const StyledUL = styled.ul`
    list-style: none;
    text-align: center;
`;

const StyledLI = styled.li`
    display: inline-block;
    margin-right: 1em;
`;


const AdminSiteNav = () => {
    return (
        <MainNav>
            <StyledUL>
                <StyledLI>
                    <StyledLink to="/admin" activeStyle={{borderBottom: "2px solid #F25D07"}}>Admin Home</StyledLink>
                </StyledLI>
                <StyledLI>
                    <StyledLink to="/" activeStyle={{borderBottom: "2px solid #F25D07"}}>Public Site</StyledLink>
                </StyledLI>
                <StyledLI>
                    <StyledLink to="/about"  activeStyle={{borderBottom: "2px solid #F25D07"}}>Profile</StyledLink>
                </StyledLI>
                <StyledLI>
                    <StyledLink to="/subscribe"  activeStyle={{borderBottom: "2px solid #F25D07"}}>Logout</StyledLink>
                </StyledLI>
            </StyledUL>
        </MainNav>
    );
}



const AdminHeader = () => {
    return (
        <MainHeader>
            <AdminSiteNav />
        </MainHeader>
    );
}


export default AdminHeader;
