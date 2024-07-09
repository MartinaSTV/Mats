import Members from "@/Components/Members";
import members from "@/members.json";

export default function Home() {
  return (
    <main className="">
      <article>
        <h2>Bandet</h2>
        <section className="flex">
          {members.map((member, idx) => (
            <Members key={idx + "members"} member={member} />
          ))}
        </section>

        <p>
          Spelar låtar från the swinging sixties & beyond! Dom brinner för
          60-tals musik, lirar musik av The Beatles och mer.
        </p>
      </article>
    </main>
  );
}
