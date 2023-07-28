import "../App.css"
import savingsImage from '/public/icons/savings.png'
import echoFriendly from '/public/icons/echoFriendlh.png';
import saveLife from '/public/icons/saveLife.png';
import waterDroplets from '/public/icons/waterDroplet.png';



export default function IconComponent(){
    return <section className="grid lg:grid-cols-2 md:grid-cols-1 gap-14 max-w-4xl mx-auto p-20">
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="p-5"> 
            <img src={savingsImage} alt="savingsImage icon" className="w-20"/>
            </div>
            <h2 className="font-semibold text-xl">Save Money</h2>
            <p className="w-72 text-center ">Bottled water costs, 2,000 times the price of tap water</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4"> 
            <div className="p-5">
            <img src={waterDroplets} alt="waterDroplet icon"  className="w-20"/>
            </div>
            <h2 className="font-semibold text-xl">Premium Water</h2>
            <p className="w-72 text-center">FreeWater is natural spring water and all of our containers are BPA free</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
            <div>
            <img src={echoFriendly} alt="echoFriendly icon "  className="w-20"/>
            </div>
            <h2 className="font-semibold text-xl">Echo-friendly</h2>
            <p className="w-72 text-center">Our goal is to be net positive by 2030</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
            <div>
            <img src={saveLife} alt="save life icon"  className="w-20"/>
            </div>
            <h2 className="font-semibold text-xl">Save Lifes</h2>
            <p className="w-72 text-center">Ten cents from each beverage is donated to charity to build water wells for people in need </p>
        </div>
    </section>
}