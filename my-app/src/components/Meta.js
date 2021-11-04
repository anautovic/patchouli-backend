import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
      <meta property="og:image" content=" https://res.cloudinary.com/wil/image/upload/v1636025440/consultation_gratute_dw6gtd.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Venez découvrir l'institut de beauté patchouli pour prendre soin de vous mais aussi pour faire votre shopping nous sommes à Bonamoussadi antenne kotto.Centre de formation en esthetique,cosmetique,manicure à douala" />
      <meta property="og:url" content="https://www.institutpatchouli.org" />
      <meta property="og:title" content="Institut de beaute patchouli | centre de formation esthetique, cosmetique bonamoussadi|Douala " />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: "Institut de beauté Patchouli | Bonamoussadi | Douala",
  description:" Venez découvrir l'institut de beauté patchouli pour prendre soin de vous mais aussi pour faire votre shopping nous sommes à Bonamoussadi antenne kotto.Centre de formation en esthetique,cosmetique,manicure à douala",
  keywords: 'Institut de beauté patchouli, make-up , massage, pose ongles, Antenne kotto, patchouli, institut patchouli, centre de formation à douala bonamoussadi, ' ,
}

export default Meta