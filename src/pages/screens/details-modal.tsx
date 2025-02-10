import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircleIcon, Info, Link2 } from "lucide-react";
import { Link } from "react-router-dom";

export function DetailsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Info className="w-4 h-4s" />
          <span>detalhes</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>DT Money</DialogTitle>
          <DialogDescription>
            DT Money é uma aplicação web para controlo financeiro
          </DialogDescription>
        </DialogHeader>

        <div>
          <img
            src="/dt-money.png"
            className="overflow-hidden rounded-md w-60"
          />

          <div className="mt-4">
            <strong>Tecnologias</strong>
            <div className="mt-4 flex gap-2">
              <Badge variant="secondary">React.js</Badge>
              <Badge variant="secondary">Typescript</Badge>
              <Badge variant="secondary">Node.js</Badge>
            </div>
          </div>

          <div className="mt-4">
            <span className="text-md text-emerald-600">Funcionalidades</span>
            <div className="mt-2 flex flex-col gap-2">
              <span className="text-sm ml-4 flex items-center gap-1 text-foreground/80">
                <CheckCircleIcon className="w-4 h-4" />
                Vizualizar Transações criadas
              </span>
              <span className="text-sm ml-4 flex items-center gap-1 text-foreground/80">
                <CheckCircleIcon className="w-4 h-4" />
                Criar Transação
              </span>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            asChild
            className="bg-emerald-600
         font-bold text-foreground hover:bg-emerald-700 hover:text-foreground"
          >
            <Link to="">
              <Link2 className="w-4 h-4" />
              <span>Vizualizar online</span>
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
