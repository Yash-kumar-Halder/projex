import BaseNavigation from "@/components/base-navigation";
import Herohome from "@/components/hero-home";
import RelatedShowcase from "@/components/related-showcase";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <BaseNavigation />
      <Herohome />
      <RelatedShowcase />
    </div>
  );
}
