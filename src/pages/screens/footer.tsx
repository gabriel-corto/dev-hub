import { Linkedin, Github, AtSignIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mb-10">
      <div className="mt-12 flex flex-col gap-4">
        <Link
          to=""
          className="rounded-md bg-muted p-4 px-8 w-96 flex items-center gap-3 max-lg:w-80"
        >
          <Linkedin className="w-6 h-6" />
          <span>Linkedin</span>
        </Link>
        <Link
          to=""
          className="rounded-md bg-muted p-4 px-8 w-96 flex items-center gap-3 max-lg:w-80"
        >
          <AtSignIcon className="w-6 h-6" />
          <span>Eviar E-mail</span>
        </Link>
        <Link
          to=""
          className="rounded-md bg-muted p-4 px-8 w-96 flex items-center gap-3 max-lg:w-80"
        >
          <Github className="w-6 h-6" />
          <span>Github</span>
        </Link>
      </div>
    </footer>
  );
}
