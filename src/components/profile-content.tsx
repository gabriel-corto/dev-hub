export function ProfileContent() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="custom-font text-lg">
        Olá! Meu nome é{" "}
        <span className="custom-font text-rose-400">Gabriel Francisco</span>{" "}
      </p>
      <h1 className="text-5xl font-bold max-lg:text-3xl">
        Especialista Front-end
      </h1>
      <span className="max-w-lg text-center text-foreground/60 tracking-wide font-extralight max-lg:text-md">
        Especialista Front-end responsável por garantir uma experiência de
        usuário optimizada e eficiente ao interagir com aplicativos da web
      </span>
    </div>
  );
}
