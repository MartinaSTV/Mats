import Link from "next/link";

const NavMob = () => {
  const navbar = [
    { name: "Hem", url: "/" },
    { name: "Pågång", url: "/Happenings" },
    { name: "Kontakt", url: "/Contact" },
  ];
  return (
    <nav className="flex flex-col text-xl items-center justify-evenly min-h-[75vh] ">
      <h1 className="border-b border-black font-bold">Meny</h1>
      {navbar.map((pages, idx) => (
        <Link key={idx} href={pages.url}>
          <button className="hover:bg-black hover:text-white w-[300px] h-[60px] border border-black border-2px">
            {pages.name}
          </button>
        </Link>
      ))}
    </nav>
  );
};
export default NavMob;
