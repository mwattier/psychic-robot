import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { FadeInKeyframes } from "@utils/animations/styled";

export const SinglePostWrapper = styled.section`
    margin-top: -45px;
    margin-bottom: 90px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    padding-top: 50px;
    position: relative;
    z-index: 2;
    width: 100%;
    background-color: ${Theme.primary};
`;

export const SinglePostStyled = styled.article`
    animation: ${FadeInKeyframes} 0.5s;
    animation-delay: 0.2s;

    h1 {
        font-size: 60px;
        line-height: 1.2;
    }

    h2 {
        font-size: 40px;
        line-height: 1.2;
    }

    h3 {
        font-size: 30px;
        line-height: 1.2;
    }

    h4 {
        font-size: 24px;
        line-height: 1.2;
    }

    p {
        font-size: 18px;
        line-height: 1.5;
        margin-bottom: 20px;
    }

    img {
        width: 100%;
        height: auto;
        margin-bottom: 20px;
    }

    blockquote {
        font-size: 24px;
        line-height: 1.5;
        margin: 40px 0;
        padding: 20px;
        background: #f9f9f9;
        border-left: 5px solid #333;
    }

    ul:not([class]) {
        list-style: disc;
        margin-left: 20px;
    }

    ol {
        list-style: decimal;
        margin-left: 20px;
    }

    pre {
        background: #f9f9f9;
        padding: 20px;
        margin: 20px 0;
        overflow-x: auto;
    }

    a {
        color: #333;
        text-decoration: underline;
    }
`;

export const SinglePostMeta = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;

    p {
        margin-bottom: 0;
    }
`;

export const SinglePostMetaTags = styled.ul`
    display: flex;
    gap: 10px;
    padding: 0;
    margin: 0;
    list-style-type: none;
`;
