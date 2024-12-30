import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";

export const PriceCardStyled = styled.div<{
    $bgImage: string;
}>`
    width: 100%;
    background: ${Theme.secondary};
    border-radius: 10px;
    padding: 50px 30px;

    color: ${Theme.primary};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        &:before {
            background: rgba(0, 0, 0, 0.2);
        }
    }

    ${({ $bgImage }) =>
        $bgImage &&
        css`
            background-image: url(${$bgImage});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

            position: relative;
            overflow: hidden;

            &:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                z-index: 1;
                transition: background 0.3s;
            }
        `}
`;

export const PriceCardTitle = styled.h2`
    margin-bottom: 30px;
    position: relative;
    z-index: 2;
`;

export const PriceCardPrice = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;

    h3 {
        font-size: 40px;
        line-height: 45px;
        margin-bottom: 10px;
    }

    span {
        opacity: 0.8;
    }
`;

export const PriceCardList = styled.ul`
    margin-top: 30px;
    padding: 0;
    list-style: none;
    position: relative;
    z-index: 2;

    li {
        font-size: 14px;
        line-height: 16px;

        display: flex;
        align-items: center;

        &:not(:last-child) {
            margin-bottom: 10px;
        }

        img {
            margin-right: 10px;
        }
    }
`;
