import React, {FunctionComponent} from "react"
import { injectIntl } from "gatsby-plugin-intl"
import SEO from "../components/seo"

interface RedirectProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intl: any,
}

const Redirect: FunctionComponent<RedirectProps> = ({ intl }) => {
  return <SEO title={`${intl.formatMessage({ id: "title" })}`} />
}

export default injectIntl(Redirect)