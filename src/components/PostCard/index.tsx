import React, { type FC } from "react";
import * as S from "./styled";
import { Image } from "@static/images";

import { type PostsTypes } from "@content/config";

type PostCardProps = {
    link: string;
} & PostsTypes;

export const PostCard: FC<PostCardProps> = ({
    link,
    title,
    description,
    imageThumb,
    author,
    pubDate,
    tags,
    ...rest
}) => {
    // If there is no title and image, return null
    if (!title && !imageThumb) {
        return null;
    }

    return (
        <S.PostCardStyled {...rest} href={link}>
            {imageThumb && (
                <S.PostCardFigure>
                    <Image
                        src={imageThumb.url}
                        alt={imageThumb.alt}
                        width={400}
                        height={380}
                    />
                </S.PostCardFigure>
            )}
            {tags && tags.length > 0 && (
                <S.PostCardTags>
                    {tags.map((tag, index) => (
                        <S.PostCardTag key={index}>{tag}</S.PostCardTag>
                    ))}
                </S.PostCardTags>
            )}
            {title && <S.PostCardTitle>{title}</S.PostCardTitle>}
            {description && (
                <S.PostCardDescription>{description}</S.PostCardDescription>
            )}
        </S.PostCardStyled>
    );
};
