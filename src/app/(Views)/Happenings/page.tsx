import Show from "@/Components/show";
import dbClient from "@/db/mongodb";
import { IEvents } from "@/modules/global";

//TODO Error Message
const pageHappening = async () => {
  let events;
  try {
    events = await dbClient
      .db("quarterMen")
      .collection<IEvents>("shows")
      .find()
      .toArray();
  } catch (error) {
    console.log(error);
  }

  const RemoveEvent = () => {};

  return (
    <section>
      <h1>Pågång</h1>
      {events?.map((data, idx) => (
        <Show key={idx + "event"} event={data} />
      ))}
    </section>
  );
};
export default pageHappening;
