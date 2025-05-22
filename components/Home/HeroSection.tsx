import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
// import { NETWORKING_LINKS } from "@/constants";
import NetworkingButton from "./NetworkingButton";
import { Avatar } from "@mui/material";
import Image from "next/image";
// import { HeroCircle } from "./HeroCircle";

const NETWORKING_BUTTONS = [
	// {
	// 	icon: <Github strokeWidth={1.75} className="w-8 h-8" />,
	// 	...NETWORKING_LINKS[0]
	// },
	// {
	// 	icon: <Linkedin strokeWidth={1.75} className="w-8 h-8" />,
	// 	...NETWORKING_LINKS[1]
	// },
	// {
	// 	icon: <Mail strokeWidth={1.75} className="w-8 h-8" />,
	// 	...NETWORKING_LINKS[2]
	// }
	/*   {
    icon: <FileText strokeWidth={1.75} className="w-8 h-8" />,
    ...NETWORKING_LINKS[3],
  }, */
];

export function HeroSection() {
	return (
		<div className="relative flex items-center">
			<div className="relative z-10 w-full max-[24rem]:max-w-[16rem] max-[25rem]:max-w-[18rem] max-[27rem]:max-w-[23rem] sm:max-w-6xl sm:mx-auto px-0 sm:px-6 py-1 sm:py-12 lg:py-12 xl:py-16 2xl:py-20">
				<div className="grid lg:grid-cols-5 gap-12 items-center">
					<div className="lg:col-span-3">
						<div className="space-y-3 md:space-y-5">
							<h1 className="max-[22rem]:text-5xl text-6xl font-bold bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent tracking-wide">
								Choi <br className="inline min-[27rem]:hidden" />
								Sun-Been
							</h1>
							<h1 className="max-[22rem]:text-4xl text-4xl font-bold bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent tracking-wide">
								최선빈
							</h1>
							<h2 className="text-2xl text-gray-200 tracking-wide font-medium">
								Software Developer & <br className="inline min-[27rem]:hidden" />
								Devops Engineer
							</h2>
							<p className="text-gray-200 text-lg min-[27rem]:text-xl font-light leading-relaxed md:leading-[1.75] max-w-2xl">
								<br />
								복잡한 시스템을 이해하고, 더 나은 구조로 재구성하는 것을 즐깁니다.
								<br />
								저는 “작동하는 것”보다 “잘 작동하는 것”에 집중합니다.
								<br />
								<br />
								정리한 문서와 프로젝트들을 통해
								<br />
								제가 어떤 방식으로 일하고 생각하는지 보여드리겠습니다.
							</p>
							<div className="pt-1 flex space-x-4">
								{/* {NETWORKING_BUTTONS.map((button, index) => (
                  <NetworkingButton key={index} {...button} />
                ))} */}
							</div>
						</div>
					</div>
					<div className="hidden xl:flex lg:col-span-2 relative">
						<Image
							src="/MyProfile.jpg"
							alt="Profile"
							width={"300"}
							height={"300"}
							className="brightness-125 rounded-full md:h-[20rem] md:w-[20rem] xl:h-[25rem] xl:w-[25rem] object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
