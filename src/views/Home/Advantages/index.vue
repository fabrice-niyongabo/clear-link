<template>
  <section class="py-10 min-h-[50vh]">
    <v-container>
      <div>
        <p class="text-clear-link-blue-bg text-sm font-semibold">
          The ClearLink Advantage
        </p>
        <h2
          class="text-4xl text-clear-link-darket-text font-semibold mt-[5px] leading-[60px] tracking-[-0.96px]"
        >
          Why choose ClearLink?
        </h2>
        <p class="text-clear-link-gray-text w-[50%] mt-1">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[80px]">
        <div class="grid col-span-1 md:col-span-2 grid-cols-2 gap-12">
          <div>
            <div
              class="flex items-center justify-center bg-clear-link-gray-bg border border-clear-link-gray-border rounded-full w-[40px] h-[40px] p-2"
            >
              <img
                src="@/assets/img/video-recorder.png"
                class="w-[30px]"
                alt=""
              />
            </div>
            <h3
              class="text-clear-link-darket-text text-lg font-semibold my-[10px]"
            >
              Crystal-clear HD video
            </h3>
            <p class="text-clear-link-gray-text text-xs">
              No more pixelation or blurriness – just stunning, lifelike clarity
              that brings your team closer in meetings.
            </p>
          </div>
          <div>
            <div
              class="flex items-center justify-center bg-clear-link-gray-bg border border-clear-link-gray-border rounded-full w-[40px] h-[40px] p-2"
            >
              <img src="@/assets/img/recording.png" class="w-[30px]" alt="" />
            </div>
            <h3
              class="text-clear-link-darket-text text-lg font-semibold my-[10px]"
            >
              Noise-canceling audio
            </h3>
            <p class="text-clear-link-gray-text text-xs">
              Say goodbye to distractions with our advanced audio tech for
              crisp, interruption-free conversations.
            </p>
          </div>
          <div>
            <div
              class="flex items-center justify-center bg-clear-link-gray-bg border border-clear-link-gray-border rounded-full w-[40px] h-[40px] p-2"
            >
              <img src="@/assets/img/calendar.png" class="w-[30px]" alt="" />
            </div>
            <h3
              class="text-clear-link-darket-text text-lg font-semibold my-[10px]"
            >
              Scheduling made easy
            </h3>
            <p class="text-clear-link-gray-text text-xs">
              Streamline your agenda with ClearLink's intuitive scheduling. Set
              up meetings, send invitations, and receive reminders in one place.
            </p>
          </div>
          <div>
            <div
              class="flex items-center justify-center bg-clear-link-gray-bg border border-clear-link-gray-border rounded-full w-[40px] h-[40px] p-2"
            >
              <img
                src="@/assets/img/lock-unlocked.png"
                class="w-[30px]"
                alt=""
              />
            </div>
            <h3
              class="text-clear-link-darket-text text-lg font-semibold my-[10px]"
            >
              Bank-grade security
            </h3>
            <p class="text-clear-link-gray-text text-xs">
              Your privacy is our priority with bank-grade security protocols
              safeguarding your meetings and data from unwanted intruders.
            </p>
          </div>
        </div>
        <div class="relative h-full bg-black">
          <img
            src="@/assets/img/group.png"
            class="w-auto max-w-full h-full"
            alt=""
          />
          <div class="absolute top-[-180px] ml-[1%]">
            <img src="@/assets/img/arrow.png" class="h-[200px]" alt="" />
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>
