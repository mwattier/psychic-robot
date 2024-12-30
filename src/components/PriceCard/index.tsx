import React, { type FC } from "react";
import * as S from "./styled";
import { Button } from "@components/Button";
import { Icon } from "@static/icons";
export type PriceCardProps = {
    title?: string;
    price?: string;
    list?: string[];
    image: string;
};

export const PriceCard: FC<PriceCardProps> = ({
    list,
    price,
    title,
    image,
    ...rest
}) => {
    // do not render if there are no list items
    if (!list || !list.length) {
        return null;
    }

    return (
        <S.PriceCardStyled {...rest} $bgImage={image}>
            <S.PriceCardTitle>{title}</S.PriceCardTitle>
            <S.PriceCardPrice>
                <h3>${price}</h3>
                <span>/month</span>
            </S.PriceCardPrice>
            <S.PriceCardList>
                {list.map((item, index) => (
                    <li key={index}>
                        <Icon iconData="arrowRight" alt={item} />
                        {item}
                    </li>
                ))}
            </S.PriceCardList>
            <Button variant="primary" showIcon={true} link="#" align="center">
                Sign Up
            </Button>
        </S.PriceCardStyled>
    );
};
