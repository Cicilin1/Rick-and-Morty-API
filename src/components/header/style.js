import styled from "styled-components";

export const Container = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem  2rem;

    nav{
        align-items: center;
        display:flex;
        gap: 31.5px;


        @media (max-width: 520px){
            display:none;
        }
    }

    nav a{
        text-align: center;
        font-style: none;
        color: rgb(32, 35, 41);
        text-decoration: none;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 29.25px;
    }
    
    nav a:hover{
        cursor: pointer;
        color: orange;
    }

    nav a:last-child{
        padding: 10px 19px;
        border-radius: 9px;
        border: 1px solid #FF9800;
        
        font-size: 13.5px;
        font-style: normal;
        font-weight: 700;
        line-height: 21.94px; 
        text-transform: uppercase;
        transition: 0.1s;
    }

    nav a:last-child:hover{
        color:#fff;
        background-color:#FF9800;
    }


   
    
`


