import React from "react";
import { motion } from "framer-motion";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { SelectedPage } from "../shared/enumPage";
import Htext from "../shared/Htext";
import { benefitsDataType } from "../shared/typeAndInterface";
import BenefitsCardComponent from "../shared/benefitsCard";
import ActionButton from "../shared/actionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const dataBenefits: Array<benefitsDataType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of The Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex debitis alias corrupti hic incidunt at officiis, nobis qui neque molestiae, nisi sunt nemo quaerat suscipit quasi! Laborum animi labore velit?",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Divers Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex debitis alias corrupti hic incidunt at officiis, nobis qui neque molestiae, nisi sunt nemo quaerat suscipit quasi! Laborum animi labore velit?",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex debitis alias corrupti hic incidunt at officiis, nobis qui neque molestiae, nisi sunt nemo quaerat suscipit quasi! Laborum animi labore velit?",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChilder: 0.2 },
  },
};

const BenefitsComponent = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={SelectedPage.Benefits}
      className="mx-auto min-h-full w-5/6 py-20 md:mt-32"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
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
          <Htext>MORE THAN JUST A GYM</Htext>
          <p className="my-5 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            similique architecto officia minus delectus, facere incidunt quos ut
            minima molestiae temporibus natus impedit magni id repellendus a
            labore et. Minima?
          </p>
        </motion.div>

        {/* benefits card */}
        <motion.div
          className=" mt-5 md:flex items-center justify-between gap-8 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {dataBenefits.map((value: benefitsDataType) => (
            <BenefitsCardComponent
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* graphic and description */}

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* image */}
          <img
            src={BenefitsPageGraphic}
            alt="benfits-image"
            className="mx-auto"
          />
          {/* description */}
          <div>
            {/* title */}
            <div className="relative mt-16">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves ">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    MILIION OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>

            {/* main descrip */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                iure dolor natus aliquam eligendi iste molestias quae fugit
                omnis, eveniet illo! Aut, dignissimos optio. Totam rem fugit
                magnam minus numquam!
              </p>
              <p className="mb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, alias maxime ratione tenetur accusantium ea libero aut
                nam ipsam corrupti quis earum voluptatum numquam laboriosam
                atque. Labore, ad consectetur! Voluptatem?
              </p>
            </motion.div>

            {/* button */}

            <div className="relative mt-16 ">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <ActionButton
                    setSelectedPage={setSelectedPage}
                    pageName={SelectedPage.Benefits}
                  >
                    Join Now
                  </ActionButton>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BenefitsComponent;
