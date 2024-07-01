import Members from "@/Components/Members";
import NavBarForMeny from "@/Components/NavBarForMeny";
import members from "@/members.json";

//TODO Lägga till bild på Members
export default function Home() {
  return (
    <main className="">
      <header className="flex items-center pt-10 pb-10">
        <h1 className="text-xl ml-10">The Quarter Men</h1>
        <NavBarForMeny />
      </header>
      <article>
        <h2>Bandet</h2>
        <ul>
          {members.map((member, idx) => (
            <li key={idx + "members"}>
              <Members member={member} key={idx} />
            </li>
          ))}
        </ul>

        <p>
          Spelar låtar från the swinging sixties & beyond! Dom brinner för
          60-tals musik, lirar musik av The beatles och mer.
        </p>
      </article>
    </main>
  );
}
