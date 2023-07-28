import "../App.css";

export default function AddsComp() {
  return (
    <div className="max-w-7xl grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10 mx-auto p-4 w-full h-full">
      <div className="flex flex-col gap-7 py-6">
        <h1 className="font-bold text-5xl">We are partnered with WellAware</h1>
        <p className="leading-8">
          We donate ten cents per beverage to WellAware, an Austion based
          non-profit that builds water well in East Africa. Every 150 FreeWaters
          donates enough money to provide one person with a safe water source
          for the rest of their life.
        </p>
        <div>
          <button className="border-2 border-black rounded-sm px-5 py-2 hover:shadow-xl transform hover:-translate-y-1 duration-500">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full h-full">
        <img
          className="object-contain w-full h-full"
          src="https://i0.wp.com/www.freewater.io/wp-content/uploads/2022/05/wellaware-1.jpg?w=888&ssl=1"
          alt="Water Drining Kid"
        />
      </div>
    </div>
  );
}
