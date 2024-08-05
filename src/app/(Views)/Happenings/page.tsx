import Show from "@/Components/show";
import dbClient from "@/db/mongodb";

//TODO Error Message uppdatera delete
const pageHappening = async () => {
  let events: IEvents[] = [];
  try {
    events = await dbClient
      .db("quarterMen")
      .collection<IEvents>("shows")
      .find()
      .toArray();

    events = events.map((event) => ({
      ...event,
      _id: event._id.toString(),
    }));
  } catch (error) {
    console.log(error, "kunde inte hämta events");
  }

  return (
    <section>
      <h1>Pågång</h1>
      {events?.length > 0
        ? events?.map((data) => <Show key={data._id} event={data} />)
        : "Inga events"}
    </section>
  );
};
export default pageHappening;
