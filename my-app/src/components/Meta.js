import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
      <link rel="canonical" href="http://www.institutpatchouli.org//maboutique" />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: "Bienvenu à l'institut patchouli",
  description: 'Nous vendons aussi des produits ménagés et des lotions pour le corps',
  keywords: 'institut de beauté patchouli, make-up , massage, pose ongles',
}

export default Meta