<template>
  <input ref="datePickerEl" :value="modelValue" />
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import flatpickr from "flatpickr";
import { Korean } from "flatpickr/dist/l10n/ko";
import "flatpickr/dist/flatpickr.css";

const props = defineProps({
  modelValue: {
    type: String,
  },
  options: {
    type: Object,
  },
});
const emits = defineEmits(["update:modelValue"]);

const datePickerEl = ref(null);
let datePicker: any = null;

const mountDatePicker = () => {
  if (datePickerEl.value == null) {
    setTimeout(mountDatePicker, 10);
    return;
  }

  const config = {
    // mode: 'range',
    enableTime: false,
    dateFormat: "Y-m-d",
    // minDate: '2010-01-01',
    // maxDate: new Date(),
    locale: Korean,
    disableMobile: "true",
    onClose: (selectedDates, dateStr, instance) => {
      if (dateStr == props.modelValue) return;
      emits("update:modelValue", dateStr);
    },
    onChange: (selectedDates, dateStr, instance) => {
      // console.log(selectedDates);
      if (dateStr == props.modelValue) return;
      emits("update:modelValue", dateStr);
    },
    ...(props.options ?? {}),
  };
  datePicker = flatpickr(datePickerEl.value, config);
};

watch(
  () => props.options,
  (options) => {
    Object.entries(options).forEach(([key, val]) => {
      datePicker.config[key] = val;
    });
    datePicker?.redraw();
  },
  { deep: true }
);

watch(
  () => props.modelValue,
  (value) => {
    datePicker?.setDate(value);
  }
);

onMounted(() => {
  mountDatePicker();
});
</script>
