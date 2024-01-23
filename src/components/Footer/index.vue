<template>
  <footer class="pt-16">
    <v-container>
      <div class="flex items-start justify-start flex-col md:flex-row gap-4">
        <div class="w-full md:w-[400px]">
          <div class="flex items-start justify-start gap-2">
            <img src="@/assets/img/logo.png" alt="logo" width="20" />
            <h2 class="text-lg font-semibold text-clear-link-darkest-text">
              ClearLink<span class="text-clear-link-lightblue-text">.</span>
            </h2>
          </div>
          <p class="text-clear-link-gray-text mt-5">
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div class="flex-1">
          <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <h4 class="text-[#667085] font-semibold text-xs">Product</h4>
              <ul class="mt-3">
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Overview</RouterLink>
                </li>
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Features </RouterLink>
                </li>
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Solutions </RouterLink>
                </li>
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Tutorials </RouterLink>
                </li>
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Pricing</RouterLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-[#667085] font-semibold text-xs">Company</h4>
              <ul class="mt-3">
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">About us</RouterLink>
                </li>
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Careers</RouterLink>
                </li>
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Press</RouterLink>
                </li>
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">News</RouterLink>
                </li>
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Contact</RouterLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-[#667085] font-semibold text-xs">Resources</h4>
              <ul class="mt-3">
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Blog</RouterLink>
                </li>
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Events</RouterLink>
                </li>
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Help centre</RouterLink>
                </li>
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Tutorials</RouterLink>
                </li>
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Support</RouterLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-[#667085] font-semibold text-xs">Legal</h4>
              <ul class="mt-3">
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Terms</RouterLink>
                </li>
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Privacy</RouterLink>
                </li>
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Cookies</RouterLink>
                </li>
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Licenses</RouterLink>
                </li>
                <li
                  class="mb-3 text-clear-link-gray-text font-semibold text-md"
                >
                  <RouterLink to="#">Contact</RouterLink>
                </li>
              </ul>
            </div>
            <div>
              <p class="text-clear-link-blue-bg font-semibold">Get the app</p>
              <div class="mt-3">
                <RouterLink to="#">
                  <img
                    src="@/assets/img/applestore.png"
                    alt=""
                    class="w-full"
                  />
                </RouterLink>
                <RouterLink to="#" class="mt-3 block">
                  <img src="@/assets/img/playstore.png" alt="" class="w-full" />
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
    <div class="bg-[#F9FAFB] py-3">
      <v-container>
        <div
          class="flex items-center justify-between flex-col gap-4 md:flex-row"
        >
          <p class="text-clear-link-gray-text">
            © 2023 ClearLink. All rights reserved.
          </p>
          <div class="flex items-center justify-center gap-2">
            <RouterLink to="#" class="text-clear-link-gray-text">
              <v-icon icon="mdi-linkedin" />
            </RouterLink>
            <RouterLink to="#" class="text-clear-link-gray-text">
              <v-icon icon="mdi-twitter" />
            </RouterLink>
            <RouterLink to="#" class="text-clear-link-gray-text">
              <v-icon icon="mdi-facebook" />
            </RouterLink>
            <RouterLink to="#" class="text-clear-link-gray-text">
              <v-icon icon="mdi-instagram" />
            </RouterLink>
            <RouterLink to="#" class="text-clear-link-gray-text">
              <v-icon icon="mdi-github" />
            </RouterLink>
            <RouterLink to="#" class="text-clear-link-gray-text">
              <v-icon icon="mdi-youtube" />
            </RouterLink>
          </div>
        </div>
      </v-container>
    </div>
  </footer>
</template>

<style scoped>
a:hover {
  color: #175cd3;
}
</style>
