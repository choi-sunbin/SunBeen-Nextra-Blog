import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function NetworkingButton({
  icon,
  href,
  tooltip,
}: {
  icon: React.ReactNode;
  href: string;
  tooltip: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className="transition-colors p-3 bg-grey-l rounded-md hover:bg-[#444] text-gray-200"
            target="_blank"
          >
            {icon}
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
