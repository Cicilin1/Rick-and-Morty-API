import styled from "styled-components"

export const Container = styled.div`
    background: #202329;
    height: 393.44px;
    flex-shrink: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    gap:1.5rem;
    color: #ffffff;
 
    div{
        display: flex;
        gap:0.6rem; 
    }


    a{
        text-decoration: none;
        cursor: pointer;
    }


    img{
        color: #fff;
        width: 40px;

        &:hover{
            opacity: 0.7;
        }
    }


    p{
        display: flex;
        align-items: center;
        font-size: 22px;
        gap:1rem;
    }

    p img{
        width:20px;
        
        
        &:hover{
            opacity: 1;
        }
    }
`