import Link from "next/link";
import Image from "next/image";
import phoneIkon from "../assets/phone-fill.svg";
import mail from "../assets/mail.svg";
import contatIkon from "../assets/contact.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white flex flex-col sm:flex-row">
      <div className="flex flex-col mt-5 ml-5 mb-5">
        <h2>Kontakt</h2>
        <div className="flex justifye-center mt-3">
          <Image
            src={contatIkon}
            alt={"Kontakt Ikon"}
            width={30}
            className="mr-3 h-[auto]"
          />
          <p className="">Kontakt Person</p>
        </div>
        <div className="flex justifye-center mt-3">
          <Image
            src={phoneIkon}
            alt={"Telefon"}
            height={20}
            width={20}
            className="mr-3 w-[auto]"
          />
          <p className="">
            Telefon: <span>948 7089 85</span>
          </p>
        </div>
        <div className=" flex mt-3 justifye-center">
          <Image
            src={mail}
            alt={"E-mail"}
            width={23}
            className="mr-3 h-[auto]"
          />
          <p>
            Mail: <span>mail@hotmil.com</span>
          </p>
        </div>
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
