interface IMembers {
  member: { name: string; instrument: string[] };
}

const Members = ({ member }: IMembers) => {
  return (
    <section>
      <h3>{member.name}</h3>
      <ul>
        {member.instrument.map((ins, ind) => (
          <li key={ind}>{ins}</li>
        ))}
      </ul>
    </section>
  );
};
export default Members;
