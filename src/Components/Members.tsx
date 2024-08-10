import Image from "next/image";
import guitar from "../assets/gitar2.jpg";

interface IMembers {
  member: { name: string; instrument: string[]; img: string };
}

const Members = ({ member }: IMembers) => {
  return (
    <section className="flex flex-col mt-5 mr-5 border items-center h-[400px]">
      <h3 className="mt-5 mb-5">{member.name}</h3>
      <Image
        src={member.img ? member.img : guitar}
        alt={member.name}
        height={300}
        width={300}
      />
      <ul className="mb-5 mt-5">
        {member.instrument.map((ins, ind) => (
          <li key={ind}>{ins}</li>
        ))}
      </ul>
    </section>
  );
};
export default Members;
