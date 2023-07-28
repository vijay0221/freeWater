
import "../App.css";


export default function Navigation(){
    return <nav className="flex justify-center items-center justify-self-center font-mono mx-auto">
      <div>
      <ul className="flex items-center justify-center gap-4 ">
        
        <li className="p-3">
          <a href="#" className="text-gray-300 hover:text-blue-400" >Home</a>
        </li>

        <li  className="p-3">
          <a href="#" className="text-gray-300 hover:text-blue-400">Advertise</a>
        </li>
        <li className="p-3">
          <a href="#" className="text-gray-300 hover:text-blue-400">Distribute</a>
        </li>
  
        <li className="p-3">
          <a href="#" className="text-gray-300 hover:text-blue-400">Hall Of Fame</a>
        </li>
        <li className="p-3">
          <a href="#" className="text-gray-300 hover:text-blue-400">FAQs</a>
        </li>
        </ul>
      </div>
  
  
       <div>
        <ul className="p-5">
          <li>
            <a href="#" className="hover:text-blue-400">
              <div className="flex flex-col">
               <p className="font-mono">free</p>
                <p className="font-mono text-blue-500">water</p>
                </div>
            </a>
          </li>
         </ul> 
      </div>
  
      <div>
        <ul className="flex items-center justify-center gap-4 px-2 ">
        <li className="p-3" >
          <a href="#" className="text-gray-300 hover:text-blue-400">Careers</a>
        </li>
        <li className="p-3">
          <a href="#" className="text-gray-300 hover:text-blue-400">Media</a>
        </li>
        <li className="p-3">
          <a href="#" className="text-gray-300 hover:text-blue-400">Contact Us</a>
        </li>
        <li className="p-3">
          <a href="#" className="text-gray-300 hover:text-blue-400">Support Us</a>
        </li>
        <li className="p-3">
          <a href="#" className="text-gray-300 hover:text-blue-400">Coming Soon</a>
        </li>
       </ul>
      </div>
        
  
     </nav>
  
  }
  