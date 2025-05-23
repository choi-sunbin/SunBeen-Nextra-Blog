import React from "react";
import SkillsCloud from "./SkillsCloud";
import SkillsTab from "./SkillsTab";
import { SKILLS } from "@/constants";

export function SkillsSection() {
	return (
		<div className="mt-12 lg:mb-4">
			<div className="max-[24rem]:max-w-[16rem] max-[25rem]:max-w-[18rem] max-[27rem]:max-w-[23rem] sm:max-w-6xl sm:mx-auto px-0 sm:px-6">
				<div className="relative flex gap-6">
					<div className="w-full xl:w-[66%] justify-center">
						<h2 className="text-4xl font-bold pb-5 bg-linear-to-r from-yellow-300 to-red-500 bg-clip-text text-transparent tracking-wide">
							기술 스택
						</h2>
						<SkillsTab skills={SKILLS}></SkillsTab>
					</div>
					<div className="hidden xl:block w-[30%] mx-auto justify-center">
						<SkillsCloud />
					</div>
				</div>
			</div>
		</div>
	);
}
