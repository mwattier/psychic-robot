import React, { type FC, useState, useEffect } from "react";

import * as S from "./styled";
import type { ImageProps } from "@static/images";

export type ParallaxImageProps = {
    image?: ImageProps["srcLocal"] | ImageProps["src"];
    content?: {
        title?: string;
        paragraph?: string;
    };
};

export const ParallaxImage: FC<ParallaxImageProps> = ({ image, content }) => {
    const [scrolledY, setScrolledY] = useState(0);

    // do not render this component if there is no image
    if (!content || !image) {
        return null;
    }

    /**
     * on IOS devices background-attachment: fixed; is not working
     * thats why its needed to use JS to create parallax effect
     */
    useEffect(() => {
        const handleScroll = () => {
            setScrolledY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <S.ParallaxImageStyled
            $bgImage={image}
            style={{ backgroundPosition: `left ${scrolledY}px` }}
        >
            {content.title && content.paragraph && (
                <S.ParallaxImageContent>
                    {content.title && <h1>{content.title}</h1>}
                    {content.paragraph && <p>{content.paragraph}</p>}
                </S.ParallaxImageContent>
            )}
        </S.ParallaxImageStyled>
    );
};
