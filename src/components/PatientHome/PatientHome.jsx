
import './PatientHome.css'
import Popup from '../Popups/Popup'
import ResourcePopup from '../Popups/ResourcePopup'
import VitalsPopup from '../Popups/Vitals'
import DepartmentDropdown from '../Dropdown/Dropdown'

const PatientHome = () => {
    

  return (
    <div class="bg-gray-200 flex justify-center items-center h-screen w-screen">
    <div>
        <div class="flex flex-row bg-white items-center">
            <div class="app-bg-blue-1 px-10 py-5">
                <span class="text-lg text-white font-bold">LOGO</span>
            </div>
            <DepartmentDropdown/>
           
            <div class="flex flex-row pl-5 items-center mr-auto">
                <div class="h-9 w-9 app-bg-blue-2 flex justify-center items-center rounded-xl">
                    <svg class="w-6 h-6 app-color-blue-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <div class="flex flex-col pl-5">
                    <span class="font-semibold text-sm app-color-black">Today</span>
                    <span class="font-semibold text-sm app-color-blue-1">13 August 2023</span>
                </div>
                <svg class="h-4 w-4 app-color-blue-3 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                <div class="w-px bg-gray-100 h-10 ml-5"></div>
                
            </div>
         <ResourcePopup/>
            <Popup/>
           
            <svg class="w-6 h-6 app-color-blue-3 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>

        </div>
        
        
        <div class="flex flex-col app-bg-white-1 px-12 pb-10">
            <div class="flex flex-row py-2">
                <span class="text-lg font-bold app-color-black">Home</span>
            </div>
            <div class="flex flex-row">
                <div class="flex flex-col w-40 bg-white pl-5 py-3 mr-3 rounded-tl-2xl rounded-tr-2xl bg-white active">
                    <span class="text-3xl app-color-blue-1 font-bold">06</span>
                    <span class="text-md app-color-blue-1 font-semibold">Queue</span>
                </div>
                {/* <div class="flex flex-col w-40 bg-white pl-5 py-3 mr-3 rounded-tl-2xl rounded-tr-2xl app-bg-blue-1">
                    <span class="text-3xl text-white font-bold">02</span>
                    <span class="text-md text-white font-semibold">Earlier</span>
                </div>
                <div class="flex flex-col w-40 bg-white pl-5 py-3 mr-3 rounded-tl-2xl rounded-tr-2xl app-bg-blue-3">
                    <span class="text-3xl text-white font-bold">05</span>
                    <span class="text-md text-white font-semibold">Wait List</span>
                </div>
                <div class="flex flex-col w-40 bg-white pl-5 py-3 mr-3 rounded-tl-2xl rounded-tr-2xl app-bg-blue-4">
                    <span class="text-3xl text-white font-bold">0</span>
                    <span class="text-md text-white font-semibold">No Show</span>
                </div> */}
            </div>
            <div class="flex flex-row bg-white p-10 relative">
                <div class="absolute app-bg-yellow-3 text-xs font-semibold px-3 py-0.5 rounded-br-md rounded-tl-md text-white" style={{top:'70px'}}>New</div>
                <table class="w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th class="text-left text-xs app-color-black pb-5">PATIENT</th>
                            <th class="text-left text-xs app-color-black pb-5">CATEGORY</th>
                            <th class="text-left text-xs app-color-black pb-5">APPOINTMENT</th>
                            <th class="text-left text-xs app-color-black pb-5">WAITING TIME</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="app-border-1">
                            <td>
                                <svg class="w-6 h-6 app-color-blue-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
                            </td>
                            <td>
                                <div class="flex justify-center items-center rounded-md w-8 h-8 app-bg-yellow-2 app-color-yellow-1 text-lg font-semibold">1</div>
                            </td>
                            <td>
                                <div class="flex flex-row py-3">
                                    <div class="mr-5 w-10 h-10 bg-gray-100 rounded-full"></div>
                                    <div class="flex flex-col">
                                        <span class="font-semibold text-sm app-color-black">Jai Krishna</span>
                                        <span class="font-semibold text-xs app-color-gray-1">Male, 36 yr</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="h-8 w-28 font-semibold text-sm app-bg-red-2 flex items-center justify-center app-color-red-1 rounded-md">EMERGENCY</span>
                            </td>
                            <td>
                                <span class="font-semibold text-sm app-color-gray-1">06:10PM</span>
                            </td>
                            <td>
                                <div class="app-bg-red-2 h-8 w-28 font-semibold text-sm flex justify-center items-center app-color-red-1 rounded-md">
                                    5 Mins
                                </div>
                            </td>
                            <td>
                                <button class="flex items-center justify-center app-button-shadow w-32 py-2 rounded-3xl">
                                    <svg class="w-6 h-6 app-color-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                                    <span class="ml-3 font-semibold text-md app-color-gray-1">Vitals</span>
                                </button>
                            </td>
                            <td>
                                <svg class="w-6 h-6 app-color-blue-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>

                            </td>
                        </tr>
                        <tr class="app-border-2">
                            <td class="w-6 h-6">
                                <svg class="ml-3 w-6 h-6 app-color-blue-3 mr-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
                            </td>
                            <td>
                                <div class="mr-4 w-8 h-8 rounded-md flex items-center justify-center app-bg-blue-2 app-color-blue-1 text-lg font-semibold">2</div>
                            </td>
                            <td>
                                <div class="flex flex-row items-center py-3">
                                    <div class="w-10 h-10 bg-yellow-50 rounded-full mr-5"></div>
                                    <div class="flex flex-col">
                                        <span class="font-semibold text-sm app-color-black">Karunya</span>
                                        <span class="font-semibold text-xs app-color-gray-1">Female, 28 yr</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="font-semibold text-sm app-color-gray-1">REGULAR</span>    
                            </td>
                            <td>
                                <span class="font-semibold text-sm app-color-gray-1">05.00PM</span>
                            </td>
                            <td>
                                <div class="h-8 w-28 font-semibold text-sm app-bg-red-2 flex items-center justify-center app-color-red-1 rounded-md">
                                    1 Hour 10 Mins
                                </div>
                            </td>
                            <td>
                                <VitalsPopup/>
                            </td>
                            <td>
                                <svg class="w-6 h-6 app-color-blue-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                            </td>
                          </tr>
                          <tr class="app-border-1">
                            <td class="w-6 h-6">
                                <svg class="ml-3 w-6 h-6 app-color-blue-3 mr-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
                            </td>
                            <td>
                                <div class="mr-4 w-8 h-8 rounded-md flex items-center justify-center app-bg-yellow-2 app-color-yellow-1 text-lg font-semibold">3</div>
                            </td>
                            <td>
                                <div class="flex flex-row items-center py-3">
                                    <div class="w-10 h-10 bg-green-100 rounded-full mr-5"></div>
                                    <div class="flex flex-col">
                                        <span class="font-semibold text-sm app-color-black">John Wick</span>
                                        <span class="font-semibold text-xs app-color-gray-1">Male, 45 yr</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="font-semibold text-sm app-color-gray-1">REGULAR</span>    
                            </td>
                            <td>
                                <span class="font-semibold text-sm app-color-gray-1">05:20PM</span>
                            </td>
                            <td>
                                <div class="h-8 w-28 font-semibold text-sm app-bg-blue-2 flex items-center justify-center app-color-blue-1 rounded-md">
                                    45 Mins
                                </div>
                            </td>
                            <td>
                                <button class="flex items-center justify-center rounded-3xl shadow-md w-32 py-2 app-button-shadow">
                                    <svg class="w-6 h-6 app-color-blue-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>                                <span class="ml-3 font-semibold text-md app-color-gray-1">Checking</span>
                                </button>
                            </td>
                            <td>
                                <svg class="w-6 h-6 app-color-blue-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                            </td>
                          </tr>
                          <tr class="app-border-1">
                            <td class="w-6 h-6">
                                <svg class="ml-3 w-6 h-6 app-color-blue-3 mr-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
                            </td>
                            <td>
                                <div class="mr-4 w-8 h-8 rounded-md flex items-center justify-center app-bg-blue-2 app-color-blue-1 text-lg font-semibold">4</div>
                            </td>
                            <td>
                                <div class="flex flex-row items-center py-3">
                                    <div class="w-10 h-10 bg-pink-100 rounded-full mr-5"></div>
                                    <div class="flex flex-col">
                                        <span class="font-semibold text-sm app-color-black">Johny Ive</span>
                                        <span class="font-semibold text-xs app-color-gray-1">Male, 31 yr</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="font-semibold text-sm app-color-gray-1">REGULAR</span>    
                            </td>
                            <td>
                                <span class="font-semibold text-sm app-color-gray-1">05:35PM</span>
                            </td>
                            <td>
                                <div class="h-8 w-28 font-semibold text-sm app-bg-blue-2 flex items-center justify-center app-color-blue-1 rounded-md">
                                    Not Arrived
                                </div>
                            </td>
                            <td>
                                <button class="flex items-center justify-center rounded-3xl shadow-md w-32 py-2 app-button-shadow">
                                    {/* <svg class="w-6 h-6 app-color-blue-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>                                 */}
                                    <span class="ml-3 font-semibold text-md app-color-gray-1">NIL</span>
                                </button>
                            </td>
                            <td>
                                <svg class="w-6 h-6 app-color-blue-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                            </td>
                          </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
  )
}

export default PatientHome
