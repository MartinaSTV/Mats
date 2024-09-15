import EventsShows from "@/Components/EventsShows";
import dbClient from "@/db/mongodb";

const pageHappening = async () => {
  let events: IEvents[] = [];
  /*  try {
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
  } */

  return (
    <section className="flex flex-col">
      <h1 className="self-center mt-10 text-xl">Kommande spelningar!</h1>
      <EventsShows events={events} />
    </section>
  );
};
export default pageHappening;
