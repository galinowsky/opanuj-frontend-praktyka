<template>
  <button
    className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
  >
    {{ actionType }}
  </button>
</template>
<script lang="ts" setup>
type ActionType = 'sum' | 'substract' | 'multiply' | 'divide';
defineProps({
  actionType: {
    type: String,
    required: true,
    validator: (value: string): value is ActionType => {
      return ['sum', 'substract', 'multiply', 'divide'].includes(value);
    },
  },
});
</script>
