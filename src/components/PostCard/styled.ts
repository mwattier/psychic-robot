import styled from "@emotion/styled";
import { Theme } from "@styles/colors";

export const PostCardStyled = styled.a`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: translateY(0);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-10px);
    }
`;

export const PostCardFigure = styled.figure`
    width: 100%;
    height: 250px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
`;

export const PostCardTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px 0;
`;

export const PostCardTag = styled.span`
    display: block;
    padding: 10px;
    font-size: 12px;
    line-height: 14px;
    color: ${Theme.primary};
    background: ${Theme.secondary};
    border-radius: 20px;
    min-width: 70px;
    text-align: center;
`;

export const PostCardTitle = styled.h3`
    font-size: 24px;
    line-height: 1.2;
    margin-bottom: 10px;
`;

export const PostCardDescription = styled.p`
    font-size: 14px;
    line-height: 1.2;
    opacity: 0.8;
`;

export const PostCardAuthorAvatar = styled.figure`
    display: flex;
    align-items: center;
    gap: 10px;
    border-top: 1px solid ${Theme.secondary};
    margin-top: 20px;
    padding-top: 20px;

    img {
        border-radius: 50%;
        width: 50px;
        height: 50px;

        object-fit: cover;
        border-radius: 50%;
    }
`;

export const PostCardAuthorInfo = styled.div`
    display: flex;
    flex-direction: column;

    p {
        line-height: 1.2;
        font-size: 14px;
    }

    p:first-of-type {
        font-weight: bold;
        margin-bottom: 0;
    }

    p:last-of-type {
        opacity: 0.8;
    }
`;

export const PostCardAuthorName = styled.span``;
