<template>
  <v-container>
    <div class="flex items-start justify-between mt-10">
      <div class="flex-1">
        <h2 class="font-semibold text-5xl tracking-[-1.28px] leading-[55px]">
          Uniting the world,<br />
          one video call at a time
        </h2>
        <p class="text-clear-link-gray-text leading-[25px] w-[70%] mt-3">
          Experience the future of communication with ClearLink - where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>

        <div class="flex items-center justify-start gap-4 my-10">
          <button
            class="bg-clear-link-blue-bg text-white font-semibold text-sm px-5 py-2 rounded-full transition-all duration-100 hover:bg-clear-link-blue-bg/80"
          >
            Start your free trial
          </button>
          <RouterLink to="#">
            <div class="flex items-center justify-center gap-2">
              <img src="@/assets/img/discover.png" alt="discover" />
              <span class="text-clear-link-blue-bg text-sm font-semibold"
                >Discover AI assistant</span
              >
            </div>
          </RouterLink>
        </div>

        <div class="flex items-center justify-start gap-4">
          <img src="@/assets/img/avatars.png" alt="avatars" />
          <div>
            <div class="flex items-center justify-start gap-1 text-sm">
              <div class="flex items-center justify-between gap-1">
                <i class="fa fa-star text-clear-link-gold"></i>
                <i class="fa fa-star text-clear-link-gold"></i>
                <i class="fa fa-star text-clear-link-gold"></i>
                <i class="fa fa-star text-clear-link-gold"></i>
                <i class="fa fa-star text-clear-link-gold"></i>
              </div>
              <span class="text-clear-link-darket-text">5.0</span>
            </div>
            <span class="text-sm text-clear-link-gray-text font-[500]"
              >from 3,000+ reviews</span
            >
          </div>
        </div>
      </div>
      <div
        class="w-[45%] bg-clear-link-light-gray-bg border border-clear-link-gray-border p-7 rounded-lg"
      >
        <div class="grid grid-cols-3 gap-4">
          <div class="bg-[#FF9C66] rounded-md">
            <img
              src="@/assets/img/person1.png"
              class="w-auto h-[110px] block mx-auto"
              alt="person"
            />
          </div>
          <div class="bg-[#D6BBFB] rounded-md">
            <img
              src="@/assets/img/person2.png"
              class="w-auto h-[110px] block mx-auto"
              alt="person"
            />
          </div>
          <div class="bg-[#ACDC79] rounded-md">
            <img
              src="@/assets/img/person3.png"
              class="w-auto h-[110px] block mx-auto"
              alt="person"
            />
          </div>
          <div class="bg-[#B3B8DB] rounded-md">
            <img
              src="@/assets/img/person4.png"
              class="w-auto h-[110px] block mx-auto"
              alt="person"
            />
          </div>
          <div class="bg-[#FEC84B] rounded-md">
            <img
              src="@/assets/img/person5.png"
              class="w-auto h-[110px] block mx-auto"
              alt="person"
            />
          </div>
          <div class="bg-[#FEA3B4] rounded-md">
            <img
              src="@/assets/img/person6.png"
              class="w-auto h-[110px] block mx-auto"
              alt="person"
            />
          </div>
        </div>
        <div class="flex items-center justify-center gap-2 mt-5">
          <div
            class="flex items-center justify-center bg-white rounded-full p-[12px] border border-clear-link-gray-border transition-all duration-500 hover:cursor-pointer hover:!bg-clear-link-light-gray-border"
          >
            <img src="@/assets/img/microphone.png" alt="" />
          </div>
          <div
            class="flex items-center justify-center bg-white rounded-full p-[12px] border border-clear-link-gray-border transition-all duration-500 hover:cursor-pointer hover:!bg-clear-link-light-gray-border"
          >
            <img src="@/assets/img/video-recorder.png" alt="" />
          </div>
          <div
            class="flex items-center justify-center bg-white rounded-full p-[12px] border border-clear-link-gray-border transition-all duration-500 hover:cursor-pointer hover:!bg-clear-link-light-gray-border"
          >
            <img src="@/assets/img/pc.png" alt="" />
          </div>
          <div
            class="flex items-center justify-center bg-white rounded-full p-[12px] border border-clear-link-gray-border transition-all duration-500 hover:cursor-pointer hover:!bg-clear-link-light-gray-border"
          >
            <img src="@/assets/img/face-smile.png" alt="" />
          </div>
          <div
            class="flex items-center justify-center bg-white rounded-full p-[12px] border border-clear-link-gray-border transition-all duration-500 hover:cursor-pointer hover:!bg-clear-link-light-gray-border"
          >
            <img src="@/assets/img/message-text-circle.png" alt="" />
          </div>
          <div
            class="flex items-center justify-center bg-white rounded-full p-[12px] border border-clear-link-gray-border transition-all duration-500 hover:cursor-pointer hover:!bg-clear-link-light-gray-border"
          >
            <img src="@/assets/img/settings.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
