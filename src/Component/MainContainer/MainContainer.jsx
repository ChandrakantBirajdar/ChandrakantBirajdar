import styled from "styled-components";
import Navigation from "../Navigation/Navigation";

function MainContainer()
{
    return(
        <Container>
            <Navigation/>
        </Container>
    );
}
export default MainContainer;

const Container = styled.div`
    height: 100vh;
    width: 100%;
    border: 2px solid red;
    padding: 5px;
`;