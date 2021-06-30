import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



const MainHeader = styled.header`
    position: sticky;
    top: 0;
    height: .5em;
    padding: 1em 4em;
    margin-bottom: 4em;
`;

const LogoWrapper = styled.div`
    height: 30px;
    position: relative;
`;

const StyledH1 = styled.h1`
    display: inline-block;
    position: absolute;
    bottom: 0;
    font-size: 1.2em;
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
    height: 30px;
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


const SiteNav = () => {
    return (
        <MainNav>
            <StyledUL>
                <StyledLI>
                    <StyledLink to="/all-articles" activeStyle={{borderBottom: "2px solid #F25D07"}}>All Articles</StyledLink>
                </StyledLI>
                <StyledLI>
                    <StyledLink to="/about"  activeStyle={{borderBottom: "2px solid #F25D07"}}>About</StyledLink>
                </StyledLI>
                <StyledLI>
                    <StyledLink to="/subscribe"  activeStyle={{borderBottom: "2px solid #F25D07"}}>Subscribe</StyledLink>
                </StyledLI>
                <StyledLI>
                    <StyledLink to="/contact"  activeStyle={{borderBottom: "2px solid #F25D07"}}>Contact</StyledLink>
                </StyledLI>
            </StyledUL>
        </MainNav>
    );
}


const SiteLogo = () => {
    return (
        <LogoWrapper>
            <StyledH1>
                <StyledLink to="/">Clean Data Blog</StyledLink>
            </StyledH1>
        </LogoWrapper>
    );
}


const SiteHeader = () => {
    return (
        <MainHeader>
            <SiteLogo />
            <SiteNav />
        </MainHeader>
    );
}

export default SiteHeader;
