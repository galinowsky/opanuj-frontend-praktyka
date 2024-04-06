<template>
  <div className="grid grid-cols-2 gap-x-4">
    <NumberInput v-model="numA" />
    <NumberInput v-model="numB" />
  </div>
  <div className="grid grid-cols-4 gap-x-4 my-4">
    <ActionButton actionType="sum" @click="calculate(sum)" />
    <ActionButton actionType="substract" @click="calculate(substract)" />
    <ActionButton actionType="multiply" @click="calculate(multiply)" />
    <ActionButton actionType="divide" @click="calculate(divide)" />
    <div>Result: {{result}}</div>
  </div>
</template>

<script setup lang="ts">
import { sum, substract, multiply, divide } from '../utils/mathFunctions';
import { ref } from 'vue';
import NumberInput from './NumberInput.vue';
import ActionButton from './ActionButton.vue';

const numA = ref<number>(0);
const numB = ref<number>(0);
const result = ref<number|string>(0);

const calculate = (func: (a: number, b: number) => number|string)=> {
  result.value = func(numA.value, numB.value)

};
</script>

<style scoped></style>
