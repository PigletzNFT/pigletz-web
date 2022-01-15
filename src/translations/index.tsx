import React, { PropsWithChildren, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import commonDe from "./de/common.json";
import commonEn from "./en/common.json";
import traitsEn from "./en/traits.json";
import aboutusEn from "./en/aboutus.json";
import termsOfUseEn from "./en/termsOfUse.json";

i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
        en: {
            common: commonEn,
            traits: traitsEn,
            team: aboutusEn,
            termsOfUse: termsOfUseEn,
        },
        de: {
            common: commonDe,
        },
    },
});

export const TranslationProvider = ({ children }: PropsWithChildren<ReactNode>): JSX.Element => {
    return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};
