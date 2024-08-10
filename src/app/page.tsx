import Members from "@/Components/Members";
import members from "@/members.json";

export default function Home() {
  return (
    <main>
      <article className="p-5 flex flex-col text-xl">
        <p className="mt-5 mb-5">
          Spelar låtar från the swinging sixties & beyond! Dom brinner för
          60-tals musik, lirar musik av The Beatles och mer.
        </p>
        <h2 className="self-center">Bandet</h2>
        <section className="flex flex-col justify-evenly mb-10 sm:flex-row">
          {members.map((member, idx) => (
            <Members key={idx + "members"} member={member} />
          ))}
        </section>
      </article>
    </main>
  );
}
