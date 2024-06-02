import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { GitGlobe } from "./ui/GitGlobe";
import { Connect } from "./ui/Connect";
import Image from "next/image";
import TechIcons from "./ui/techstack";

export function Grid() {
  return (
    <BentoGrid className="w-full mx-auto min-h-screen">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          icon={item.icon}
          className={item.className? item.className : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    icon: <GitGlobe />,
    className: "md:col-span-2 row-span-2 "
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-3 md:row-span-1 p-4"
  },
  {
    icon: <Connect  />,
    className: "md:col-span-3 md:row-span-1"
  },
  {
    title: "Tech Stack",
    icon: <TechIcons />,
    className : "md:col-span-3 md:row-span-1 p-4"
  },
  {
    title: "Tensorflow Certified Developer",
    description: "Join the quest for understanding and enlightenment.",
    icon: <Image src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/104948593" alt="Tensorflow Credentials" width={480} height={480}/>,
    className : "md:col-span-2 md:row-span-1 p-4"
  },

];
