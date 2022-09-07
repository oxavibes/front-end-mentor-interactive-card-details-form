<script setup>
import { ref, computed, inject } from "vue";

const { card, defaultCard } = inject("card");

const props = defineProps({
  isFront: {
    default: false,
  },
});

const isFront = ref(props.isFront);

const cardHolderName = computed(() => {
  return card.holderName !== "" ? card.holderName : defaultCard.holderName;
});

const cardNumber = computed(() => {
  return card.number !== "" ? card.number : defaultCard.number;
});

const cardMonthExp = computed(() => {
  return card.monthExp !== "" ? card.monthExp : defaultCard.monthExp;
});

const cardYearExp = computed(() => {
  return card.yearExp !== "" ? card.yearExp : defaultCard.yearExp;
});

const cardCvc = computed(() => {
  return card.cvc !== "" ? card.cvc : defaultCard.cvc;
});
</script>

<template>
  <div class="card card-front" v-if="isFront">
    <img
      class="card-logo"
      src="@/assets/images/card-logo.svg"
      alt="card-logo"
    />

    <div class="card-content">
      <p class="card-number">{{ cardNumber }}</p>
    </div>

    <div class="card-footer">
      <p class="card-holder-name">{{ cardHolderName }}</p>
      <p class="card-exp-date">
        <span class="card-exp-date-mm">{{ cardMonthExp }}</span>
        /
        <span class="card-exp-date-yy">{{ cardYearExp }}</span>
      </p>
    </div>
  </div>

  <div class="card card-back" v-else>
    <div class="card-cvc">{{ cardCvc }}</div>
  </div>
</template>

<style scoped>
.card {
  color: white;
  font-family: inherit;
  width: 290px;
  height: 160px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
}

.card-front {
  z-index: 2;
  top: 120px;
  left: 15px;
  background-image: url("@/assets/images/bg-card-front.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.card-front .card-logo {
  width: 50px;
  margin-bottom: auto;
}

.card-front .card-content {
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
  letter-spacing: 2.5px;
  font-weight: 400;
}

.card-front .card-footer {
  display: flex;
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  justify-content: space-between;
  letter-spacing: 1px;
}

.card-back {
  z-index: 1;
  top: 30px;
  right: 15px;
  background: url("@/assets/images/bg-card-back.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.card-back .card-cvc {
  position: relative;
  top: 50px;
  left: 211px;
  letter-spacing: 1px;
  font-weight: 300;
  font-size: 1rem;
}

@media only screen and (min-width: 64em) {
  .card-front {
    top: calc(50vh - 160px);
    left: auto;
    right: -72.5px;
  }

  .card-back {
    top: calc(50vh + 25px);
    left: auto;
    right: -145px;
  }
}
</style>
