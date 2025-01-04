import { Metadata } from "next";

export const PRODUCT_PRICES = {
    material: {
        sillicone: 0,
        metal: 100_0,
        leather: 100_0,
        carbon_fiber: 150_0,
        polycarbonate: 50_0,
    },
    finish: {
        smooth: 0,
        textured: 50_0,
        matte: 100_0,
        glossy: 50_0,
        transparent: 75_0,
        frosted: 100_0,
        brushed: 100_0,
    },
} as const;

export const BASE_PRICE = 120_00;

export const SITE_CONFIG: Metadata = {
    title: {
        default: "ClickCase | Your Custom Phone Case Maker",
        template: `%s | ClickCase`,
    },
    description: "ClickCase is a custom phone case maker that allows you to create your own phone case with your own design.",
    icons: {
        icon: [
            {
                url: "/favicon.ico",
                href: "/favicon.ico",
            }
        ],
    },
    openGraph: {
        title: "ClickCase | Your Custom Phone Case Maker",
        description: "ClickCase is a custom phone case maker that allows you to create your own phone case with your own design.",
        images: [
            {
                url: "/og-image.png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "ClickCase - make your own phone case",
        description: "ClickCase is a custom phone case maker that allows you to create your own phone case with your own design.",
        images: [
            {
                url: "/og-image.png",
            },
        ],
    },
    metadataBase: new URL("https://clickcase.vercel.app"),
};
