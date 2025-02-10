import { ProfileAvatar } from "@/components/profile-avatar";
import { ProfileContent } from "@/components/profile-content";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header
      style={{ backgroundImage: "url('/intro.png')" }}
      className="bg-cover bg-center flex flex-col items-center justify-center gap-4 py-16"
    >
      <div className="flex items-center justify-center flex-col gap-4">
        <ProfileAvatar />
        <ProfileContent />
      </div>

      <div className="mt-8 max-w-3xl px-1 flex flex-wrap items-center gap-3 justify-center">
        <Badge className="font-normal text-md" variant="secondary">
          React.js
        </Badge>
        <Badge className="font-normal text-md" variant="secondary">
          Typescript
        </Badge>
        <Badge className="font-normal text-md" variant="secondary">
          Javascript
        </Badge>
        <Badge className="font-normal text-md" variant="secondary">
          HTML e CSS
        </Badge>
        <Badge className="font-normal text-md" variant="secondary">
          Tailwind, Radix UI e Shadcn UI
        </Badge>
        <Badge className="font-normal text-md" variant="secondary">
          Git e Github
        </Badge>
        <Badge className="font-normal text-md" variant="secondary">
          Testes em aplicações front-end
        </Badge>
        <Badge className="font-normal text-md" variant="secondary">
          Metodologias Ágeis
        </Badge>
        <Badge className="font-normal text-md" variant="secondary">
          Deploy e Devops
        </Badge>
      </div>
    </header>
  );
}
