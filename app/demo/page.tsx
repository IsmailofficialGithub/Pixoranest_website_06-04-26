
"use client";

export default function DemoPage() {

  return (

    <div className="bg-black min-h-screen text-white">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold mb-6">
          Book a Free Demo
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-xl font-semibold mb-4">
              What you'll see in this demo
            </h2>

            <ul className="space-y-2 text-gray-300">
              <li>✔ AI powered WhatsApp automation</li>
              <li>✔ Lead capture & follow-up automation</li>
              <li>✔ Real-time customer communication tools</li>
              <li>✔ Improve sales conversions</li>
              <li>✔ Live platform walkthrough</li>
            </ul>

            <div className="mt-8 p-6 bg-blue-900/40 rounded-lg">
              <p className="font-semibold">Demo Duration</p>
              <p className="text-gray-300">30 Minutes</p>

              <p className="font-semibold mt-4">Availability</p>
              <p className="text-gray-300">
                Monday – Saturday<br/>
                10:30 AM – 6:30 PM
              </p>

              <p className="text-gray-400 mt-2">Sunday: Closed</p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden">

            <iframe
              src="https://cal.com/pixora-nest/demo?embed=true&redirect=/demo/success"
              width="100%"
              height="700"
              frameBorder="0"
              title="PixoraNest Demo Booking"
            />

          </div>

        </div>

      </div>

    </div>

  );
}