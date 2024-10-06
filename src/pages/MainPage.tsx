import styled from "@emotion/styled";
import { MapChart } from "../components";

export const MainPage = () => {
    return(
        <StyledMainPage>
            <MapChart />
        </StyledMainPage>
    );
};

const StyledMainPage = styled.div`
    height: 100%;
    width: calc(100% - 280px);  
    display: flex;
`;