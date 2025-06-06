import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType3 from "../../components/PropertyCardType3";
import CustomModal from "../../components/CustomModal";
import { Helmet } from "react-helmet";
import HeroType2 from "../../components/HeroType2";

const ListEscolesSept: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalPdfUrl, setModalPdfUrl] = useState("");

  const handleOpenModal = (title: string, images: string[], pdfUrl: string) => {
    setModalTitle(title);
    setModalImages(images);
    setModalPdfUrl(pdfUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const properties = [
    {
      title: "1r 1a",
      surface: "50 m²",
      bedrooms: 1,
      bathrooms: 1,
      amenities: ["parking"],
      status: "Llista d'espera",
      image: "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/EscSept1-1/salo-escola-sept-1-1.webp",
      galleryImages: ["https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/EscSept1-1/salo-escola-sept-1-1.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/EscSept1-1/habitacio-1-1-Escoles-7-andorra.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/EscSept1-1/habitacio1-1-1-Escoles-7-andorra.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/EscSept1-1/bany-1-1-Escola-7.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/EscSept1-1/sala-de-estar-1-1-Escola-7.webp",],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/32/dossier-escoles-sept-1-1.pdf",
    },
    {
      title: "1r 2a",
      surface: "50 m²",
      bedrooms: 2,
      bathrooms: 1,
      amenities: ["parking"],
      status: "Llista d'espera",
      image: "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Escoles%20Sept/Escoles%20Sept/EscSept1-2/terrasa-1-2-Escoles-7-Andorra.webp",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/33/dossier-escoles-sept-1-2.pdf",
    },
    {
      title: "2n 1a",
      surface: "50 m²",
      bedrooms: 1,
      bathrooms: 1,
      amenities: ["parking"],
      status: "Llista d'espera",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/34/dossier-escoles-sept-2-1.pdf",
    },
    {
      title: "2n 2a",
      surface: "50 m²",
      bedrooms: 2,
      bathrooms: 1,
      amenities: ["parking"],
      status: "Llista d'espera",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/35/dossier-escoles-sept-2-2.pdf",
    },
    {
      title: "3r 1a",
      surface: "50 m²",
      bedrooms: 1,
      bathrooms: 1,
      amenities: ["parking"],
      status: "Llista d'espera",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/36/dossier-escoles-sept-3-1.pdf",
    },
    {
      title: "3r 2a",
      surface: "50 m²",
      bedrooms: 2,
      bathrooms: 1,
      amenities: ["parking"],
      status: "Llista d'espera",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/37/dossier-escoles-sept-3-2.pdf",
    },
    {
      title: "4r 1a",
      surface: "50 m²",
      bedrooms: 1,
      bathrooms: 1,
      amenities: ["parking"],
      status: "Llista d'espera",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/38/dossier-escoles-sept-4-1.pdf",
    },
    {
      title: "4r 2a",
      surface: "50 m²",
      bedrooms: 2,
      bathrooms: 1,
      amenities: ["parking"],
      status: "Llista d'espera",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/39/dossier-escoles-sept-4-2.pdf",
    },
    {
      title: "5r 1a",
      surface: "50 m²",
      bedrooms: 1,
      bathrooms: 1,
      amenities: ["parking"],
      status: "Llista d'espera",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/40/dossier-escoles-sept-5-1.pdf",
    },
    {
      title: "5r 2a",
      surface: "50 m²",
      bedrooms: 2,
      bathrooms: 1,
      amenities: ["parking"],
      status: "Llista d'espera",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/41/dossier-escoles-sept-5-2.pdf",
    },
    {
      title: "Àtic",
      surface: "62 m²",
      bedrooms: 1,
      bathrooms: 1,
      amenities: ["parking"],
      status: "Properament",
      image: "/images/placeholder.jpg",
      galleryImages: ["https://via.placeholder.com/600x400"],
      brochureUrl:
        "https://quetx.net/imatges/projecteVivenda/42/dossier-escoles-sept-atic.pdf",
    },
  ];

  return (
    <DefaultLayout
      title="Llista de béns - Escoles Sept"
      description="Descobreix els béns disponibles al projecte Escoles Sept."
    >
      <HeroType2
        backgroundImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/escoles-7-obra-samantha-bosque.webp"
        title="Escoles Sept"
        subtitle="Descobreix totes les vivendes disponibles"
        alt="Edifici Escoles Sept a Andorra"
      />
      <Helmet>
        <title>Llista de béns - Escoles Sept</title>
        <meta
          name="description"
          content="Descobreix els béns disponibles al projecte Escoles Sept, un habitatge únic al cor de Sant Julià de Lòria."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://acdinvest.ad/zones/escolessept/llista" />
      </Helmet>
      <h1 className="page-title">Béns disponibles – Escoles Sept</h1>
      {properties.map((property, index) => (
        <PropertyCardType3
          key={index}
          title={property.title}
          image={property.image || property.galleryImages[0]}
          caracteristics={[
            property.surface,
            `${property.bedrooms} habitacions`,
            `${property.bathrooms} banys`,
          ]}
          amenities={property.amenities}
          status={property.status}
          reverse={index % 2 === 1}
          onViewGallery={() =>
            handleOpenModal(
              property.title,
              property.galleryImages,
              property.brochureUrl
            )
          }
        />
      ))}
      {isModalOpen && (
        <CustomModal
          title={modalTitle}
          images={modalImages}
          pdfUrl={modalPdfUrl}
          onActionClick={() => {}}
          onClose={handleCloseModal}
        />
      )}
    </DefaultLayout>
  );
};

export default ListEscolesSept;
