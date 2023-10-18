import React from "react"
import { StyledTitle } from "../../Styles/Typography"
import { StyledProductCard } from "./style"

export const SalesCard = ()=>{
    return (
        <main>
            <StyledProductCard>
                <img src="../assets/carPorsche.svg" alt="Gol" />
                <StyledTitle $fontSize="two" fontColor='gray'>Product title stays here - max 1 line</StyledTitle>
                <StyledTitle $fontSize="three" fontColor="gray600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</StyledTitle>
                <div className="user_img">
                    <img  src="../assets/userExample.svg" alt="" />
                    <StyledTitle className="seller" $fontSize="three" fontColor="gray600">Anuciante</StyledTitle>
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