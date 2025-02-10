import { ScreenHead } from "@/components/screen-title";
import { Header } from "./screens/header";
import { Projects } from "./screens/projects";
import { Services } from "./screens/services";
import { Footer } from "./screens/footer";

export function Home() {
  return (
    <main className="h-screen w-full">
      <Header />

      <div className="mt-24 flex flex-col  items-center">
        <ScreenHead
          title="Meus Projectos"
          subtitle="Veja meus projectos em destaque"
        />
        <Projects />
      </div>

      <div className="mt-24 flex flex-col  items-center">
        <ScreenHead
          title="Meus Serviços"
          subtitle="Como posso ajudar o seu negócio"
        />

        <Services />
      </div>

      <div className="mt-24 flex flex-col  items-center">
        <ScreenHead title="Contactos" subtitle="Gostou do meu Trabalho?" />
        <Footer />
      </div>
    </main>
  );
}
