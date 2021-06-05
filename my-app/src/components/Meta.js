import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
      <link rel="canonical" href="https://institutpatchouli.org/" />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: "Institut Patchouli | Bonamoussadi",
  description:" Venez découvrir l'institut de beauté patchouli pour prendre soin de vous mais aussi pour faire votre shopping nous sommes à Bonamoussadi antenne kotto",
  keywords: 'Institut de beauté patchouli, make-up , massage, pose ongles, Antenne kotto, patchouli, institut patchouli' ,
}

export default Meta