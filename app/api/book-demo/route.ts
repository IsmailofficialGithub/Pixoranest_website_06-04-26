import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {

    const body = await req.json();
    const { name, email, phone } = body;

    const response = await fetch("https://api.cal.com/v1/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CAL_API_KEY}`
      },
      body: JSON.stringify({
        eventTypeSlug: process.env.CAL_EVENT_SLUG,
        username: process.env.CAL_USERNAME,
        responses: {
          name,
          email,
          phone
        },
        timeZone: "Asia/Kolkata",
        language: "en"
      })
    });

    const data = await response.json();

    // Handle API failure
    if (!response.ok) {
      console.error("Cal.com Error:", data);

      return NextResponse.json({
        success: false,
        error: data
      }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      booking: data
    });

  } catch (error) {

    console.error("Server Error:", error);

    return NextResponse.json({
      success: false,
      message: "Booking failed"
    }, { status: 500 });

  }
}