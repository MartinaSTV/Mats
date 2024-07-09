import dbClient from "@/db/mongodb";

// TODO add map loction?? redirect /empty values
const Happening = () => {
  const SaveEvent = async (formData: FormData) => {
    "use server";

    const eventName = formData.get("nameEvent");
    const place = formData.get("place");
    const date = formData.get("date");
    const about = formData.get("aboutEvent");

    try {
      const event = await dbClient
        .db("quarterMen")
        .collection("shows")
        .insertOne({ eventName, place, date, about });
      console.log(event);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>Lägg till Event</h1>
      <form action={SaveEvent} className="flex flex-col">
        <div className="flex flex-col">
          <label htmlFor="nameEvent">Namn på event</label>
          <input
            type="text"
            id="nameEvent"
            name="nameEvent"
            className="border"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="place">Plats</label>
          <input type="text" id="place" name="place" className="border" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date">Datum</label>
          <input type="date" id="date" name="date" className="border" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="aboutEvent">Beskrivning</label>
          <textarea
            name="aboutEvent"
            id="aboutEvent"
            placeholder="Beskrivning"
            className="border"
          ></textarea>
          <button type="submit">Lägg till</button>
        </div>
      </form>
    </section>
  );
};
export default Happening;
