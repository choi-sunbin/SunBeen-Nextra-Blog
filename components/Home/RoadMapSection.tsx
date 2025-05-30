import { Box } from "@mui/material";
import { ROAD_MAP } from "@/constants";

import React from "react";

export function RoadMapSection() {
	return (
		<div className="mt-12 lg:mb-4">
			<div className="max-[24rem]:max-w-[16rem] max-[25rem]:max-w-[18rem] max-[27rem]:max-w-[23rem] sm:max-w-6xl sm:mx-auto px-0 sm:px-6">
				<div className="relative flex gap-6">
					<div className="w-full xl:w-[100%] justify-center">
						<h2 className="text-4xl font-bold pb-5 bg-linear-to-r from-yellow-300 to-red-500 bg-clip-text text-transparent tracking-wide">
							학습 로드 맵
						</h2>
						<h3 className="text-2xl pb-4 font-medium">Devops & Infra 전환을 위한 로드맵</h3>
						{/* Road Map Description */}
						<div className="mb-6">
							<div className="flex mb-4">
								<Box
									sx={{
										mr: 2,
										height: 30,
										width: 30,
										bgcolor: "white",
										display: "inline-block",
										verticalAlign: "middle"
									}}
								/>
								<p className="text-2xl  font-medium">: 대기</p>
							</div>
							<div className="flex mb-4">
								<Box
									sx={{
										mr: 2,
										height: 30,
										width: 30,
										bgcolor: "orange",
										display: "inline-block",
										verticalAlign: "middle"
									}}
								/>
								<h3 className="text-2xl font-medium">: 진행</h3>
							</div>
							<div className="flex mb-4">
								<Box
									sx={{
										mr: 2,
										height: 30,
										width: 30,
										bgcolor: "lime",
										display: "inline-block",
										verticalAlign: "middle"
									}}
								/>
								<h3 className="text-2xl font-medium">: 완료</h3>
							</div>
						</div>
						{/* Road Map Progress */}
						<div className="flex items-center justify-center">
							<Box
								component="img"
								alt="temp"
								src="/assets/docker.svg"
								sx={{ width: 150, height: 150, objectFit: "contain", bgcolor: "orange", p: 2, borderRadius: 3 }}
							/>
							<Box
								component="img"
								alt="Arrow"
								src="/arrow-60.png"
								sx={{ width: 60, height: 60, objectFit: "contain", mr: 2, ml: 2 }}
							/>
							<Box
								component="img"
								alt="temp"
								src="/assets/jenkins.svg"
								sx={{ width: 150, height: 150, objectFit: "contain", bgcolor: "white", p: 2, borderRadius: 3 }}
							/>
							<Box
								component="img"
								alt="Arrow"
								src="/arrow-60.png"
								sx={{ width: 60, height: 60, objectFit: "contain", mr: 2, ml: 2 }}
							/>
							<Box
								component="img"
								alt="temp"
								src="/assets/kubernetes.svg"
								sx={{ width: 150, height: 150, objectFit: "contain", bgcolor: "white", p: 2, borderRadius: 3 }}
							/>
							<Box
								component="img"
								alt="Arrow"
								src="/arrow-60.png"
								sx={{ width: 60, height: 60, objectFit: "contain", mr: 2, ml: 2 }}
							/>
							<Box
								component="img"
								alt="temp"
								src="/assets/aws.svg"
								sx={{ width: 150, height: 150, objectFit: "contain", bgcolor: "white", p: 2, borderRadius: 3 }}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
