import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: "Bienvenu à l'institut patchouli",
  description: "Pour toutes vos tresses ( rasta, passe-meches, etc .) Venez découvrir l'institut de beauté Patchouli pour prendre soin de vous mais aussi pour faire votre shopping près de chez vous à prix discount",
  keywords: 'Pédicure, Hammam, Make up, Manicure, massage, rasta passe-meches',
}

export default Meta