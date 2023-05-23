// import { motion } from "framer-motion"
import Link from "next/link";
import Icon from "components/Icon/Icon";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const menuItems = [
    { img: "/icons/_bulbasaur.png", title: "Pokémon", href: "/pokemon" },
    { img: "/icons/_Container.png", title: "Podéx", href: "/podex" },
    { img: "/icons/_windy.png", title: "Elementos", href: "/elements" },
    { img: "/icons/_Crown.png", title: "Skills", href: "/skills" },
    { img: "/icons/_Direction.png", title: "Quests Test", href: "/quests" },
    { img: "/icons/_Bag.png", title: "Tasks", href: "/tasks" },
    {
      img: "/icons/_Pokemon Trainer Boy.png",
      title: "Outfits",
      href: "/outfits"
    },
    { img: "/icons/_pokemon zapdos.png", title: "Eventos", href: "/events" }
  ];

  return (
    <aside className="flex flex-col w-96 p-4 bg-bgPrimary rounded-xl shadow-md">
      {menuItems.map((item, i) => (
        <>
          <Link
            key={i}
            className="text-base px-4 py-4 text-dBlack relative"
            href={item.href}
          >
            <span className="z-10 flex items-center relative">
              <Icon size={1.5} img={item.img} /> {item.title}
            </span>
            {pathname.startsWith(item.href) && (
              <div className="absolute bg-dBlack w-1 h-8 top-1/2 left-0 translate-y-[-50%]"></div>
            )}
          </Link>
        </>
      ))}
    </aside>
  );
}
