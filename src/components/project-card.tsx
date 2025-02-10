import { Link2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";
import { DetailsModal } from "@/pages/screens/details-modal";

export function ProjectCard() {
  return (
    <Card className="mt-3 w-96 max-lg:w-fit">
      <CardHeader className="flex justify-between flex-col gap-3">
        <img
          className="w-full rounded-md overflow-hidden"
          src="/dt-money.png"
        />

        <CardTitle className="text-foreground/80">Título do Projecto</CardTitle>
      </CardHeader>

      <CardContent className="p">
        <CardDescription className="h-10">
          Aqui vai a descrição do projecto, essa descrição é de sua costumização
        </CardDescription>
      </CardContent>

      <CardFooter>
        <Button
          asChild
          className="bg-violet-600
         font-bold text-foreground hover:bg-violet-700 hover:text-foreground"
        >
          <Link to="">
            <Link2 className="w-4 h-4" />
            <span>Vizualizar Online</span>
          </Link>
        </Button>

        <DetailsModal />
      </CardFooter>
    </Card>
  );
}
