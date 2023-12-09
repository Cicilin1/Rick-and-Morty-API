import styled from "styled-components";
import BackgorundImage from "../../assets/background.svg"

export const Container = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${BackgorundImage});
    background-position: center;
    background-size:cover;
    
    h1{
        color: #202329;
        text-align: center;
        font-family: Roboto;
        font-size: 101.3px;
        font-style: normal;
        font-weight: 900;
        line-height: 111.38px;
         font-weight: 900;
    }


`;