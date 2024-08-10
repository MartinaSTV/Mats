import Link from "next/link";

const NavBarForMeny = () => {
  const navbar = [
    { name: "Hem", url: "/" },
    { name: "Pågång", url: "/Happenings" },
    { name: "Kontakt", url: "/Contact" },
  ];
  return (
    <nav className="ml-auto mr-auto text-xl items-between space-x-10">
      {navbar.map((pages, idx) => (
        <Link key={idx} href={pages.url}>
          {pages.name}
        </Link>
      ))}
    </nav>
  );
};
export default NavBarForMeny;
