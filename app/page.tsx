import { Card } from "@/app/_components/ui/card";
import { Map } from "./_components/ui/map";

export default function Home() {
  return (
    <Card className="h-screen p-0 overflow-hidden">
      <Map center={[-43.3561, -4.8589]} zoom={13} theme={"light"}></Map>
    </Card>
  );
}
