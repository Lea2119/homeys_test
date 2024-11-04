<template>
  <main>
    <button @click="addNotification">Show Notification</button>
    <div class="notifications-container">
      <BaseNotification
        v-for="notification in notifications"
        :key="notification.id"
        :status="notification.status"
        @close-notification="handleCloseNotification(notification.id)"
      >
        <p>{{ notification.message }}</p>
      </BaseNotification>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import BaseNotification from "@/components/BaseNotification.vue";

const notifications = ref([]);

const notificationTypes = [
  { status: "success", message: "Operation completed successfully! 🌟" },
  { status: "info", message: "Here is some information for you. 👩‍💻" },
  { status: "warning", message: "This is a warning. Please be careful! 🚨" },
  { status: "error", message: "An error occurred. Please try again. 🙀" },
];

// Function to add a random notification
const addNotification = () => {
  const randomNotification =
    notificationTypes[Math.floor(Math.random() * notificationTypes.length)];

  const newNotification = {
    ...randomNotification,
    id: Date.now().toString(),
  };

  notifications.value.push(newNotification);

  // Limit to 5 notifications by deleting the oldest one
  if (notifications.value.length > 5) {
    notifications.value.shift();
  }
};
// Function to remove a notification
const handleCloseNotification = (id) => {
  notifications.value = notifications.value.filter(
    (notification) => notification.id !== id
  );
};
</script>

<style scoped>
.notifications-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
}
</style>
