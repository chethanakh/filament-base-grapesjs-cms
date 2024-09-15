<div>
    <div class="bg-black p-3">
        <div class="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-3">
            <div class="md:flex gap-5 items-center hidden lg:justify-start md:justify-center">
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="red" data-slot="icon" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <span class="ml-2 text-white text-sm font-extrabold">Agaliya, Galle</span>
                </div>
                <div class="flex justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="red" data-slot="icon" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>

                    <span class="ml-2 text-white text-sm font-extrabold">info@waliwitiyadiwithura.ps.lk</span>
                </div>
                <div class="flex justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="red" data-slot="icon" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <span class="ml-2 text-white text-sm font-extrabold">0777-123-456</span>
                </div>
            </div>
            <div class="flex gap-2 lg:justify-end justify-center items-center">
                <a
                    href="{{route("set-locale","si")}}"
                    class="border border-white p-1 text-white rounded-md w-8 h-8 flex justify-center hover:bg-white hover:text-black cursor-pointer">
                    සි
                </a>
                <a
                href="{{route("set-locale","en")}}"
                    class="border border-white p-1 text-white rounded-md w-8 h-8 flex justify-center hover:bg-white hover:text-black cursor-pointer">
                    En
                </a>
                <a
                href="{{route("set-locale","tm")}}"
                    class="border border-white p-1 text-white rounded-md w-8 h-8 flex justify-center hover:bg-white hover:text-black cursor-pointer">
                    த
                </a>
            </div>
        </div>
    </div>
    <div class="w-full md:py-2 pb-10 pt-5 bg-[#671d09]">
        <div class="container mx-auto grid md:grid-cols-3 grid-col-1 gap-3 items-center">
            <div class="flex md:justify-start justify-center px-2">
                <img src="{{ Vite::asset('resources/images/logo.png') }}" alt="welivitiyadivithura pradeshiya saba logo"
                    loading="lazy">
            </div>
            <div class="text-2xl md:text-[2.6998ch] text-white text-center items-center font-black">
                {{__('common.site-title')}}
            </div>
            <div class="md:flex hidden justify-end px-2">
                <img src="{{ Vite::asset('resources/images/gov-logo.png') }}" alt="goverment logo srilanka"
                    loading="lazy">
            </div>
        </div>
    </div>

    <div class="w-full border-b-2 border-[#671d09]">
        <div class="container mx-auto">
            <nav class="py-6 px-4">
                <div class="container mx-auto flex flex-wrap items-center justify-between">
                    <a href="{{route('public.home')}}" class="flex text-[#671d09] hover:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="#671d09" data-slot="icon" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <span class="ml-3 font-sans cursor-pointer font-extrabold ">Home</span>
                    </a>
                    <button data-collapse-toggle="mobile-menu" type="button"
                        class="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                        aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="#671d09" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" fill="#671d09" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <div class="hidden md:block w-full md:w-auto" id="mobile-menu">
                        <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <a href="{{route('public.home')}}"
                                    class="bg-[#671d09] md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-[#671d09] md:p-0 rounded focus:outline-none"
                                    aria-current="page">Home</a>
                            </li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                    class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-[#671d09] md:p-0 font-medium flex items-center justify-between w-full md:w-auto">Services
                                    <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg></button>
                                <!-- Dropdown menu -->
                                <div id="dropdownNavbar"{{--  --}}
                                    class="hidden bg-white text-base z-40 list-none divide-y divide-gray-100 rounded shadow my-4 w-[98%] md:w-44">
                                    <ul class="py-1" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#"
                                                class="text-sm hover:bg-[#671d09] text-gray-700 hover:text-white block px-4 py-2">Service 1</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#"
                                            class="text-sm hover:bg-[#671d09] text-gray-700 hover:text-white block px-4 py-2">Service 2</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#"
                                    class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-[#671d09] md:p-0">News</a>
                            </li>
                            <li>
                                <a href="{{route('public.about-us')}}"
                                    class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-[#671d09] md:p-0">About Us</a>
                            </li>
                            <li>
                                <a href="{{route('public.contact-us')}}"
                                    class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-[#671d09] md:p-0">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
