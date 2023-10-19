import styled from "styled-components";

export const StyledProductCard=styled.div`
    width:312px;
    height:350px;
    margin-left:5%;
    margin-top:3%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    img{
        width:312px;
        height:152px;
    }
    .user_img{
        display:flex;
        img{
            width:32px;
            height:32px;
            border-radius:50%;
        }
        .seller{
            margin-top:4px;
            margin-left:10px;
        }
    }
    .carDataNumbers{
        display:flex;
        justify-content:space-between;
        align-items: center;
        .yearKm{
            display:flex;
            align-items:center;
        }
        .km{
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content: center;
            height:31px;
            width:51px;
            background:var(--color-brand-brand-4);
            color:var(--color-brand-brand-3);
        }
        .year{
            display:flex;
            flex-direction:row;
            justify-content: center;
            align-items:center;
            margin-left:15px;
            height:31px;
            width:51px;
            background:var(--color-brand-brand-4);
            color:var(--color-brand-brand-3);
        }
        .price{
            color:var(--color-grey-scale-grey-9);
            font-size:16px;
        }
    }
`