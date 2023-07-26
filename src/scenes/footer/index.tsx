import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Dünya və Avropa təcrübəsindən yararlanaraq Azərbaycan təhsilində
            yüksək nailiyyətlər əldə etmək əsas prioritet məsələlərimizdən
            biridir. Mərkəzimizdə dərs deyən müəllim və idarə kollektivi
            təcrübəli, öz sahəsində peşəkar şəxslərdir.
          </p>
          <p>© 2023 Edulife Bütün hüquqlar qorunur</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">FİLİALLAR</h4>
          <p className="my-5">Bakı</p>
          <p className="my-5">Sumqayıt</p>
          <p>Gəncə</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="mt-16 basis-1/4 md:mt-0 font-bold">BİZİMLƏ ƏLAQƏ</h4>
          <p className="my-5"> Bakı şəhəri, Xocalı prospekti 86</p>
          <p>(99412) 515-15-05</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
