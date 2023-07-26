import { AdvantageType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Header from "@/shared/Header";
import Advantage from "./Advantage";
import ActionButton from "@/shared/ActionButton";
import BenefitPage from "@/assets/BenefitPage.png";

const advantages: Array<AdvantageType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "HƏRTƏRƏFLİ İNKİŞAF İMKANLARI",
    description:
      "Mərkəzin maddi-texniki bazası, infrastrukturu, əyani vəsaitlər, tədris və texniki avadanlıqlarla təchizatı və təşkil olunmuş əlavə dəstək xidmətləri təlim-tərbiyə və tədris prosesinin şagirdlərin fiziki, sosial, emosional və zehni yöndən hərtərəfli inkişafını təmin edəcək formada qurulması üçün əlverişli imkanlar yaradır.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "FƏRDİ YANAŞMA",
    description:
      "Mərkəzdə mənimsənilən şagirdyönümlü tədris fəlsəfəsi, tətbiq olunan kiçik sinif qrupları konsepti və istifadə olunan Fərdi Şagird Profili və Fərdi Nailiyyət Hədəfləri kimi alətlər vasitəsilə təhsilin bütün mərhələlərində şagirdlərə fərdi yanaşma göstərir və onlara potensiallarından tam istifadə etmə imkanı yaradırıq.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "ÖZÜNƏMƏXSUS TƏDRİS MODELİ",
    description:
      "Gələcəyə baxışımız, missiyamız, aktual qlobal trendlər, şagirdlərimizin öyrənmə ehtiyacları və Azərbaycanın coğrafi və sosioloji xüsusiyyətləri nəzərə alınmaqla edilən əlavələr təhsil modelimizin əsasında duran Milli və tanınmış beynəlxalq təhsil proqramlarına özünəməxsusluq qazandırmışdır.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Advantages = ({ setSelectedPage }: Props) => {
  return (
    <section id="haqqımızda" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Advantages)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Header>XOŞBƏXT VƏ PARLAQ GƏLƏCƏYƏ APARAN TƏHSİL</Header>
          <p className="my-5 text-sm">
            Şagirdlərimiz həyata hazırlıq dövrünün əsas mərhələləri boyunca
            (3-17 yaş) dəstəkləyici bir mühitdə yüksək akademik nailiyyətlər və
            hərtərəfli inkişaf imkanı əldə edərək gələcəyin potensial
            liderlərinə çevrilirlər.
          </p>
        </motion.div>
        {/* ADVANTAGES */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {advantages.map((advantage: AdvantageType) => (
            <Advantage
              key={advantage.title}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* IMAGE AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* IMAGE */}
          <img className="mx-auto" src={BenefitPage} alt="benefit-page" />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div
                className="before:absolute before:-top-20 before:-left-20 
              before:z-[1] before:content-arrow"
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Header>
                    Ali məktəblərə qəbul faizimizdə rekord nəticə{" "}
                    <span className="text-primary-300">93%</span>
                  </Header>
                </motion.div>
              </div>
            </div>
            {/* TEXT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                2021-2022-ci tədris ilində "Edu Life Mərkəzi" olaraq ali
                məktəblərə qəbul olan abituriyentlərimizin 93%-i Dövlət
                universitetlərinə qəbul olmuşdur. Bu nəticə ilə əvvəlki
                illərdəki nəticələrimizi keçərək rekord göstəriciyə imza
                atmışıq. Tələbə adını qazanan abituriyentlərimizi təbrik edir,
                universitet həyatında uğurlar arzulayırıq.
              </p>
              <p className="mb-5">
                Şagirdlərimizin məktəb yaşlarından gələcək universitet və peşə
                seçimi ilə bağlı müvafiq ixtisaslaşma və kvalifikasiyalar əldə
                etməsi üçün əlavə ixtisaslaşma, sertifikat və kvalifikasiya
                proqramları da Mərkəzin tədris modelinə daxil edilmişdir.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div
                className="before:absolute before:-bottom-10 before:left-60 before:z-[1]
              before:content-geo"
              >
                <ActionButton setSelectedPage={setSelectedPage}>
                  İndi Müraciət Et
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Advantages;
