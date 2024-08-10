import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white flex flex-col sm:flex-row">
      <div className="flex flex-col mt-5 ml-5 mb-5">
        <h2>Kontakt</h2>
        <p className="mt-3">Kontakt person 1</p>
        <p className="mt-3">
          Telefon: <span>948 7089 85</span>
        </p>
        <p className="mt-3">
          Mail: <span>mail@hotmil.com</span>
        </p>
      </div>
      <div className="flex flex-col sm:ml-auto sm:mr-10">
        <Link href="/Login" className="mt-5 mb-5 ml-5">
          Admin{" "}
        </Link>
        <Link href="/AddHappening" className="mt-5 mb-5 ml-5">
          Lägg till event
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
