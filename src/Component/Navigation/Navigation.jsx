import styled from "styled-components";

function Navigation(){
    return(
            <NavigationContainer>
                <LeftContainer>
                        <h1>0</h1>
                        <h3>Total Score</h3>
                </LeftContainer>
                
                                <RightContainer>
                                    <ul>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li>6</li>
                                    </ul>

                                    <p>Select a Number</p>

                                </RightContainer>

            </NavigationContainer>
    );
}
export default Navigation;

const NavigationContainer = styled.div`

    height: 90px;
    width: 97%;
    border: 2px solid blue;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-image: linear-gradient(to right top, #4af868, #42f766, #39f563, #2ef461, #20f25f);


    `;
const LeftContainer = styled.div``;

const RightContainer = styled.div`


ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    list-style: none;
    justify-content: center;
}
ul li{
    border: 2px solid black;
    height: 40px;
    width: 40px;
    text-align: center;
    padding-top: 10px;
    cursor: pointer;


}

ul li:hover{
    background-color: black;
    color: white;
    font-weight: bold;
}
p{
    margin-top: 10px;
    float: right;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    
}

`;