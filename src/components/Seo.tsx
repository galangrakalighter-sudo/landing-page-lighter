import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

const SEO = ({ title, description, path }: SEOProps) => {
  const baseUrl = "https://lightermedia.id"; // Ganti dengan domain asli Anda
  const fullTitle = `${title} | Lighter Media Group`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${baseUrl}${path}`} />
      
      {/* Open Graph untuk Social Media */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${baseUrl}${path}`} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;