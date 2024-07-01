import NavBarForMeny from "@/Components/NavBarForMeny";

const page = () => {
  return (
    <section>
      <header className="flex items-center pt-10 pb-10">
        <h1 className="text-xl ml-10">The Quarter Men</h1>
        <NavBarForMeny />
      </header>
      <h1>Pågång</h1>
    </section>
  );
};
export default page;
