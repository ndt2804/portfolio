<template>
    <div
        class="flex flex-col md:flex-row md:space-x-6 md:space-y-0 bg-teal-100 max-w-5xl p-8 rounded-xl shadow-lg  justify-between  items-center mx-auto">
        <div class="flex flex-col justify-between">
            <h2 class="text-2xl font-bold dark:text-white md:text-4xl  text-center text-black">
                Contact
            </h2>
            <h3 class="text-gray-600 dark:text-gray-300 font-mono py-3 font-bold text-center">Feel free contact me
                nduytan.dev@gmail.com
            </h3>
            <img class="mx-auto rounded-3xl		" src="~/assets/contact.png" alt="Ảnh">
        </div>
        <div
            class="p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 font-mono  items-center mx-auto w-full text-black">
            <form class="flex flex-col space-y-4">
                <div class="grid grid-cols-2 gap-4 py-3 ">
                    <div>
                        <label for="" class="text-sm ">Full Name</label>
                        <input type="text" placeholder="Full Name"
                            class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-4">
                    </div>
                    <div>
                        <label for="" class="text-sm">Phone Number</label>
                        <input type="text" placeholder="Phone Number"
                            class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-4">
                    </div>
                </div>
                <label for="" class="text-sm">Email</label>
                <input type="text" placeholder="Email yourself"
                    class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300">
                <label for="" class="text-sm">Message</label>
                <textarea type="text" placeholder="What do you want to contact me for?"
                    class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                    rows="5"></textarea>
                <button
                    class="bg-teal-400 to-teal-500 text-white  border-none  inline-blocks self-end rounded-lg px-6 py-2 uppercase text-sm"
                    href="#">
                    Submit
                </button>

            </form>

        </div>
    </div>
</template>