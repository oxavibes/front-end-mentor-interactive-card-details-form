<script setup>
import { ref, inject } from "vue";
import { object, string } from "yup";
import { Field, Form, ErrorMessage } from "vee-validate";

const { card } = inject("card");
const { openMessage } = inject("message");

const mask = ref("{{9999}} {{9999}} {{9999}} {{9999}}");

const schema = object({
  "cardholder-name": string()
    .required("Can't be blank")
    .matches(/^[A-zÀ-ú'\s]*$/, "Wrong format, letters only"),

  "card-number": string()
    .required("Can't be blank")
    .matches(/(\d{4} *\d{4} *\d{4} *\d{4})$/, "Wrong format"),

  "card-month-exp": string()
    .required("Can't be blank")
    .matches(/0[1-9]|1[0-2]/, "Invalid month"),

  "card-year-exp": string()
    .required("Can't be blank")
    .matches(/2[0-9]|3[0-5]/, "Invalid year"),

  "card-cvc": string()
    .required("Can't be blank")
    .matches(/[0-9][0-9][0-9]/, "Invalid year"),
});

const onSubmit = () => {
  openMessage();
};
</script>

<template>
  <Form class="form" @submit="onSubmit" :validation-schema="schema">
    <div class="form-control">
      <label class="form-label" for="cardholder-name">Cardholder name</label>
      <Field
        type="text"
        maxlength="25"
        class="form-input"
        id="cardholder-name"
        name="cardholder-name"
        v-model="card.holderName"
        placeholder="Jane Appleseed"
      />
      <ErrorMessage class="form-input-error" name="cardholder-name" />
    </div>

    <div class="form-control">
      <label class="form-label" for="card-number">Card number</label>
      <Field
        type="text"
        maxlength="19"
        v-mask="mask"
        id="card-number"
        class="form-input"
        name="card-number"
        v-model="card.number"
        placeholder="0000 0000 0000 0000"
      />
      <ErrorMessage class="form-input-error" name="card-number" />
    </div>

    <div class="form-control">
      <div class="d-flex">
        <div class="flex-2">
          <div class="d-flex">
            <div class="flex-1">
              <label class="form-label" for="card-month-exp">Exp. mm</label>
              <Field
                type="text"
                maxlength="2"
                class="form-input"
                v-model="card.monthExp"
                id="card-month-exp"
                name="card-month-exp"
                placeholder="01-12"
              />
              <ErrorMessage class="form-input-error" name="card-month-exp" />
            </div>

            <div class="flex-1">
              <label class="form-label" for="card-year-exp">Exp. yy</label>
              <Field
                type="text"
                maxlength="2"
                class="form-input"
                v-model="card.yearExp"
                id="card-year-exp"
                name="card-year-exp"
                placeholder="25-35"
              />
              <ErrorMessage class="form-input-error" name="card-year-exp" />
            </div>
          </div>
        </div>

        <div class="flex-1">
          <label class="form-label" for="card-cvc">Cvc</label>
          <Field
            type="text"
            maxlength="3"
            class="form-input"
            id="card-cvc"
            v-model="card.cvc"
            name="card-cvc"
            placeholder="000"
          />
          <ErrorMessage class="form-input-error" name="card-cvc" />
        </div>
      </div>
    </div>

    <button class="form-button">Confirm</button>
  </Form>
</template>

<style>
.form-label {
  display: block;
  padding-bottom: 5px;
}
.d-flex {
  display: flex;
}

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 2;
}

.d-flex > *:first-child {
  margin-right: 1rem;
}

.flex-2:not(:last-child) {
  margin-right: 2rem;
}

.form-control {
  margin-bottom: 2rem;
}

.form .form-control:last-of-type {
  margin-bottom: 3rem;
}

.form-label {
  display: block;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 1.8px;
  font-weight: 600;
  padding-bottom: 0.8rem;
}

.form-input {
  margin-bottom: 10px;
  font-size: 1.6rem;
  font-family: inherit;
  display: block;
  width: 100%;
  height: 5rem;
  border-top: 1.5px solid hsl(270, 3%, 87%);
  border-bottom: 1.5px solid hsl(270, 3%, 87%);
  border-left: 1px solid hsl(270, 3%, 87%);
  border-right: 1px solid hsl(270, 3%, 87%);
  border-radius: 0.5rem;
  padding: 0 1.5rem 0 1.5rem;
}

.form-input-error {
  display: block;
  font-size: 1.4rem;
  color: red;
  letter-spacing: 1px;
}

.form-input:focus {
  outline-color: hsl(278, 68%, 11%);
}

.form-input-invalid:focus {
  outline-color: red;
}

.form-input::placeholder {
  font-size: 1.6rem;
  letter-spacing: 1px;
  font-family: "Space Grotesk", sans-serif;
  color: #a9a9ac;
}

.form-button {
  width: 100%;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.8rem;
  background-color: hsl(278, 68%, 11%);
  color: white;
  border-style: none;
  border-radius: 8px;
  padding: 15px 0 15px 0;
  font-weight: 300;
  letter-spacing: 1px;
  outline: none;
}

.form-button:focus {
  box-shadow: 0 0 0 2pt orange;
}

.form-button:disabled {
  background-color: grey;
  color: white;
}
</style>
