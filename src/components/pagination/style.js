import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:12px;
    margin-top: 20px;

    button{
        background-color: transparent;
        border:none;
        color:rgba(158, 158, 158, 0.7);
        font-size: 50px;

        &:hover{
            color:#ff9800;
            cursor:pointer;
        }

        &:disabled {
            color:rgba(158, 158, 158, 0.5);
            cursor:not-allowed;
        }        
    }

    
    .Container-page{
        display: flex;
        align-items: center;
        gap:12px;
    }

    .page{
        font-weight: 400;
        font-size:16px;
        line-height:15px;
        color:rgba(158, 158, 158, 0.7);
    }

    .current-page{
        font-weight: 400;
        font-size:26px;
        line-height:27px;
        color:#ffffff;
    }


`;
