import { Box } from "@mui/material";
import { ROAD_MAP } from "@/constants";

import React from "react";
import Image from "next/image";

// 상태 표시 타입
type Status = {
  label: string;
  color: string;
};

const STATUS_LIST: Status[] = [
  { label: "대기", color: "white" },
  { label: "진행", color: "orange" },
  { label: "완료", color: "lime" },
];

type ProgressStatus = "pending" | "progress" | "completed";

// 상태 → 색상 매핑
const ProgressColors: Record<ProgressStatus, string> = {
  pending: "white",
  progress: "orange",
  completed: "lime",
};

type TechStack = {
  name: string;
  icon: string;
  progress: string;
};

const TECH_STACK: TechStack[] = [
  { name: "Docker", icon: "/assets/docker.svg", progress: "progress" },
  { name: "Jenkins", icon: "/assets/jenkins.svg", progress: "pending" },
  { name: "Kubernetes", icon: "/assets/kubernetes.svg", progress: "pending" },
  { name: "AWS", icon: "/assets/aws.svg", progress: "pending" },
];

const StatusLegend = () => (
  <div className="mb-6 space-y-3">
    {STATUS_LIST.map((status) => (
      <div key={status.label} className="flex items-center">
        <Box
          sx={{
            width: 30,
            height: 30,
            bgcolor: status.color,
            marginRight: 2,
            border: "3px solid #000",
            borderRadius: "4px",
          }}
        />
        <span className="text-xl font-medium">: {status.label}</span>
      </div>
    ))}
  </div>
);

const RoadMapProgress = () => (
  <div className="flex items-center justify-center flex-wrap gap-4">
    {TECH_STACK.map((tech, index) => (
      <React.Fragment key={tech.name}>
        <Box
          sx={{
            width: 150,
            height: 150,
            backgroundColor: ProgressColors[tech.progress as ProgressStatus],
            padding: 2,
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "5px solid #000",
          }}
        >
          <Image src={tech.icon} alt={tech.name} width={80} height={100} style={{ objectFit: "contain", padding: 2 }} />
        </Box>
        {index < TECH_STACK.length - 1 && (
          <Image src="/arrow-60.png" alt="Arrow" width={60} height={60} className="mx-2" />
        )}
      </React.Fragment>
    ))}
  </div>
);

export function RoadMapSection() {
  return (
    <div className="mt-12 lg:mb-4">
      <div className="max-[24rem]:max-w-[16rem] max-[25rem]:max-w-[18rem] max-[27rem]:max-w-[23rem] sm:max-w-6xl sm:mx-auto px-0 sm:px-6">
        <div className="relative flex gap-6">
          <div className="w-full xl:w-[100%] justify-center text-gray-200">
            <h2 className="text-4xl font-bold pb-5 bg-linear-to-r from-yellow-300 to-red-500 bg-clip-text text-transparent tracking-wide">
              학습 로드 맵
            </h2>
            <h3 className="text-2xl pb-4 font-medium">Devops & Infra 전환을 위한 로드맵</h3>
            {/* Road Map Description */}
            <StatusLegend />
            {/* Road Map Progress */}
            <RoadMapProgress />
          </div>
        </div>
      </div>
    </div>
  );
}
