<template>
  <v-container>
    <nav
      class="bg-clear-link-gray-bg border border-clear-link-gray-border px-[32px] py-[10px] rounded-full flex items-center justify-between gap-2"
    >
      <RouterLink to="/">
        <div class="flex items-start justify-center gap-2">
          <img src="@/assets/img/logo.png" alt="logo" />
          <h2 class="text-2xl font-semibold text-clear-link-darkest-text">
            ClearLink<span class="text-clear-link-lightblue-text">.</span>
          </h2>
        </div>
      </RouterLink>
      <ul class="flex items-center justify-between gap-10">
        <li
          class="text-clear-link-gray-text font-semibold flex items-center justify-center gap-2 hover:cursor-pointer hover:text-clear-link-lightblue-text transition-all duration-100"
        >
          <span>Products</span>
          <v-icon icon="mdi-chevron-down" />
        </li>
        <li
          class="text-clear-link-gray-text font-semibold flex items-center justify-center gap-2 hover:cursor-pointer hover:text-clear-link-lightblue-text transition-all duration-100"
        >
          <span>Solutions</span>
          <v-icon icon="mdi-chevron-down" />
        </li>
        <li
          class="text-clear-link-gray-text font-semibold flex items-center justify-center gap-2 hover:cursor-pointer hover:text-clear-link-lightblue-text transition-all duration-100"
        >
          <span>Resources</span>
          <v-icon icon="mdi-chevron-down" />
        </li>
        <li
          class="text-clear-link-gray-text font-semibold hover:cursor-pointer hover:text-clear-link-lightblue-text transition-all duration-100"
        >
          <span>Pricing</span>
        </li>
      </ul>
      <div class="flex items-center justify-between gap-2">
        <button
          class="bg-white px-[20px] py-[8px] rounded-full font-semibold text-clear-link-darket-text transition-all duration-100 hover:bg-white/80 text-sm"
        >
          Talk to sales
        </button>
        <button
          class="bg-clear-link-blue-bg px-[20px] py-[8px] rounded-full font-semibold text-white transition-all duration-100 hover:bg-clear-link-blue-bg/80 text-sm"
        >
          Sign up for free
        </button>
      </div>
    </nav>
  </v-container>
</template>
