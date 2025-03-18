import Image from "next/image";
import Menu from "./components/Menu";
import MenuInfo from "./components/MenuInfo";

export default function Home() {
  return (
    <div className="flex">
      <Menu />
      <MenuInfo />
    </div>
  );
}
