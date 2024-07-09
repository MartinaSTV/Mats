import { IEvents } from "@/modules/global";

interface IPropEvent {
  event: IEvents;
}

const Show = ({ event }: IPropEvent) => {
  return (
    <section className="border mt-5 mb-5">
      <h2>{event.eventName}</h2>
      <p>Vart: {event.place}</p>
      <p>När:{event.date}</p>
      <div className="flex flex-col">
        <h3>Information</h3>
        <p>{event.about}</p>
      </div>
    </section>
  );
};
export default Show;
