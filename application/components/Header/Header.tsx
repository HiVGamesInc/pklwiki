// import Link from "next/link";
import {
  MagnifyingGlassIcon
  // MoonIcon,
  // SunIcon
} from "@heroicons/react/24/solid";
import Icon from "components/Icon/Icon";
import Input from "components/Input/Input";
import { useThemeContext } from "context/theme";
import Image from "next/image";

export default function Header() {
  // const { darkMode, setDarkMode } = useThemeContext();
  const { darkMode } = useThemeContext();
  // const DarkModeIcon = !darkMode ? MoonIcon : SunIcon;

  return (
    <header
      className={`w-full bg-bgPrimary shadow-md border-b ${
        darkMode ? "border-b-gray-800" : "border-b-gray-100"
      }`}
    >
      <span className="flex items-center justify-between w-full max-w-screen-xl mx-auto h-16 p-4">
        <Image
          src="https://placehold.co/200x50.png"
          alt="Logo"
          width={200}
          height={50}
          className="h-full"
        />
        <div className="flex items-center relative">
          <Input value="" />
          <button className="h-4 block text-dBlack absolute top-1/2 right-0 translate-x-[-50%] translate-y-[-50%]">
            <Icon icon={MagnifyingGlassIcon} />
          </button>
        </div>
        <div className="flex items-center">
          {/* <button className="h-4 block text-dBlack" onClick={() => setDarkMode(!darkMode)}><Icon icon={DarkModeIcon} /></button> */}
          {/* <Link className="h-4 block text-dBlack" href="/"><Icon icon={DarkModeIcon} /></Link> */}
        </div>
      </span>
    </header>
  );
}
