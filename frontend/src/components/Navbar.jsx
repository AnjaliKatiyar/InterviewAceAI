function Navbar() {

  return (

    <div className="flex justify-between items-center mb-10">

      <div>

        <h1 className="text-5xl font-bold">
          InterviewAce AI 🚀
        </h1>

        <p className="text-gray-400 mt-2">
          AI Powered Placement Preparation Platform
        </p>

      </div>

      <div className="flex items-center gap-4">

        <img
          src="https://i.pravatar.cc/50"
          alt="profile"
          className="rounded-full"
        />

        <div>
          <h2 className="font-semibold">
            Anjali Katiyar
          </h2>

          <p className="text-gray-400 text-sm">
            Full Stack Developer
          </p>
        </div>

      </div>

    </div>
  );
}

export default Navbar;