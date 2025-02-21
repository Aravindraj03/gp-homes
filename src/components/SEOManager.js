import { Helmet } from "react-helmet";

function SEOManager({ metaTitle, metaDescription, canonical }) {
  return (
    <Helmet>     
       <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}

export default SEOManager;
