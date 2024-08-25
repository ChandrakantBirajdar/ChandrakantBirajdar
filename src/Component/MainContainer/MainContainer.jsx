import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";

function MainContainer()
{
    const [imgNumber,setImgNumber]=useState(1);
    const [count,setCount]=useState(0)
    const [currentBtn,setCurrentBtn]=useState(undefined);
    const [score,setScore]=useState(0);


    function random(min, max) {
        setImgNumber(Math.floor(min + Math.random() * (max - min)));
         
        if(currentBtn=== imgNumber)
        {
            setScore(currentBtn+2)
        }
        else{
            setScore(currentBtn-2)
        }
        return Math.floor(min + Math.random() * (max - min));

        
      }

      const arr=[1,2,3,4,5,6];
 

    return(
        <Container>
            <NavigationContainer>
                <LeftContainer>
                        <h1>{score}</h1>
                        <h3>Total Score</h3>
                </LeftContainer>
                
                                <RightContainer>
                                    <ul>
                                        {
                                            arr.map((value)=><li onClick={()=>setCurrentBtn(value)} key={value}>{value}</li>)
                                        }
                                    </ul>

                                    <p>Select a Number</p>

                                </RightContainer>

            </NavigationContainer>
            <ImageContainer>
               

                <img src={`dice-${imgNumber}.png`} onClick={()=>random(1,7)} />    
                <button>Reset</button>            
                <button>Show the Rules</button>
                
             </ImageContainer>
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
const LeftContainer = styled.div``;
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

const ImageContainer = styled.div`

    border: 2px solid black;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 17px;

    img{
        height: 300px;
        width: 300px;
        cursor: pointer;
    }

    button{
        height: 40px;
        width: 140px;
        background-color: black;
        color: white;
        border-radius: 4px;
        cursor: pointer;
    }
`;