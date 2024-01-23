<template>
  <section>
    <div class="grid grid-cols-2 gap-8">
      <div class="sm:pl-0 md:pl-20">
        <div class="w-full md:w-[80%] p-0 md:py-5">
          <h2
            class="text-4xl text-clear-link-darket-text font-semibold mt-[5px] leading-[50px] tracking-[-0.96px]"
          >
            Ready to clear the path to perfect communication?
          </h2>
          <ul class="p-3 my-1">
            <li class="flex items-start justify-start gap-2 mb-1">
              <v-icon
                icon="mdi-check-circle-outline"
                class="text-clear-link-blue-bg"
              />
              <span class="text-clear-link-gray-text">30 days free trial</span>
            </li>
            <li class="flex items-start justify-start gap-2 mb-1">
              <v-icon
                icon="mdi-check-circle-outline"
                class="text-clear-link-blue-bg"
              />
              <span class="text-clear-link-gray-text">Cancel at any time</span>
            </li>
            <li class="flex items-start justify-start gap-2 mb-1">
              <v-icon
                icon="mdi-check-circle-outline"
                class="text-clear-link-blue-bg"
              />
              <span class="text-clear-link-gray-text"
                >Access to all features</span
              >
            </li>
            <li class="flex items-start justify-start gap-2 mb-1">
              <v-icon
                icon="mdi-check-circle-outline"
                class="text-clear-link-blue-bg"
              />
              <span class="text-clear-link-gray-text"
                >Peronalized onboarding</span
              >
            </li>
          </ul>

          <div class="mt-2">
            <button
              class="bg-white font-semibold text-sm px-5 py-2 rounded-full transition-all duration-100 hover:bg-white/80 border border-[#98A2B3)]"
            >
              Talk to sales
            </button>
            <span>&nbsp;&nbsp;</span>
            <button
              class="bg-clear-link-blue-bg text-white font-semibold text-sm px-5 py-2 rounded-full transition-all duration-100 hover:bg-clear-link-blue-bg/80"
            >
              Start your free trial
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src="@/assets/img/screen.png" alt="" class="w-full" />
      </div>
    </div>
  </section>
</template>
