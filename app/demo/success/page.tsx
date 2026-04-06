export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">

      <div className="bg-gray-900 p-10 rounded-xl text-center max-w-xl">

        <h1 className="text-4xl font-bold mb-4">
          🎉 Demo Booked Successfully
        </h1>

        <p className="text-gray-300 mb-6">
          Your PixoraNest demo has been scheduled.
          Please check your email for the Google Meet link and calendar invitation.
        </p>

        <a
          href="/"
          className="bg-blue-600 px-6 py-3 rounded-lg inline-block"
        >
          Back to Home
        </a>

      </div>

    </div>
  );
}