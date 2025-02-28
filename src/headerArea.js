export default function HeaderArea() {
  return (
    <>
      <div className="flex justify-between px-16 items-center bg-secondary py-2.5 shadow-lg fixed top-0 left-0 z-1000 w-[100%]">
        <div>
          <a href="#" id="logo" draggable="true">ALGO - V</a>
        </div>
        <div> 
          <ul className="flex gap-8 text-[1.2rem]">
            <li> <a href="#">Explore</a></li>
            <li> <a href="#">About</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
