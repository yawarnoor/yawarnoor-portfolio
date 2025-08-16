import Chip from "./chip";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

interface ChipContainerProps {
  textArr: string[];
}

export default function ChipContainer({ textArr }: ChipContainerProps) {
  return (
    <div className="flex my-3 gap-2 flex-wrap">
      <TooltipProvider delayDuration={150}>
        {textArr.map((it, ind) => (
          <Tooltip key={ind}>
            <TooltipTrigger asChild>
              <div>
                <Chip content={it} />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{it}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}
