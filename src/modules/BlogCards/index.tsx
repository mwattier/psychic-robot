import { Container } from "@components/Container";
import * as S from "./styled";
import { type FC } from "react";

import { type PostsTypes } from "@content/config";
import { PostCard } from "@components/PostCard";

type BlogCardsProps = React.HTMLAttributes<HTMLElement> & {
    description?: string;
    title: string;
    cards: {
        id: string;
        slug: string;
        data: PostsTypes;
    }[];
};

export const BlogCards: FC<BlogCardsProps> = ({
    cards,
    title,
    description,
    ...rest
}) => {
    // do not render if there are no elements
    if (!cards || cards.length === 0) return null;

    const displayCards = cards.map((card) => {
        return <PostCard link={"/posts/" + card.slug} {...card.data} />;
    });

    return (
        <S.BlogCardsStyled {...rest}>
            <Container>
                {title && description && (
                    <S.BlogCardsHeading>
                        {description && <p>{description}</p>}
                        {title && <h2>{title}</h2>}
                    </S.BlogCardsHeading>
                )}
                <S.BlogCardsWrapper>{displayCards}</S.BlogCardsWrapper>
            </Container>
        </S.BlogCardsStyled>
    );
};
