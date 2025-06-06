import React, { useState } from "react";
import { Helmet } from "react-helmet";
import DefaultLayout from "../../layouts/DefaultLayout";
import PropertyCardType3 from "../../components/PropertyCardType3";
import CustomModal from "../../components/CustomModal";
import HeroType2 from "../../components/HeroType2";

const ListPlanaDelBou: React.FC = () => {
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
      title="Llista de propietats - Plana del Bou"
      description="Descobreix les propietats disponibles al projecte Plana del Bou, un espai residencial integrat a la natura."
    >
      <HeroType2
        backgroundImage="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/resort-plana-del-bou.webp"
        title="Plana del Bou"
        subtitle="Descobreix totes les vivendes disponibles"
        alt="Edifici Plana del Bou a Sant Julià de Lòria, Andorra"
      />
      <Helmet>
        <title>Llista de propietats - Plana del Bou</title>
        <meta
          name="description"
          content="Descobreix les propietats exclusives del projecte Plana del Bou, envoltades de natura i tranquil·litat."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://acdinvest.ad/zones/planadelbou/llista" />
      </Helmet>

      <h1 className="page-title">Propietats disponibles – Plana del Bou</h1>
      {/* Llista de propietats */}
      <h2 style={{ textAlign: "center" }}>Resort</h2>
      <PropertyCardType3
        title="Aixartell"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Airxartell/BulkResizePhotos.com%20(4)AIRXARTELL/airxartell-salo-plana-del-bou-andorra.webp"
        caracteristics={["95m²", "2 Habitació", "2 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Aixartell",
            [
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Airxartell/BulkResizePhotos.com%20(4)AIRXARTELL/airxartell-salo-plana-del-bou-andorra.webp",

              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Airxartell/BulkResizePhotos.com%20(4)AIRXARTELL/1bany-airxartell-plana-del-bou-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Airxartell/BulkResizePhotos.com%20(4)AIRXARTELL/1MENJADORairxartell-plana-del-bou-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Airxartell/BulkResizePhotos.com%20(4)AIRXARTELL/1HABITACIO-NEN-airxartell-plana-del-bou-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Airxartell/BulkResizePhotos.com%20(4)AIRXARTELL/CUINA-airxartell-plana-del-bou-andorra.webp",
            ],
            "https://quetx.net/imatges/projecteVivenda/105/dossier-aixartell.pdf"
          )
        }
        reverse={false}
      />
      <PropertyCardType3
        title="Argüens"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-salo-vista-munatanya-plana-del-bou-fontaneda-andorra.webp"
        caracteristics={["95m²", "2 Habitació", "2 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Argüens, Arpiot, Esclop",
            [
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-salo-vista-munatanya-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-salo-vista-mezzanin-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-cuina-salo-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-salo-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-salo-escalera-vista-munatanya-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-mezzanin-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-habitacio1-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-habitacio1-porta-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-bany1-plana-del-bou-fontaneda-andorra.webp",
            ],
            "https://quetx.net/imatges/projecteVivenda/101/dossier-arguens.pdf"
          )
        }
        reverse={true}
      />
      <PropertyCardType3
        title="Arpiot"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arpiot/BulkResizePhotos.com%20(5)AIRPOT/arpiot-salo-vista-muntanya-plana-del-bou-fontaneda-andorra.webp"
        caracteristics={["95m²", "2 Habitació", "2 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Arpiot, Argüens, Esclop",
            [
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-salo-vista-munatanya-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-salo-vista-mezzanin-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-cuina-salo-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-salo-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-salo-escalera-vista-munatanya-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-mezzanin-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-habitacio1-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-habitacio1-porta-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-bany1-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arpiot/BulkResizePhotos.com%20(5)AIRPOT/arpiot-salo-vista-muntanya-plana-del-bou-fontaneda-andorra.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arpiot/BulkResizePhotos.com%20(5)AIRPOT/arpiot-salo-escala-plana-del-bou-fontaneda-andorra.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arpiot/BulkResizePhotos.com%20(5)AIRPOT/arpiot-salo-cuina-plana-del-bou-fontaneda-andorra.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arpiot/BulkResizePhotos.com%20(5)AIRPOT/arpiot-salo-habitacio1-finestra-plana-del-bou-fontaneda-andorra.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arpiot/BulkResizePhotos.com%20(5)AIRPOT/arpiot-salo-plana-del-bou-fontaneda-andorra.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arpiot/BulkResizePhotos.com%20(5)AIRPOT/arpiot-salo-habitacio2-plana-del-bou-fontaneda-andorra.webp",
            ],
            "https://quetx.net/imatges/projecteVivenda/103/dossier-arpiot.pdf"
          )
        }
        reverse={false}
      />
      <PropertyCardType3
        title="Cloc"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Cloc/BulkResizePhotos.com%20(14)CLOC1/Menjador-el-cloc-confort-i-calidesa-plana-del-bou.webp"
        caracteristics={["80m²", "2 Habitació", "2 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Cloc",
            [
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Cloc/BulkResizePhotos.com%20(14)CLOC1/Menjador-el-cloc-confort-i-calidesa-plana-del-bou.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Cloc/BulkResizePhotos.com%20(14)CLOC1/sala-de-vida-el-cloc-fontaneda.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Cloc/BulkResizePhotos.com%20(14)CLOC1/la-cuina-el-cloc-resort-plana-del-bou.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Cloc/BulkResizePhotos.com%20(14)CLOC1/terrassa-el-cloc-fontaneda.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Cloc/BulkResizePhotos.com%20(14)CLOC1/exterior-el-cloc.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Cloc/BulkResizePhotos.com%20(14)CLOC1/habitacio1-el-cloc.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Cloc/BulkResizePhotos.com%20(14)CLOC1/habitacio2-el-cloc.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Cloc/BulkResizePhotos.com%20(14)CLOC1/raco-de-llum-el-cloc.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Cloc/BulkResizePhotos.com%20(14)CLOC1/habitacio-viste-jardi.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Cloc/BulkResizePhotos.com%20(14)CLOC1/menjador-salo-llum-el-cloc.webp",
            ],
            "https://quetx.net/imatges/projecteVivenda/6/dossier-cloc.pdf"
          )
        }
        reverse={true}
      />
      <PropertyCardType3
        title="Esclop"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arpiot/BulkResizePhotos.com%20(5)AIRPOT/arpiot-salo-vista-muntanya-plana-del-bou-fontaneda-andorra.webp"
        caracteristics={["95m²", "2 Habitació", "2 Bany"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Esclop, Argüens, Arpiot",
            [
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-salo-vista-munatanya-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-salo-vista-mezzanin-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-cuina-salo-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-salo-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-salo-escalera-vista-munatanya-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-mezzanin-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-habitacio1-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-habitacio1-porta-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arguens/arguens-bany1-plana-del-bou-fontaneda-andorra.webp",
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arpiot/BulkResizePhotos.com%20(5)AIRPOT/arpiot-salo-vista-muntanya-plana-del-bou-fontaneda-andorra.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arpiot/BulkResizePhotos.com%20(5)AIRPOT/arpiot-salo-escala-plana-del-bou-fontaneda-andorra.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arpiot/BulkResizePhotos.com%20(5)AIRPOT/arpiot-salo-cuina-plana-del-bou-fontaneda-andorra.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arpiot/BulkResizePhotos.com%20(5)AIRPOT/arpiot-salo-habitacio1-finestra-plana-del-bou-fontaneda-andorra.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arpiot/BulkResizePhotos.com%20(5)AIRPOT/arpiot-salo-plana-del-bou-fontaneda-andorra.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Arpiot/BulkResizePhotos.com%20(5)AIRPOT/arpiot-salo-habitacio2-plana-del-bou-fontaneda-andorra.webp",
            ],
            "https://quetx.net/imatges/projecteVivenda/102/dossier-esclo.pdf"
          )
        }
        reverse={false}
      />
      <PropertyCardType3
        title="Estolador"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Estolador/BulkResizePhotos.com%20(6)ESTOLADOR1/menjador%202-viste-estolador.webp"
        caracteristics={["80m²", "2 Habitació", "2 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Estolador",
            [
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Estolador/BulkResizePhotos.com%20(6)ESTOLADOR1/menjador%202-viste-estolador.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Estolador/BulkResizePhotos.com%20(6)ESTOLADOR1/menjador-viste-mezzanin-estolador.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Estolador/BulkResizePhotos.com%20(6)ESTOLADOR1/dormitori1-estolador.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Estolador/BulkResizePhotos.com%20(6)ESTOLADOR1/dormitori-bany-estolador.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Estolador/BulkResizePhotos.com%20(6)ESTOLADOR1/habitacio%20petita%201-estolador.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Estolador/BulkResizePhotos.com%20(6)ESTOLADOR1/menjador-estolador.webp",
            ],
            "https://quetx.net/imatges/projecteVivenda/104/dossier-estolador.pdf"
          )
        }
        reverse={true}
      />
      <PropertyCardType3
        title="Taupa"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/Resot-plana-del-bou-400-400.webp"
        caracteristics={["95m²", "2 Habitació", "2 Bany"]}
        amenities={["Meublé", "Cheminée", "Chauffage individuel"]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Taupa",
            [
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/calma-a-la-vora.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/flor-jardi-resort.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/piscina-andorra-resort.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/raco-tranquil-jardi-residencial.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/flor-jardi-resort.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/bec-plana-del-bou-fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/borda-de-la-plana-fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/entrada-resort-plana-del-bou.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/jardi-etorn-plana-del-bou.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/bustia-residencial-luxe.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/sol-borda-plana-fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/terrasa-borda-plana-del-bou.webp",
            ],
            "https://quetx.net/imatges/projecteVivenda/102/dossier-esclo.pdf"
          )
        }
        reverse={false}
      />
      <PropertyCardType3
        title="Xut"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Xut/BulkResizePhotos.com%20(12)XUT5/Xut-exterior-plana-del-bou.webp"
        caracteristics={["80m²", "2 Habitació", "2 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Xut",
            [
             "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Xut/BulkResizePhotos.com%20(12)XUT5/Xut-exterior-plana-del-bou.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Xut/BulkResizePhotos.com%20(9)XUT3/salo-xut-fontaneda.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Xut/BulkResizePhotos.com%20(9)XUT3/IMG_20230330_130427.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Xut/BulkResizePhotos.com%20(9)XUT3/bany-habitacio-principal-viste-muntanya-xut-fontaneda.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Xut/BulkResizePhotos.com%20(9)XUT3/cheminea-habitacio-principale-xut-fontaneda.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Xut/BulkResizePhotos.com%20(9)XUT3/habitacio2-xut-fontaneda.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Xut/BulkResizePhotos.com%20(9)XUT3/habitacio1-xut-fontaneda.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Xut/BulkResizePhotos.com%20(9)XUT3/sala-de-estar-xut-fontaneda.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Xut/BulkResizePhotos.com%20(9)XUT3/cuina-xut.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Xut/BulkResizePhotos.com%20(9)XUT3/cuina-xut-fontaneda.webp",
            ],
            "https://quetx.net/imatges/projecteVivenda/107/dossier-xut.pdf"
          )
        }
        reverse={true}
      />
      <h2 style={{ textAlign: "center" }}>Beç</h2>
      <PropertyCardType3
        title="Moixo"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/bec-plana-del-bou-exterior.webp"
        caracteristics={["36m²", "1 Habitació", "1 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Moixo",
            [
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/calma-a-la-vora.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/flor-jardi-resort.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/piscina-andorra-resort.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/raco-tranquil-jardi-residencial.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/flor-jardi-resort.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/bec-plana-del-bou-fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/borda-de-la-plana-fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/entrada-resort-plana-del-bou.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/jardi-etorn-plana-del-bou.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/bustia-residencial-luxe.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/sol-borda-plana-fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/terrasa-borda-plana-del-bou.webp",
            ],
            "https://example.com/brochure-arguens.pdf"
          )
        }
        reverse={false}
      />
      <PropertyCardType3
        title="Orandeta"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/bec-plana-del-bou-exterior.webp"
        caracteristics={["36m²", "1 Habitació", "1 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "Orandeta",
            [
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/calma-a-la-vora.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/flor-jardi-resort.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/piscina-andorra-resort.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/raco-tranquil-jardi-residencial.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/flor-jardi-resort.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/bec-plana-del-bou-fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/borda-de-la-plana-fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/entrada-resort-plana-del-bou.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/jardi-etorn-plana-del-bou.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/bustia-residencial-luxe.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/sol-borda-plana-fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/terrasa-borda-plana-del-bou.webp",
            ],
            "https://example.com/brochure-arguens.pdf"
          )
        }
        reverse={true}
      />

      <h2 style={{ textAlign: "center" }}>Borda de la Plana</h2>

      <PropertyCardType3
        title="La Cort"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/sol-borda-plana-fontaneda.webp"
        caracteristics={["88m²", "1 Habitació", "1 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "La Cort",
            [
                "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/calma-a-la-vora.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/flor-jardi-resort.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/piscina-andorra-resort.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/raco-tranquil-jardi-residencial.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/flor-jardi-resort.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/bec-plana-del-bou-fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/borda-de-la-plana-fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/entrada-resort-plana-del-bou.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/jardi-etorn-plana-del-bou.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/BulkResizePhotos.com%20(15)ESPAISCOMMUN/bustia-residencial-luxe.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/sol-borda-plana-fontaneda.webp",
            "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouexterior/terrasa-borda-plana-del-bou.webp",
            ],
            "https://example.com/brochure-arguens.pdf"
          )
        }
        reverse={false}
      />

      <PropertyCardType3
        title="El Mallador"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Mallador/Mallador/BulkResizePhotos.comMallador2/Mallador-exterior-cal-bou.webp"
        caracteristics={["102m²", "2 Habitació", "2 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "El Mallador",
            [
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Mallador/Mallador/BulkResizePhotos.comMallador2/Mallador-exterior-cal-bou.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Mallador/Mallador/BulkResizePhotos.comMallador2/Mallador-sauna.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Mallador/Mallador/BulkResizePhotos.comMallador2/mallador-menjador.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Mallador/Mallador/BulkResizePhotos.comMallador2/mallador-dormitori.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Mallador/Mallador/BulkResizePhotos.comMallador2/mallador-vista%20-superior.webp",
            ],
            "https://quetx.net/imatges/projecteVivenda/11/dossier-mallador.pdf"
          )
        }
        reverse={true}
      />
      <PropertyCardType3
        title="El Paller"
        image="https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Paller/Paller/BulkResizePhotos.comPaller/sala-de-estar-paller.webp"
        caracteristics={["135m²", "2 Habitació", "3 Bany"]}
        amenities={[
          "Aparcament segons disponibilitat",
          "Traster segons disponibilitat",
          " Aigua termoelèctrica",
          " Llar de foc",
          "Jardí comunitari",
          "Pati privat",
          "Chauffage individuel",
        ]}
        status="Llista d'espera"
        onViewGallery={() =>
          handleOpenModal(
            "El Paller",
            [
              "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Paller/Paller/BulkResizePhotos.comPaller/sala-de-estar-paller.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Paller/Paller/BulkResizePhotos.comPaller/sala-paller.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Paller/Paller/BulkResizePhotos.comPaller/paller-vista-superior.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Paller/Paller/BulkResizePhotos.comPaller/mezzanin-paller.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Paller/Paller/BulkResizePhotos.comPaller/habitacio-paller.webp",
"https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Paller/Paller/BulkResizePhotos.comPaller/menjador-cuina-paller.webp",

            ],
            "https://quetx.net/imatges/projecteVivenda/10/dossier-paller.pdf"
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

export default ListPlanaDelBou;
