<script setup>
import { ref, inject } from "vue";
import icon from "@/assets/images/icon-complete.svg";

const props = defineProps({
  title: String,
  message: String,
});

const title = ref(props.title);
const message = ref(props.message);

const { hideMessage } = inject("message");
const { resetCard } = inject("card");

const onClick = () => {
  hideMessage();
  resetCard();
};
</script>

<template>
  <div class="credit-card-message">
    <img width="80" height="80" :src="icon" alt="check-icon" />
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <button class="form-button" @click="onClick">Continue</button>
  </div>
</template>

<style scoped>
.credit-card-message {
  font-family: inherit;
  text-align: center;
}
.credit-card-message > *:not(:last-child) {
  margin-bottom: 2.5rem;
}
.credit-card-message h2 {
  text-transform: uppercase;
  font-weight: 700;
}
.credit-card-message p {
  font-size: 1.6rem;
  color: #a9a9ac;
}
</style>
