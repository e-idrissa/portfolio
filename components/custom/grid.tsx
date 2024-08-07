import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

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
          className={className}
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
