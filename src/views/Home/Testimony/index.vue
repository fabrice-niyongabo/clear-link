<template>
  <section class="bg-[#F9FAFB] py-12">
    <v-container>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="w-full">
          <img
            src="@/assets/img/companies/shopify.png"
            class="h-[20px]"
            alt=""
          />
          <div class="flex items-center justify-start gap-1 my-10">
            <v-icon size="small" icon="mdi-star" class="text-clear-link-gold" />
            <v-icon size="small" icon="mdi-star" class="text-clear-link-gold" />
            <v-icon size="small" icon="mdi-star" class="text-clear-link-gold" />
            <v-icon size="small" icon="mdi-star" class="text-clear-link-gold" />
            <v-icon size="small" icon="mdi-star" class="text-clear-link-gold" />
          </div>
          <h3
            class="text-4xl text-clear-link-darket-text font-[500] leading-[50px] tracking-[-0.88px]"
          >
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </h3>
          <div class="flex items-center justify-between mt-5">
            <div class="flex items-center justify-center gap-2">
              <img
                src="@/assets/img/avatar.png"
                alt=""
                class="w-[40px] h-[40px] rounded-full"
              />
              <div>
                <p class="text-clear-link-darket-text text-sm font-semibold">
                  Sarah Thompson
                </p>
                <p class="text-clear-link-gray-text text-xs">
                  Project Manager, Shopify
                </p>
              </div>
            </div>
            <div class="flex items-center justify-center gap-4">
              <button
                class="bg-white p-3 rounded-full border shadow-md border-clear-link-light-gray-border transition-all duration-500 hover:!bg-clear-link-light-gray-border"
              >
                <v-icon
                  icon="mdi-arrow-left"
                  class="text-clear-link-lightblue-text text-sm"
                />
              </button>
              <button
                class="bg-white p-3 rounded-full border shadow-md border-clear-link-light-gray-border transition-all duration-500 hover:!bg-clear-link-light-gray-border"
              >
                <v-icon
                  icon="mdi-arrow-right"
                  class="text-clear-link-lightblue-text text-sm"
                />
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src="@/assets/img/people.png"
            class="block mx-auto w-auto h-auto max-w-full"
            alt=""
          />
        </div>
      </div>
    </v-container>
  </section>
</template>
