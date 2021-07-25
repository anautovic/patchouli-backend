import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
      <link rel="canonical" href="http://www.institutpatchouli.org" />

    </Helmet>
  )
}

Meta.defaultProps = {
  title: "Institut de beauté patchouli-Douala-Bonamoussadi",
  description: "Pour toutes vos tresses ( rasta, passe-meches, etc .) Venez découvrir l'institut de beauté Patchouli pour prendre soin de vous mais aussi pour faire votre shopping près de chez vous à prix discount",
  keywords: 'Institut de beauté patchouli, antenne kotto, Pédicure, Hammam, Make up, Manicure, massage, institut, béauté ',
}

export default Meta