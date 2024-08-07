"use client";

interface IPropEvent {
  event: IEvents;
  removeEvent: (id: string) => void;
}

const Show = ({ event, removeEvent }: IPropEvent) => {
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
          removeEvent(event._id);
        }}
      >
        Ta bort event
      </button>
    </section>
  );
};
export default Show;
