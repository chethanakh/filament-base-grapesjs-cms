<x-public-layout>
    <x-public.home-carousel />
    <div class="md:w-3/4 md:mx-auto mx-2 grid grid-cols-1 lg:grid-cols-5 md:gap-3 my-14">
        <div class="bg-white px-8 py-10 col-span-2 rounded-md mb-5 lg:mb-0">
            <h6 class="font-black text-xl mb-2 text-[#421717]">බලපත්‍ර / සහතික ලබා ගැනීම</h6>
            <span class="text-sm font-bold mb-6 block">පහත එක් එක් මාතෘකාව මත click කිරීමෙන් වැඩි විස්තර ලබා ගත
                හැක.</span>

            <ul class="list-none leading-[4ch]">
                <li>
                    <a href="" class="group">
                        <i class="fa fa-leaf text-white rounded-full bg-[#421717] p-2 group-hover:bg-white group-hover:text-[#671c09]"
                            aria-hidden="true"></i> <span
                            class="text-lg font-medium group-hover:text-[#671c09] text-[#421717] ml-3"> පාරිසරික ආරක්ෂණ
                            බලපත‍්‍රය</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="bg-white border border-[#671d09]  px-8 py-10 col-span-3 rounded-md ">
            <h6 class="font-black text-xl mb-2 text-[#421717]">ලේකම්තුමගේ පණිවිඩය</h6>

            <figure class="max-w-lg">
                <img class="h-auto w-full md:w-1/2 mb-5 mt-3 rounded-lg"
                    src="{{ Vite::asset('resources/images/secratary.png') }}" alt="image description">
            </figure>

            <p class="text-lg font-light mb-2 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Magni a
                corrupti saepe ducimus minima quos perferendis itaque dolores quam ratione maiores beatae consequatur
                libero, facilis, illo possimus. Iste, itaque harum.</p>
        </div>
    </div>

    <div class="w-full bg-[#671d09] py-12 text-center px-8">
        <div class="mb-10">
            <h2 class="text-white font-bold text-2xl mb-2">අපගේ දැක්ම</h2>
            <p class="text-white text-lg">අපගේ දැක්ම මෙතන යාවත්කාලින විය යුතුයි</p>
        </div>
        <hr class="w-2/3 mx-auto">
        <div class="mt-10">
            <h2 class="text-white font-bold text-2xl mb-2">අපගේ මෙහෙවර</h2>
            <p class="text-white text-lg">අපගේ මෙහෙවර මෙතන යාවත්කාලින විය යුතුයි. අපගේ මෙහෙවර</p>
        </div>
    </div>

    <div class="container my-15 mx-auto">
        <div class="max-w-full mx-auto p-5 sm:p-10 relative">

            <div class="bg-white border border-[#671d09]  p-5">
                <div class="border-b mb-5 flex justify-between text-sm">
                    <div class="text-[#671d09] flex items-center pb-2 pr-2 border-b-2 border-[#671d09] uppercase">
                        <a href="#" class="font-semibold inline-block">Latest News</a>
                    </div>
                    <a href="#">See All</a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div class="relative w-full flex items-end justify-start text-left bg-cover bg-center"
                        style="min-height: 400px; background-image:url(https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=);">
                        <div
                            class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900">
                        </div>
                        <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <a href="#"
                                class="text-xs bg-[#671d09] text-white px-5 py-2 uppercase hover:bg-white hover:text-[#671d09] transition ease-in-out duration-500">Latest</a>
                            <div class="text-white font-regular flex flex-col justify-start">
                                <span class="text-3xl leading-0 font-semibold">25</span>
                                <span class="-mt-3">May</span>
                            </div>
                        </div>
                        <main class="p-5 z-10">
                            <a href="#"border-[#671d09]
                                class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Dr.
                                Abdullah Abdullah's Presidential Election Campaign
                            </a>
                        </main>

                    </div>

                    <div class="lg:border-l lg:pl-4">
                        <div class="flex items-start mb-3 pb-3">
                            <a href="#" class="inline-block mr-3">
                                <div class="w-20 h-20 bg-cover bg-center"
                                    style="background-image:url(https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&m=1227967060&s=612x612&w=0&h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4=);">
                                </div>
                            </a>
                            <div class="text-sm">
                                <p class="text-gray-600 text-xs">Aug 18</p>
                                <a href="#"
                                    class="text-gray-900 font-medium hover:text-[#671d09] leading-none">Cristiano
                                    Ronaldo of Juventus FC looks dejected during the...</a>
                            </div>
                        </div>
                        <div class="flex items-start mb-3 pb-3">
                            <a href="#" class="inline-block mr-3">
                                <div class="w-20 h-20 bg-cover bg-center"
                                    style="background-image:url(https://media.gettyimages.com/photos/lionel-messi-and-marcandre-ter-stegen-of-fc-barcelona-waits-in-the-picture-id1266763488?k=6&m=1266763488&s=612x612&w=0&h=8vxz9HfQVfrff5N7d1lBVxtLamRQGK3J3lyHkUuuIiw=);">
                                </div>
                            </a>
                            <div class="text-sm w-2/3">
                                <p class="text-gray-600 text-xs">Jan 18</p>
                                <a href="#"
                                    class="text-gray-900 font-medium hover:text-[#671d09] leading-none">Barcelona v
                                    Bayern Munich </a>
                            </div>
                        </div>
                        <div class="flex items-start mb-3 pb-3">
                            <a href="#" class="inline-block mr-3">
                                <div class="w-20 h-20 bg-cover bg-center"
                                    style="background-image:url(https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&m=1227967060&s=612x612&w=0&h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4=);">
                                </div>
                            </a>
                            <div class="text-sm">
                                <p class="text-gray-600 text-xs">Aug 18</p>
                                <a href="#"
                                    class="text-gray-900 font-medium hover:text-[#671d09] leading-none">Cristiano
                                    Ronaldo of Juventus FC looks dejected during the...</a>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <a href="#" class="inline-block mr-3">
                                <div class="w-20 h-20 bg-cover bg-center"
                                    style="background-image:url(https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-looks-dejected-following-his-teams-in-picture-id1266341828?k=6&m=1266341828&s=612x612&w=0&h=FZi-bSrIlOEE01780h79GsbBYPqZo2l3aaCxoktWADY=);">
                                </div>
                            </a>
                            <div class="text-sm w-2/3">
                                <p class="text-gray-600 text-xs">July 23</p>
                                <a href="#"
                                    class="text-gray-900 font-medium hover:text-[#671d09] leading-none">Barcelona v
                                    Bayern Munich - UEFA Champions League </a>
                            </div>
                        </div>
                    </div>

                    <div class="lg:border-l lg:pl-4">
                        <div class="flex items-start mb-3 pb-3">
                            <a href="#" class="inline-block mr-3">
                                <div class="w-20 h-20 bg-cover bg-center"
                                    style="background-image:url(https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&m=1227967060&s=612x612&w=0&h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4=);">
                                </div>
                            </a>
                            <div class="text-sm">
                                <p class="text-gray-600 text-xs">Aug 18</p>
                                <a href="#"
                                    class="text-gray-900 font-medium hover:text-[#671d09] leading-none">Cristiano
                                    Ronaldo of Juventus FC looks dejected during the...</a>
                            </div>
                        </div>
                        <div class="flex items-start mb-3 pb-3">
                            <a href="#" class="inline-block mr-3">
                                <div class="w-20 h-20 bg-cover bg-center"
                                    style="background-image:url(https://media.gettyimages.com/photos/lionel-messi-and-marcandre-ter-stegen-of-fc-barcelona-waits-in-the-picture-id1266763488?k=6&m=1266763488&s=612x612&w=0&h=8vxz9HfQVfrff5N7d1lBVxtLamRQGK3J3lyHkUuuIiw=);">
                                </div>
                            </a>
                            <div class="text-sm w-2/3">
                                <p class="text-gray-600 text-xs">Jan 18</p>
                                <a href="#"
                                    class="text-gray-900 font-medium hover:text-[#671d09] leading-none">Barcelona v
                                    Bayern Munich </a>
                            </div>
                        </div>
                        <div class="flex items-start mb-3 pb-3">
                            <a href="#" class="inline-block mr-3">
                                <div class="w-20 h-20 bg-cover bg-center"
                                    style="background-image:url(https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&m=1227967060&s=612x612&w=0&h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4=);">
                                </div>
                            </a>
                            <div class="text-sm">
                                <p class="text-gray-600 text-xs">Aug 18</p>
                                <a href="#"
                                    class="text-gray-900 font-medium hover:text-[#671d09] leading-none">Cristiano
                                    Ronaldo of Juventus FC looks dejected during the...</a>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <a href="#" class="inline-block mr-3">
                                <div class="w-20 h-20 bg-cover bg-center"
                                    style="background-image:url(https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-looks-dejected-following-his-teams-in-picture-id1266341828?k=6&m=1266341828&s=612x612&w=0&h=FZi-bSrIlOEE01780h79GsbBYPqZo2l3aaCxoktWADY=);">
                                </div>
                            </a>
                            <div class="text-sm w-2/3">
                                <p class="text-gray-600 text-xs">July 23</p>
                                <a href="#"
                                    class="text-gray-900 font-medium hover:text-[#671d09] leading-none">Barcelona v
                                    Bayern Munich - UEFA Champions League </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
</x-public-layout>
