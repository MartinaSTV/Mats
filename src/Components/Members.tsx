import Image from "next/image";

interface IMembers {
  member: { name: string; instrument: string[]; img: string };
}

const Members = ({ member }: IMembers) => {
  return (
    <section className="bg-amber-300 flex flex-col mt-5 border items-center h-[400px] ">
      <h3>{member.name}</h3>
      <Image src={member.img} alt={member.name} height={300} />
      <ul>
        {member.instrument.map((ins, ind) => (
          <li key={ind}>{ins}</li>
        ))}
      </ul>
    </section>
  );
};
export default Members;
