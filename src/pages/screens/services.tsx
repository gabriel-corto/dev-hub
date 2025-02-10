import { ServiceCard } from "@/components/service-card";

export function Services() {
  return (
    <div className="grid grid-cols-3 gap-8 px-16 py-16 max-lg:py-4 max-lg:px-5 max-lg:grid-cols-1 max-lg:gap-4">
      {Array.from({ length: 6 }).map((_) => {
        return <ServiceCard />;
      })}
    </div>
  );
}
