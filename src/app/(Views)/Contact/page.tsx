import phone from "../../../assets/phone.jpg";
import Image from "next/image";
const Contact = () => {
  return (
    <section className="flex flex-col min-h-[100vh]">
      <h1 className="mr-auto ml-auto mt-10 mb-10 text-xl">Kontakt</h1>
      <article className="flex flex-col justify-center mb-10 sm:flex-row">
        <div className="m-5">
          <Image
            src={phone}
            alt={"äldre typ av telefon"}
            height={300}
            width={300}
          />
        </div>
        <div className="m-5">
          <h2 className="text-xl">Mats Olsson</h2>
          <p className="text-xl mt-5">
            Mail: <span className="font-bold">mail@info.com</span>
          </p>
          <p className="text-xl mt-5">
            Telefon: <span className="font-bold">070 0948 393</span>{" "}
          </p>
        </div>
      </article>
    </section>
  );
};
export default Contact;
