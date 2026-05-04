import { Card } from "@/app/_components/ui/card";
import { Map, MapControls } from "./_components/ui/map";

export default function Home() {
  return (
    <Card className="h-screen p-0 overflow-hidden">
      <Map center={[-74.006, 40.7128]} zoom={11}>
        <MapControls />
      </Map>
    </Card>
  );
}
