import React, { useState } from "react";
import { Helmet } from "react-helmet";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType3 from "../../components/PropertyCardType3";
import CustomModal from "../../components/CustomModal";
import HeroType2 from "../../components/HeroType2";

const ListEresDelPoble: React.FC = () => {
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
      title="Liste des biens - Eres del Poble"
      description="Découvrez les maisons rurales disponibles dans le projet Eres del Poble, au cœur du village de Fontaneda."
    >
      <HeroType2
        backgroundImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(18)ERADECALBOU2/Fontaneda-front.webp"
        title="Eres del Poble"
        subtitle="Descobreix totes les vivendes disponibles"
        alt="Edifici Eres del Poble a Fontaneda, Andorra"
      />
      <Helmet>
        <title>Liste des biens - Eres del Poble</title>
        <meta
          name="description"
          content="Descobreix les cases rurals disponibles al projecte Eres del Poble, al cor del poble de Fontaneda."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://acdinvest.ad/zones/eresdelpoble/llista" />
      </Helmet>

      <h1 className="page-title">Béns disponibles – Eres del Poble</h1>
      {/* Liste de biens */}

      <PropertyCardType3
        title="Era de Cal Bou"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(18)ERADECALBOU2/entrada-antic-era-cal-bou-fontaneda.webp"
        caracteristics={[
          "Arquitectura tradicional",
          "cases de pedra",
          "teulada de pissarra",
        ]}
        amenities={["Entorn natural", "restaurades amb comoditats modernes"]}
        status="Disponible"
        onViewGallery={() =>
          handleOpenModal(
            "Era de Cal Bou",
            [
             "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(18)ERADECALBOU2/entrada-antic-era-cal-bou-fontaneda.webp",
" https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(18)ERADECALBOU2/lluminos-sal-vista-muntanya-andorra.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(18)ERADECALBOU2/terrasa-sol-era-cal-bou-andorra.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(18)ERADECALBOU2/cuina-era-cal-bou.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(18)ERADECALBOU2/menjador-cuina-era-de-cal-bou.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(18)ERADECALBOU2/cheminea-era-de-cal-bou.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraDeCalBou/ERAdeCalBou/BulkResizePhotos.com%20(18)ERADECALBOU2/habitacio-era-de-cal-bou.webp",
            ],
            "https://example.com/brochure-arguens.pdf"
          )
        }
      />
      <PropertyCardType3
        title="Era de l'Ermita"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraErmita/EraErmita/BulkResizePhotos.com%20(20)ERAERMITA1.2/salo-era-ermita.webp"
        caracteristics={["120 m²", "4 habitacions", "3 banys"]}
        amenities={["jardí", "garatge"]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Era de l'Ermita",
            [
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraErmita/EraErmita/BulkResizePhotos.com%20(20)ERAERMITA1.2/menjador-era-ermita2.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraErmita/EraErmita/BulkResizePhotos.com%20(20)ERAERMITA1.2/cuina-era-ermita.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraErmita/EraErmita/BulkResizePhotos.com%20(20)ERAERMITA1.2/habitacio-era-ermita.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraErmita/EraErmita/BulkResizePhotos.com%20(20)ERAERMITA1.2/salo-era-ermita.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraErmita/EraErmita/BulkResizePhotos.com%20(20)ERAERMITA1.2/entra-era-ermita.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/EraErmita/EraErmita/BulkResizePhotos.com%20(20)ERAERMITA1.2/vista-superior-era-ermita.webp",
            ],
            "https://example.com/brochure-arguens.pdf"
          )
        }
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

export default ListEresDelPoble;
