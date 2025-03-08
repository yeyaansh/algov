export default function HeaderArea() {
  return (
    <>
      <div className="flex justify-between medium:px-16 small:px-8 px-4 items-center bg-secondary py-2.5 shadow-lg fixed top-0 left-0 z-1000 w-[100%]">
        <div>
          <a href="/" id="logo" className="text-center medium:text-2xl text-xl" draggable="true">ALGO - V</a>
        </div>
        <div> 
          <ul className="flex gap-8 medium:text-xl text-lg">
            <li> <a href="#">Explore</a></li>
            <li> <a href="#">About</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
