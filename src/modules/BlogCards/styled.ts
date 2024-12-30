import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const BlogCardsStyled = styled.section`
    margin: 100px 0;
    padding: 0 40px;

    ${MediaQuery.max("lg")} {
        margin: 60px 0;
        padding: 0 20px;
    }
`;

export const BlogCardsHeading = styled.div`
    color: ${Theme.tertiary};

    margin-bottom: 40px;

    p {
        text-transform: uppercase;
        color: ${Theme.tertiary};
    }

    h2 {
        font-size: 60px;
        line-height: 1.2;
        margin-bottom: 10px;

        ${MediaQuery.max("lg")} {
            font-size: 40px;
            line-height: 1.2;
        }
    }
`;

export const BlogCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    ${MediaQuery.max("lg")} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${MediaQuery.max("md")} {
        grid-template-columns: 1fr;
    }
`;
