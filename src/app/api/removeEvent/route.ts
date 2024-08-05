import { NextApiRequest, NextApiResponse } from "next";
import dbClient from "@/db/mongodb";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

async function getEvents(req: NextApiRequest, res: NextApiResponse) {
  try {
    const events = await dbClient
      .db("quarterMen")
      .collection("shows")
      .find()
      .toArray();

    res.status(200).json(events);
  } catch (error) {
    console.error("Failed to fetch events:", error);
    res.status(500).json({ error: "Failed to fetch events" });
  }
}

async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "No Id provided" }, { status: 400 });
  }

  const ID = new ObjectId(id);
  try {
    const response = await dbClient
      .db("quarterMen")
      .collection("shows")
      .findOneAndDelete({ _id: ID });
    if (!response.value) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Event successfully deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }
}
export { DELETE, getEvents };
