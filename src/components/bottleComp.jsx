import bottle from "/public/images/waterBottles.jpg";
import "../App.css";

export default function BottleComp() {
  return (
    <div className="max-w-7xl grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 mx-auto p-4 w-full h-full">
      <div className="w-full h-full">
        <img
          className="object-contain w-full h-full"
          src={bottle}
          alt="Water Drining bottles"
        />
      </div>

      <div className="flex flex-col gap-7 py-6 justify-center items-center">
        <h1 className="font-bold text-5xl">We never use plastic bottles</h1>
        <p className="leading-8">
          The world is producing a million plastic bottles per minute and only
          9% are being recycled. Thats a half trillion bottles annually that
          will end up in landfills, rivers, lakes, and the ocean. Things have
          become so bad that scientists predict plastic in our oceans will
          outweigh fish by 2050
        </p>
      </div>
    </div>
  );
}
