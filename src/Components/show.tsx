"use client";

interface IPropEvent {
  event: IEvents;
}

const Show = ({ event }: IPropEvent) => {
  const removeEvent = async () => {
    try {
      const resp = await fetch(`/api/removeEvent?id=${event._id}`, {
        method: "DELETE",
      });
      return resp;
    } catch (error) {
      console.log("knde inte ta bort");
    }
  };
  return (
    <section className="border mt-5 mb-5">
      <h2>{event.eventName}</h2>
      <p>Vart: {event.place}</p>
      <p>När:{event.date}</p>
      <div className="flex flex-col">
        <h3>Information</h3>
        <p>{event.about}</p>
      </div>

      <button
        onClick={() => {
          removeEvent();
        }}
      >
        Ta bort event
      </button>
    </section>
  );
};
export default Show;
