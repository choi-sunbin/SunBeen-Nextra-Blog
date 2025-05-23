import { Skill } from "@/constants";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function SkillsTab({ skills }: { skills: Skill[] }) {
	const categories = Array.from(new Set(skills.map((skill) => skill.category)));

	return (
		<Tabs defaultValue={categories[0]} className="bg-grey-d pb-8 rounded-lg">
			<TabsList className="grid grid-cols-3 sm:flex mb-16 sm:mb-4 w-full bg-grey-d rounded-none justify-start">
				{categories.map((category) => (
					<TabsTrigger
						key={`trigger-${category}`}
						value={category}
						className="w-full bg-grey-d underline underline-offset-4 cursor-pointer"
					>
						{category}
					</TabsTrigger>
				))}
			</TabsList>
			{categories.map((category) => (
				<TabsContent key={`tab-${category}`} value={category}>
					<div className="flex gap-x-2 sm:gap-x-4 gap-y-0 flex-wrap sm:px-4">
						{skills
							.filter((skill) => skill.category === category)
							.map((skill, index) => (
								<div
									key={index}
									className="text-lg sm:text-xl font-content font-semibold p-3 text-gray-200 inline-flex items-center gap-2 filter grayscale-0 hover:grayscale cursor-pointer transition-all duration-300"
								>
									<Image src={skill.img} alt={skill.name} width="32" height="32" />
									{skill.name}
								</div>
							))}
					</div>
				</TabsContent>
			))}
		</Tabs>
	);
}
