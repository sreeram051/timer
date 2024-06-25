import Image from "next/image";
import Timer from "./components/Timer";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Timer />
    </div>
  );
}
