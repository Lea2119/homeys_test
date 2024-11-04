<template>
  <main>
    <button @click="addNotification">Show Notification</button>
    <div class="notifications-container">
      <BaseNotification
        v-for="notification in notifications"
        :key="notification.id"
        :status="notification.status"
        @close-notification="
          notificationsStore.deleteNotification(notification.id)
        "
      >
        {{ notification.message }}
      </BaseNotification>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useNotificationsStore } from "@/stores/notifications";
import BaseNotification from "./components/BaseNotification.vue";

// Access the notifications store
const notificationsStore = useNotificationsStore();

// Get reactive notifications
const notifications = computed(() => notificationsStore.getAllNotifications);

// Types of notifications possible
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

  // Add the notification to the store
  notificationsStore.createNotification(newNotification);

  // Limit to 5 notifications by deleting the oldest one
  if (notifications.value.length > 5) {
    const oldestNotificationId = notifications.value[0].id;
    notificationsStore.deleteNotification(oldestNotificationId);
  }
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
