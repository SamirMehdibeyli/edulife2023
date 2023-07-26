import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Header from "@/shared/Header";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Boy ölçüləri ilə tənzimlənən partalar",
    description:
      "Böyük bir əraziyə malik olan təhsil müəssisəsinin ibtidai siniflər üçün olan korpusuna daxil olduq. Nəzarətçi bizi Sağlam təhsil sinfinin otaqlarına getməyə köməklik etdi. Hər sinif otağının qapısında Sağlam təhsil sinifinin loqosu və həmin sinifin şagirdlərinin fotosu asılmışdı. Siniflər içərisinə daxil olmamışdan bizdə maraq doğurmağa başladı desək yanılmarıq.",
    image: image1,
  },
  {
    name: "Küncsüz otaqlar",
    description:
      "Sinif otağı dairəvi və küncsüzdür, divarlarında ağac, çiçək, bulud təsvirləri əks olunub. Ellada müəllimə bunun səbəbini bizə belə izah etdi: Bu cür təsvirlər, otağın dördkünc olmaması uşaqların gözlərinin yorulmaması və özlərini qapalı, dar məkanda hiss etməməsi üçündür. Siniflərin belə dizayn olunması şagirdlərin fiziki və intellektual cəhətdən daha yaxşı inkişaf etməsinə, onların öyrənmə qabiliyyətinin inkişaf etməsinə səbəb olur.",
    image: image2,
  },
  {
    name: "Orta siniflər",
    description:
      "Kompleksin sinif otaqları müasir tələblərə uyğun, işıqlı, gigiyenik  və genişdir. Bütün siniflərdə kompüter və proyektorlar vardır ki, bunlar da müəllimlərə təlim prosesində İKT imkanlarından istifadə etməyə geniş imkanlar yaradır. Bir neçə sinif otaqlarında prometan lövhələr də quraşdırılmışdır.",
    image: image3,
  },
  {
    name: "Yuxarı siniflər",
    image: image4,
  },
  {
    name: "Səhər Dərsləri",
    image: image5,
  },
  {
    name: "Axşam Dərsləri",
    description:
      "Şagirdlərin “Hərtərəfli inkişaf proqramında” iştirakı könüllü seçim əsasında olsa belə, şagirdlərin inkişafını yaxından izləyən pedaqoq və psixoloqlar onları davamlı olaraq istiqamətləndirir və seçimlərində dəstək göstərir.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="dərsotaqlarımız" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Header>Sinif Otaqlarımız</Header>
            <p className="py-5">
              Kompleksdə laboratoriya otaqları da daxil olmaqla 32 sinif otağı
              vardır. Bu otaqlarda şagirdlər üçün hər cür şərait yaradılmışdır.
              Sinif otaqları müasir tələblərə uyğun, işıqlı, gigiyenik və
              genişdir. Bütün siniflərdə kompüter və proyektorlar vardır ki,
              bunlar da müəllimlərə təlim prosesində İKT imkanlarından istifadə
              etməyə geniş imkanlar yaradır. Bəzi sinif otaqlarında prometan
              lövhələr də quraşdırılmışdır.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
