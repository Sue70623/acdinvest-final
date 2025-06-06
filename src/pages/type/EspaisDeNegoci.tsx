import React from "react";
import { Helmet } from "react-helmet";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCard from "../../components/PropertyCard";
import "./typePages.css";

const EspaisDeNegoci = () => {
  return (
    <DefaultLayout
      title="Espais De Negoci"
      description="Descobreix espais de negoci adaptats a les teves necessitats professionals."
    >
      <Helmet>
        <title>Espais de Negoci - ACD Invest</title>
        <meta
          name="description"
          content="Découvrez nos espaces de travail et bureaux à Andorre."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://acdinvest.ad/espais-de-negoci" />
      </Helmet>
      <h1 className="type-page-title">ESPAIS DE NEGOCI</h1>
      <p className="type-page-description">
        Explora els nostres espais de negoci, pensats per impulsar el teu èxit
        empresarial en ubicacions estratègiques.
      </p>
      <PropertyCard
        mainImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp"
        mainImageAlt="Image principale de Plana Del Bou"
        thumbnails={[
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp",
          "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp",
        ]}
        thumbnailsAlt={[
          "Miniature 1 de Plana Del Bou",
          "Miniature 2 de Plana Del Bou",
        ]}
        zoneName="Properament"
        location="Properament"
        description="Properament"
        link="*"
      />

      <hr className="separator" />
    </DefaultLayout>
  );
};

export default EspaisDeNegoci;
