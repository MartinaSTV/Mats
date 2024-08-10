import Link from "next/link";

const NavMob = () => {
  const navbar = [
    { name: "Hem", url: "/" },
    { name: "Pågång", url: "/Happenings" },
    { name: "Kontakt", url: "/Contact" },
  ];
  return (
    <nav className="flex flex-col text-xl items-center justify-evenly h-[100vh] ">
      <h1 className="">Meny</h1>
      {navbar.map((pages, idx) => (
        <Link key={idx} href={pages.url}>
          {pages.name}
        </Link>
      ))}
    </nav>
  );
};
export default NavMob;
