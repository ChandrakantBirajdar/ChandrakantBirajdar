import styled from "styled-components";


function Homepage()
{
    return(

        <HomepageContainer>


            <LeftContainer>
            <img src="https://media.gettyimages.com/id/183819034/photo/two-dices.jpg?s=612x612&w=0&k=20&c=sawA-Q6tAlmzm37EiFViPCr9AT3f-PnwCM8qXrQzR2w=" alt="img not found" />

            </LeftContainer>



            <RightContainer>
                <h1>DICE GAME</h1>
               <div> <button>Play Now</button></div>
            </RightContainer>




        </HomepageContainer>
    );
}
export default Homepage;

const HomepageContainer = styled.div`

        height: 100vh;
        width: 100%;
        /* border: 2px solid black; */
        display: flex;
        flex-direction: row;
        gap: 3px;
        justify-content: center;
        align-items: center;
    `;

const LeftContainer = styled.div`

        height: 550px;
        width: 560px;
        /* border: 2px solid green; */
        img{
            height: 100%;
            width: 100%;
        }
    `;


const RightContainer = styled.div`

height: 550px;
        width: 560px;
        /* border: 2px solid green; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: right;
        right: 0;
        font-family: "Poppins", sans-serif;
        font-weight: 100;

        h1{
            font-size: 70px;
        }
        button{
            height: 40px;
            width: 130px;
            left: 0;
            border: 2px solid black;
            background-color: black;
            color: white;
            border-radius: 5px;
            font-weight: bold;
        }
    `;