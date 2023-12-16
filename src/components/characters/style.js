import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    width: 580px;
    height: 220px;
    border-radius: 5px;


    background-color: #3c3e44;
    box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.1),
    0px 2px 4px -1px rgba(0,0,0,0.06);

    img{ 
        width: 220px;
        height: 220px;
        border-radius: 5px;
    }

    @media (max-width:520px){
        flex-direction: column;
        width: 160px;
        height: 500px;
    

        img{ 
            width: 160px;
            height: 160px;
        }

    }
`;


export const ContainerInfo = styled.div`
    display: flex;
    flex-direction:column;
    gap: 14px; 
    padding:12px;

    .title{
        font-weight:800;
        font-size: 27px;
        line-height:30px;
        color :#f5f5f5;


        :hover{
            color:#ff9800
        }
    }

    .status{ 
        display: flex;
        align-items: center;
        font-weight:500;
        font-size: 16px;
        line-height:26px;
        color :#ffffff;
        text-transform: capitalize;


        span{
            display:flex;
            width:9px;
            height:9px;
            border-radius: 50%;
            margin-right:6px;
            background-color: ${(props) => props.backgroundColor} ;
        }
    }

    .info{
        font-weight:500;
        font-size: 15px;
        line-height:26px;
        color :#9e9e9e;
    }


    .description{ 
        font-weight:400;
        font-size: 18px;
        line-height:29px;
        color :#f5f5f5;
    }

    :hover{
        color:#ff9800
    }


    @media (max-width:520px){
        .title{
        font-size: 20px;
        margin-bottom: 0.8rem;
        }
    }

    
`;