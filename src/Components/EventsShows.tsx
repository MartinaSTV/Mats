"use client";
import { useState } from "react";
import Show from "@/Components/show";
import { createPortal } from "react-dom";

interface IPropEvent {
  events: IEvents[];
}

const EventsShows = ({ events }: IPropEvent) => {
  const [initilaEventV, setInitialEventV] = useState(events);
  const [success, setSuccess] = useState<{
    respSuccess: boolean;
    error: boolean;
    show: boolean;
  }>({
    respSuccess: false,
    error: false,
    show: false,
  });

  const removeEvent = async (id: string) => {
    try {
      const resp = await fetch(`/api/removeEvent?id=${id}`, {
        method: "DELETE",
      });
      const removedEvent = initilaEventV.filter((data) => data._id !== id);
      setSuccess({ respSuccess: true, error: false, show: true });
      setInitialEventV(removedEvent);
    } catch (error) {
      setSuccess({ respSuccess: false, error: true, show: true });
    }
  };

  return (
    <section className="relative flex flex-col">
      {initilaEventV?.length > 0 ? (
        initilaEventV?.map((data) => (
          <Show key={data._id} event={data} removeEvent={removeEvent} />
        ))
      ) : (
        <p className="self-center mt-10">Inga events</p>
      )}
      {success.show === true &&
        createPortal(
          <section className="absolute top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30">
            <article className="bg-white opacity-100 w-[300px] h-[300px] flex flex-col items-center justify-center rounded ">
              {success.error === true && <p>Kunde inte ta bort event</p>}
              {success.respSuccess === true && <p>Tagit bort event</p>}
              <button
                className="border w-[60px] h-[40px] font-bold mt-10 rounded shadow-md hover:shadow-none"
                onClick={() => {
                  setSuccess({ respSuccess: false, error: false, show: false });
                }}
              >
                Ok
              </button>
            </article>
          </section>,
          document.body
        )}
    </section>
  );
};
export default EventsShows;
