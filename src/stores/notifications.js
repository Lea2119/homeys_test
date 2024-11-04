import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useNotificationsStore = defineStore("notifications", () => {
  const notifications = ref([]);

  // Actions

  function createNotification(notification) {
    const newNotification = {
      id: notification.id || Date.now().toString(),
      ...notification,
    };
    notifications.value.push(newNotification);
  }

  function deleteNotification(id) {
    notifications.value = notifications.value.filter(
      (notification) => notification.id !== id
    );
  }

  // Getters

  const getAllNotifications = computed(() => notifications.value);

  function getNotificationById(id) {
    return notifications.value.find((notification) => notification.id === id);
  }

  return {
    notifications,
    createNotification,
    deleteNotification,
    getAllNotifications,
    getNotificationById,
  };
});
