import "../styles/globals.css";

import TypesafeI18n from "@/i18n/i18n-react";
import { Locales, Translation } from "@/i18n/i18n-types";
import { loadedLocales } from "@/i18n/i18n-util";
import { loadFormatters } from "@/i18n/i18n-util.sync";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  if (!pageProps.i18n) {
    return <Component {...pageProps} />;
  }

  const locale: Locales = pageProps.i18n.locale;
  const dictionary: Translation = pageProps.i18n.dictionary;

  loadedLocales[locale] = dictionary as Translation;
  loadFormatters(locale);
  return (
    <TypesafeI18n locale={locale}>
      {
        // @ts-ignore
        getLayout(<Component {...pageProps} />)
      }
    </TypesafeI18n>
  );
}

export default App;
