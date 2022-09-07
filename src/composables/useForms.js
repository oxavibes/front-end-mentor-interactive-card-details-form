import { reactive } from "vue";

export default function () {
  const form = reactive({
    cardName: "",
    cardNumber: "",
    cardExpMm: "",
    cardExpYy: "",
    cardCvc: "",
  });

  return {
    form,
  };
}
