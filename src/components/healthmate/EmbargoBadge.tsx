
import { Badge } from "@/components/ui/badge";
import { ShieldAlert } from "lucide-react";

export function EmbargoBadge() {
  return (
    <Badge variant="destructive" className="flex items-center gap-1.5">
      <ShieldAlert className="h-3 w-3" />
      <span>Under Embargo</span>
    </Badge>
  );
}
