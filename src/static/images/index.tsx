import { type FC } from "react";
import PreviewPng from "./preview.webp";
import HeroImg from "./hero-img.webp";
import Logo from "./logo.webp";

import HeroSlider1 from "./beast/hero-slider-beast.jpg";
import HeroSlider2 from "./beast/hero-slider-vaporesso.jpg";
import HeroSlider3 from "./beast/hero-slider-voopoo.jpg";
import HeroSliderVaporesso from "./beast/hero-slider-vaporesso.jpg";

// import VooPooListPage from "./beast/hero-slider-voopoo-list.jpg";
//
import VooPooListPage from "./vaporesso-brandpage-sample.png";
import VooPooListPageTop from "./vaporesso-brandpage-sample.png";

import VaporessoListPage from "./beast/hero-slider-vaporesso.jpg";
//import VaporessoListPageTop from "./beast/hero-slider-vaporesso.jpg";
import VaporessoListPageTop from "./vaporesso-brandpage-sample2.png";

import InfiniteImg1 from "./infinite-img-1.webp";
import InfiniteImg2 from "./infinite-img-2.webp";

export const images = {
    preview: PreviewPng,
    heroImg: HeroImg,
    logo: Logo,
};

export type ImageProps = {
    srcLocal?: keyof typeof images;
    src?: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    loading?: "lazy" | "eager";
};

/**
 * @example
 * <Image src="logo" alt="logo" width="50px" height="50px" />
 */
export const Image: FC<ImageProps> = ({
    alt,
    srcLocal,
    height,
    width,
    src,
    loading,
    ...rest
}) => {
    /**
     * If srcLocal or src is not provided throw an error
     */
    if (!srcLocal && !src) {
        throw new Error("srcLocal or src is required");
    }

    /**
     * this component should be able to use local images or images from external sources
     */
    const image = srcLocal ? images[srcLocal] : { src, width, height };

    return (
        <img
            src={image.src}
            alt={alt}
            width={width ? width : image.width}
            height={height ? height : image.height}
            loading={loading}
            {...rest}
        />
    );
};

// default export of the images
export {
    PreviewPng,
    HeroSlider1,
    HeroSlider2,
    HeroSlider3,
    InfiniteImg1,
    InfiniteImg2,
    VooPooListPage,
    VooPooListPageTop,
    VaporessoListPage,
    VaporessoListPageTop,
    HeroSliderVaporesso,
};
