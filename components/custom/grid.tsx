import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { cn } from "@/lib/utils";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="z-10">
      {gridItems.map(({id, className, title, description, img, imgClassName, titleClassName, spareImg}) => (
        <BentoGridItem
          key={id}
          id={id}
          title={title}
          titleClassName={titleClassName}
          description={description}
          className={cn(className, id === 3 && "py-0 md:py-5")}
          img={img}
          imgClassName={imgClassName}
          spareImg={spareImg}
        />
      ))}
    </BentoGrid>
    </section>
  );
};

export default Grid;
