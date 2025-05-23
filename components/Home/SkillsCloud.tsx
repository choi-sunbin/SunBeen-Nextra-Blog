import { IconCloud } from "./IconCloud";
import { SKILLS } from "@/constants";

export default function SkillsCloud() {
  const images = SKILLS.map((skill) => skill.img);

  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden p-4 cursor-pointer">
      <IconCloud images={images} />
    </div>
  );
}
