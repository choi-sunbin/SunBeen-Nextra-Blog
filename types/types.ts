export type ProgressStatus = "completed" | "progress" | "pending";

export interface MilestoneItem {
  name: string;
  icon: string;
  progress: ProgressStatus;
}

export interface MilestoneItemProps {
  stack: MilestoneItem[];
}
