import { GetServerSideProps } from "next";
import { Locales } from "@/i18n/i18n-types";
import { Button } from "ui";
import { loadLocaleAsync } from "@/i18n/i18n-util.async";
import {baseLocale, loadedLocales} from "@/i18n/i18n-util";
import {useContext} from "react";
import {I18nContext} from "@/i18n/i18n-react";

export default function Web() {
  const { locale, LL, setLocale } = useContext(I18nContext);
  return (
    <div>
      <h1>Web</h1>
      {LL.HI({name: "project"})}
      <Button />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const locale = context.locale as Locales || baseLocale;
  await loadLocaleAsync(locale);

  return {
    props: {
      i18n: {
        locale: locale,
        dictionary: loadedLocales[locale],
      },
    },
  };
};
