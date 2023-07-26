import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePage from "@/assets/HomePage.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import dma from "@/assets/dma.png"
import rinn from "@/assets/rinn.png"
import ada from "@/assets/ada.png"
import tehsil from "@/assets/tehsil-assosiasiyasi.png"
import idda from "@/assets/idda.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="əsassəhifə"
      className="gap-16 bg-primary-100 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE - MAIN */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADING */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div
                className="before:absolute before:-top-24 before:-left-20 before:z-[-1]
                        md:before:content-edutext"
              >
                <h1 className="text-7xl font-semibold text-secondary-100 md:text-8xl">
                  EDULIFE
                </h1>
                <p className="text-4xl font-light md:text-5xl ">
                  Mükəmməl milli təhsil amalımızdır!
                </p>
              </div>
            </div>
            <p className="mt-8 text-sm">
              Milli dəyərlərə və beynəlxalq standartlara əsaslanan Edulife Təhsil
              Şirkəti lisey, abituriyent, bağça, məktəbəqədər təhsil, xaricdə
              təhsil, xarici dillərin tədrisi və s. məhsullar ilə 2007-ci ildən
              bəri xidmətinizdədir.
            </p>
          </motion.div>
          {/* BUTTONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
            Bizə yazın
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline transition
                        duration-300 hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Daha ətraflı</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div
          className="mt-10 flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end 
            "
        >
          <img src={HomePage} alt="home-image" />
        </div>
      </motion.div>
      {/* UNIVERSITIES */}
      {isAboveMediumScreen && (
        <div className="h-[160px] w-full bg-secondary-500">
          <div className="mx-auto w-5/6">
            <div className="flex items-center justify-between gap-8 py-10">
              <img src={dma} alt="harvard" className="w-[8%]" />
              <img src={rinn} alt="princeton" className="w-[8%]" />
              <img src={ada} alt="standford"  className="w-[8%]" />
              <img src={tehsil} alt="oxford"  className="w-[10%]" />
              <img src={idda} alt="edinburgh"  className="w-[8%]" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
