<script setup>
import { ref, reactive, provide } from "vue";

import CreditCard from "@/components/CreditCard.vue";
import CreditCardForm from "@/components/CreditCardForm.vue";
import CreditCardMessage from "@/components/CreditCardMessage.vue";

const showMessage = ref(false);

const openMessage = () => {
  showMessage.value = true;
};

const hideMessage = () => {
  showMessage.value = false;
};

provide("message", { showMessage, openMessage, hideMessage });

let card = reactive({
  number: "",
  holderName: "",
  yearExp: "",
  monthExp: "",
  cvc: "",
});

const defaultCard = {
  number: "0000 0000 0000 0000",
  holderName: "Jane Appleseed",
  monthExp: "MM",
  yearExp: "YY",
  cvc: "000",
};

const emptyCard = {
  number: "",
  holderName: "",
  monthExp: "",
  yearExp: "",
  cvc: "",
};

function resetCard() {
  Object.assign(card, emptyCard);
}

provide("card", { card, defaultCard, resetCard });
</script>

<template>
  <div class="app-container">
    <div class="aside-section">
      <CreditCard :isFront="true"></CreditCard>
      <CreditCard></CreditCard>
    </div>

    <div class="content-section">
      <div class="container">
        <CreditCardMessage
          v-if="showMessage"
          title="Thank you!"
          message="We've added your card details"
        />
        <CreditCardForm v-else />
      </div>
    </div>
  </div>
</template>

<style>
.aside-section {
  position: relative;
  height: 240px;
  background-image: url("@/assets/images/bg-main-mobile.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.content-section {
  height: calc(100vh - 240px);
  display: grid;
  place-items: center;
}

.container {
  max-width: 40rem;
  padding-top: 5.5em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  padding-bottom: 4em;
}

@media only screen and (min-width: 64em) {
  .app-container {
    display: flex;
  }

  .aside-section,
  .content-section {
    height: 100vh;
  }

  .aside-section {
    flex: 1;
  }

  .content-section {
    flex: 2;
  }
}
</style>
