import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType3 from "../../components/PropertyCardType3";
import CustomModal from "../../components/CustomModal";
import { Helmet } from "react-helmet";
import HeroType2 from "../../components/HeroType2";

const ListEdelweiss: React.FC = () => {
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

  return (
    <DefaultLayout
      title="Liste des biens - Edelweiss"
      description="Découvrez les biens disponibles dans le projet Edelweiss, situés dans un cadre exceptionnel."
    >
      <HeroType2
        backgroundImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament.webp"
        title="Edelweiss"
        subtitle="Descobreix totes les vivendes disponibles"
        alt="Edifici Edelweiss a Andorra"
      />
      <Helmet>
        <title>Liste des biens - Edelweiss</title>
        <meta
          name="description"
          content="Découvrez les biens disponibles dans le projet Edelweiss, situés dans un cadre exceptionnel."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://acdinvest.ad/zones/edelweiss/llista" />
      </Helmet>

      <h1 className="page-title">Béns disponibles – Edelweiss</h1>
      {/* Liste de biens */}

      <PropertyCardType3
        title="Atic Edelweiss"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp"
        caracteristics={["183 m²", "3 habitacios", "3 banys", "àtic dúplex"]}
        amenities={["Vistes muntanya", "grans finestres", "acabats moderns"]}
        status="Disponible"
        onViewGallery={() =>
          handleOpenModal(
            "Atic Edelweiss",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://quetx.net/imatges/projecteVivenda/118/p4-p4-1-web.pdf"
          )
        }
        reverse={false}
      />

      <PropertyCardType3
        title="Plaça d'aparcament"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp"
        caracteristics={["80m²"]}
        amenities={["Meublé"]}
        status="Disponible"
        onViewGallery={() =>
          handleOpenModal(
            "Plaça d'aparcament",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://example.com/brochure-arguens.pdf"
          )
        }
        reverse={true}
      />

      <PropertyCardType3
        title="Edelweiss 1"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp"
        caracteristics={["100 m²", "3 habitacions", "2 banys"]}
        amenities={["parking", "terrassa"]}
        status="Disponible"
        onViewGallery={() => {}}
        reverse={false}
      />

      <h2 className="page-title">Dossier Edifici</h2>
      <PropertyCardType3
        title="Dossier Edifici"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/general/Properament400-400.webp"
        caracteristics={[
          "6 pisos de 2 habitacions de 56 m2",
          "7 places de pàrquing",
          "16 traters",
        ]}
        amenities={["Vistes muntanya", "grans finestres", "acabats moderns"]}
        status="Disponible"
        onViewGallery={() =>
          handleOpenModal(
            "Dossier Edifici",
            [
              "https://via.placeholder.com/600x400?text=Image1",
              "https://via.placeholder.com/600x400?text=Image2",
            ],
            "https://quetx.net/imatges/projecteVivenda/120/planols-x-web-2.pdf"
          )
        }
        reverse={false}
      />

      {/* Modale */}
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

export default ListEdelweiss;
