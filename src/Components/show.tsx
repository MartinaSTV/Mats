"use client";
import testImg from "../assets/cartoon-character-with-handbag-sunglasses(1).jpg";
import Image from "next/image";
interface IPropEvent {
  event: IEvents;
  removeEvent: (id: string) => void;
}

const Show = ({ event, removeEvent }: IPropEvent) => {
  return (
    <section className="border flex flex-col mt-5 mb-5 ml-auto mr-auto max-w-[600px] min-w-[300px]">
      <h2 className="self-center font-bold text-2xl mt-5">{event.eventName}</h2>
      <div className="m-5">
        <Image src={testImg} alt={"Test Image"} height={300} width={300} />
      </div>

      <div className="m-5">
        <p className="mt-5  text-xl ">Vart: {event.place}</p>
        <p className="mt-5  text-xl ">När: {event.date}</p>
        <div className="flex flex-col mt-5">
          <h3 className="text-xl ">Information</h3>
          <p className="text-xl ">{event.about}</p>
        </div>
      </div>

      <button
        className="border shadow w-[150px] h-[45px] self-center mb-5 mt-5 rounded hover:shadow-none"
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
