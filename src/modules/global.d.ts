import { ObjectId } from "mongodb";
interface IEvents {
  _id: ObjectId;
  eventName: string;
  place: string;
  about: string;
  date: string;
}
