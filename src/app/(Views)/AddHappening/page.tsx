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
    <section className="flex flex-col items-center border-b">
      <h1 className="mt-5 mb-5">Skapa Event</h1>
      <form action={SaveEvent} className="flex flex-col mb-10 w-[600px]">
        <div className="flex flex-col mt-5">
          <label htmlFor="nameEvent">Namn på event</label>
          <input
            type="text"
            id="nameEvent"
            name="nameEvent"
            placeholder="Namn på event"
            className="border h-[40px] w-[100%] "
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="place">Plats</label>
          <input
            type="text"
            id="place"
            name="place"
            placeholder="Plats"
            className="border h-[40px]"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="date">Datum</label>
          <input
            type="date"
            id="date"
            name="date"
            className="border h-[40px]"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="aboutEvent">Beskrivning</label>
          <textarea
            name="aboutEvent"
            id="aboutEvent"
            placeholder="Beskrivning"
            className="border h-[100px]"
          ></textarea>
          <div className="flex flex-col mt-5">
            <label htmlFor="picture">Lägg till bild</label>
            <input
              type="file"
              id="picture"
              name="picture"
              placeholder="drag and drop eller klicka på fil för att importera"
              className="border h-[40px]"
            />
          </div>
          <button
            type="submit"
            className="mt-5 border h-[60px] w-[150px] self-center rounded font-bold"
          >
            Lägg till event
          </button>
        </div>
      </form>
    </section>
  );
};
export default Happening;
