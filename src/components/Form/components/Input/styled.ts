import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

const defaultInputStyles = css`
    padding: 10px 0;
    border: none;
    width: 100%;
    margin-bottom: 10px;
    box-sizing: border-box;
    background: transparent;
    border-bottom: 1px solid ${Theme.secondary};
    transition: border-color 0.3s;
    letter-spacing: 1px;
    color: ${Theme.secondary};

    ${MediaQuery.max("lg")} {
        margin-bottom: 0;
    }

    &:focus,
    &:active {
        outline: none;
    }

    &::placeholder {
        color: ${Theme.secondary};
    }
`;

export const InputWrapper = styled.div<{
    $error?: boolean;
}>`
    margin: 30px 0;

    ${(props) =>
        props.$error &&
        css`
            input,
            textarea {
                border-color: red;
            }

            p {
                color: red;
            }
        `}
`;

export const InputStyled = styled.input`
    ${defaultInputStyles}
`;

export const InputTextAreaStyled = styled.textarea`
    ${defaultInputStyles};

    resize: none;
    min-height: 90px;
`;
