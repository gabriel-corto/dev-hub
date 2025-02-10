import { MonitorSmartphone } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card";

export function ServiceCard() {
  return (
    <Card className="mt-3 w-80 max-lg:w-fit flex flex-col gap-1 justify-center">
      <CardHeader className="justify-between flex-col gap-3 max-lg:items-center max-lg:gap-1">
        <MonitorSmartphone className="h-20 w-20 text-emerald-500 max-lg:w-14 max-lg:h-14" />
        <CardTitle className="text-foreground/80">
          Desenvolvimento de UI
        </CardTitle>
      </CardHeader>

      <CardContent className="p">
        <CardDescription className="h-14 max-lg:text-center">
          Criar interfaces modernas, responsivas e funcionais garantindo uma
          experiência do utilizador de alta qualidade.
        </CardDescription>
      </CardContent>
    </Card>
  );
}
