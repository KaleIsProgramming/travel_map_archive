import styled from "@emotion/styled";

export const NavBar = () => {

    return(
        <StyledNavBar>
            <Header>MyTravel</Header>
        </StyledNavBar>
    );
};

const StyledNavBar = styled.div`
    height: 100%;
    width: 280px;
    background: #232222;
`;

const Header = styled.div`
    width: 100%;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 160%;
`;