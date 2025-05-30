import React from "react";
import { HeroSection } from "./HeroSection";
// import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { RoadMapSection } from "./RoadMapSection";
// import { ExperienceSection } from "./ExperienceSection";
// import { ContactSection } from "./ContactSection";

export function HomePage() {
	return (
		<div className={`min-h-screen bg-grey-d page container mx-auto`}>
			<HeroSection />
			<RoadMapSection />
			{/* <ExperienceSection /> */}
			<SkillsSection />
			{/* <ProjectsSection /> */}
			{/* <ContactSection /> */}
		</div>
	);
}
