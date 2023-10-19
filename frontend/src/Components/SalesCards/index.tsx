import React from "react"
import { StyledTitle } from "../../Styles/Typography"
import { StyledProductCard } from "./style"
import carPorsche from "../../assets/salecard/carPorsche.svg"
import userExample from "../../assets/saleCard/userExample.svg"

export const SalesCard = ()=>{
    return (
        <main>
            <StyledProductCard>
                <img src={carPorsche}alt="porsche" />
                <StyledTitle $fontSize="two">Product title stays here - max 1 line</StyledTitle>
                <StyledTitle $fontSize="three">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</StyledTitle>
                <div className="user_img">
                    <img  src={userExample} alt="profile image" />
                    <StyledTitle className="seller" $fontSize="three" >Anuciante</StyledTitle>
                </div>
                <div className="carDataNumbers">
                    <div className="yearKm">
                        <span className="km">0 KM</span>
                        <span className="year">2019</span>
                    </div>
                    <div>
                        <span className="price">R$ 20.000,00</span>
                    </div>
                </div>
            </StyledProductCard>
        </main>
    )
}