import React, { type FC } from "react";

import * as S from "./styled";
import { Container } from "@components/Container";
import { FadeIn } from "@utils/animations/FadeIn";
import { PriceCard, type PriceCardProps } from "@components/PriceCard";

type PricingCards = {
    title: string;
    description?: string;
    cards: PriceCardProps[];
};

export const PricingCards: FC<PricingCards> = ({
    cards,
    description,
    title,
}) => {
    // do not render if there are no cards

    if (!cards || !cards.length) {
        return null;
    }

    const cardsElements = cards.map((card, index) => {
        return (
            <FadeIn key={index}>
                <PriceCard {...card} />
            </FadeIn>
        );
    });

    return (
        <S.PricingCardsStyled>
            <Container>
                {title && description && (
                    <FadeIn>
                        <S.PricingCardsHeading>
                            {description && <p>{description}</p>}
                            {title && <h2>{title}</h2>}
                        </S.PricingCardsHeading>
                    </FadeIn>
                )}
                <S.PricingCardsGrid>{cardsElements}</S.PricingCardsGrid>
            </Container>
        </S.PricingCardsStyled>
    );
};
