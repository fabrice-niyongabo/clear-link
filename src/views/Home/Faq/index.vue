<template>
  <section class="py-12">
    <v-container>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p class="text-clear-link-blue-bg text-md font-semibold">Support</p>
          <h3
            class="text-4xl text-clear-link-darket-text font-[500] leading-[50px] tracking-[-0.88px] my-2"
          >
            FAQs
          </h3>
          <p class="text-clear-link-gray-text mt-1">
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please
            <span>chat to our friendly team</span>.
          </p>
        </div>
        <div class="col-span-1 md:col-span-2">
          <ul>
            <Question v-for="question in faqs" :key="question.id" />
          </ul>
        </div>
      </div>
    </v-container>
  </section>
</template>
<script setup>
import { ref } from "vue";
import Question from "./Question/index.vue";

const faqs = ref([
  {
    id: 1,
    title: "How many participants can join a ClearLink video conference?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    id: 2,
    title: "Can I use ClearLink on multiple devices?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    id: 3,
    title: "Is ClearLink compatible with other video conferencing platforms?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    id: 4,
    title: "How does ClearLink ensure the security of my video conferences?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    id: 5,
    title: "Do I need to download any software to use ClearLink?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    id: 6,
    title: "What kind of customer support does ClearLink provide?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
]);
</script>
