<x-public-layout>
    <div class="bg-white">
        <section>
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div class="lg:col-span-2 lg:py-12 text-center lg:text-left">
                        <h2 class="text-xl font-black text-center lg:text-left">
                            අප හා සම්බන්ද වීමට.
                        </h2>

                        <div class="mt-8">
                            <h6 class="text-md text-[#671d09]">ප්‍රධාන කාර්යාලය</h6>
                            <address class="mt-2 not-italic text-neutral-800">282 Kevin Brook, Imogeneborough, CA 58517
                            </address>
                        </div>


                        <div class="mt-8">
                            <h6 class="text-md text-[#671d09]">ෆැක්ස්</h6>
                            <address class="mt-2 not-italic text-neutral-800">282 Kevin Brook, Imogeneborough, CA 58517
                            </address>
                            <address class="mt-2 not-italic text-neutral-800">282 Kevin Brook, Imogeneborough, CA 58517
                            </address>
                        </div>


                        <div class="mt-8">
                            <h6 class="text-md text-[#671d09]">දුරකතන අංක</h6>
                            <address class="mt-2 not-italic text-neutral-800">282 Kevin Brook, Imogeneborough, CA 58517
                            </address>
                            <address class="mt-2 not-italic text-neutral-800">282 Kevin Brook, Imogeneborough, CA 58517
                            </address>
                        </div>

                        <div class="mt-8">
                            <h6 class="text-md text-[#671d09]">විද්‍යුත් තැපෑල</h6>
                            <address class="mt-2 not-italic text-neutral-800">282 Kevin Brook, Imogeneborough, CA 58517
                            </address>
                        </div>
                    </div>

                    <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <h2 class="h2 mb-5 text-xl font-black text-center lg:text-left">
                            ඔබගේ අදහස් හා යෝජනා අප වෙත යොමු කරන්න.
                        </h2>
                        <form action="" class="space-y-4">
                            <div>
                                <label class="sr-only" for="name">Name</label>
                                <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Name"
                                    type="text" id="name" />
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="sr-only" for="email">Email</label>
                                    <input class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email address" type="email" id="email" />
                                </div>

                                <div>
                                    <label class="sr-only" for="phone">Phone</label>
                                    <input class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Phone Number" type="tel" id="phone" />
                                </div>
                            </div>

                            <div>
                                <label class="sr-only" for="message">Message</label>

                                <textarea class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Message" rows="8" id="message"></textarea>
                            </div>

                            <div class="mt-4">
                                <button type="submit"
                                    class="inline-block w-full rounded-lg bg-[#671d09] px-5 py-3 font-medium text-white sm:w-auto">
                                    Send Enquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <div class="w-full mb-5">
        <div class="w-full h-[300px]">
            <div id="canvas-for-googlemap" style="height:100%; width:100%;max-width:100%;"><iframe
                    style="height:100%;width:100%;border:0;" frameborder="0"
                    src="https://www.google.com/maps/embed/v1/place?q=Welivitiya+-+Divithura+Pradeshiya+Sabha,+Agaliya+Mulkada+Road,+Sri+Lanka&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
            </div>
            <style>
                #canvas-for-googlemap img.text-marker {
                    max-width: none !important;
                    background: none !important;
                }

                img {
                    max-width: none
                }
            </style>
        </div>
    </div>
</x-public-layout>
