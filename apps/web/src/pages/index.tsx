import { GetServerSideProps } from "next";
import { Locales } from "@/i18n/i18n-types";
import { Button } from "ui";
import { loadLocaleAsync } from "@/i18n/i18n-util.async";
import { loadedLocales } from "@/i18n/i18n-util";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const locale = context.locale as Locales;
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
