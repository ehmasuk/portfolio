import Navigation from "./navigation";

function Header() {
  return (
    <div className="relative w-full mx-auto border-[0.01rem] border-gray-100 dark:border-white/5 flex gap-4 items-center justify-end py-14 px-6">
      {/* nav links */}
      <Navigation  />

      {/* background */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(330deg,#25252526_0px_1px,transparent_1px_10px)] dark:bg-[repeating-linear-gradient(330deg,#ffffff21_0px_1px,transparent_1px_10px)] -z-10"></div>
    </div>
  );
}

export default Header;
