<template>
  <div
    class=" divide-gray-200 rounded-lg sm:grid sm:grid-cols-3 "
  >
    <div
      v-for="(action, actionIdx) in categoryList"
      :key="action.title"
      :class="[
        actionIdx === 0
          ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none '
          : '',
        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
        actionIdx === categoryList.length - 2 ? 'sm:rounded-bl-lg' : '',
        actionIdx === categoryList.length - 1
          ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
          : '',
        'group relative bg-white p-3 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 m-3 border',
      ]"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span
            :class="[
              action.iconBackground,
              action.iconForeground,
              'inline-flex rounded-full p-1 ring-3 ring-white',
            ]"
          >
            <component :is="action.icon" class="h-6 w-6" aria-hidden="true" />
          </span>
          <a class="focus:outline-none ml-2 text-sm font-semibold">
            {{ action.title }}
          </a>
        </div>
        <svg
          class="h-7 w-7 float-right hover:cursor-pointer"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <EllipsisVerticalIcon class="hover:cursor-pointer" />
        </svg>
      </div>

      <div class="mt-4">
        <h3 class="text-base font-semibold leading-6 text-gray-900"></h3>
        <p class="mt-4 text-[13px] text-gray-500">
          Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit
          repellendus qui ut at blanditiis et quo et molestiae.
        </p>
      </div>
      <span
        class="pointer-events-none absolute right-6 top-6 text-gray-400 group-hover:text-gray-500"
      >
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  AcademicCapIcon,
  BanknotesIcon,
  EllipsisVerticalIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/vue/24/outline";

defineProps<{
  categoryList: {
    title: string;
    icon: any;
    iconForeground: string;
    iconBackground: string;
  }[];
}>();

const actions = [
  {
    title: "Request time off",
    href: "#",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Benefits",
    href: "#",
    icon: CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Schedule a one-on-one",
    href: "#",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Payroll",
    href: "#",
    icon: BanknotesIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    title: "Submit an expense",
    href: "#",
    icon: ReceiptRefundIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    title: "Training",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];
</script>
