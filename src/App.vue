<template>
  <main>
    <div class="notifications-container">
      <BaseNotification
        v-for="notification in notifications"
        :key="notification.id"
        :status="notification.status"
      >
        <p>{{ notification.message }}</p>
      </BaseNotification>
    </div>
  </main>
</template>

<script setup>
import BaseNotification from "@/components/BaseNotification.vue";

const notifications = [
  {
    id: 1,
    status: "error",
    message: "An error occurred. Please try again. 🙀",
  },
  {
    id: 2,
    status: "success",
    message: "Operation completed successfully! 🌟",
  },
  {
    id: 3,
    status: "warning",
    message: "This is a warning. Please be careful! 🚨",
  },
  {
    id: 4,
    status: "info",
    message: "Here is some information for you. 👩‍💻",
  },
];
</script>

<style scoped>
.notifications-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
