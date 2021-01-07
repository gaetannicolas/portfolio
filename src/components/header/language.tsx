import React, { FunctionComponent } from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName:{[index: string]:string} = {
  fr: "fr",
  en: "en",
}

interface LanguageProps {
  languages: Array<string>;
  language: string;
}

const Language: FunctionComponent<{ styleClass: string }> = ({ styleClass }) => (
  <div className={styleClass}>
    <IntlContextConsumer>
      {
      ({ languages, language: currentLocale }: LanguageProps) =>
        languages.map((language: string) => (
          <button
            className={currentLocale === language ? 'language__selector  language__selector--active' : 'language__selector'}
            key={language}
            onClick={() => changeLocale(language)}
          >
            {languageName[language]}
          </button>
        ))
      }
    </IntlContextConsumer>
  </div>
)

export default Language