import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function ProfileAvatar() {
  return (
    <Avatar className="w-24 h-24">
      <AvatarImage
        src="/avatar.png"
        alt="Imagem do Gabriel Olhando Em Frente"
      />
      <AvatarFallback>GF</AvatarFallback>
    </Avatar>
  );
}
