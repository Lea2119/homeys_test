<template>
  <div :class="['notification', `notification--${props.status}`]">
    <div class="notification-header">
      <img :src="icon" alt="icon" />
      <p class="notification-title">{{ title }}</p>
      <button class="close-button">
        <img :src="CloseIcon" alt="close" />
      </button>
    </div>
    <div class="notification-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";
import Info from "@/assets/icons/Info.svg";
import Danger from "@/assets/icons/Danger.svg";
import Warning from "@/assets/icons/Warning.svg";
import CloseIcon from "@/assets/icons/Close.svg";
import CheckCircle from "@/assets/icons/CheckCircle.svg";

const NOTIFICATION_STATUS_CONFIG = {
  success: { icon: CheckCircle, title: "Success" },
  info: { icon: Info, title: "Info" },
  warning: { icon: Warning, title: "Warning" },
  error: { icon: Danger, title: "Error" },
};

const props = defineProps({
  status: {
    type: String,
    required: true,
  },
});

const config = computed(() => NOTIFICATION_STATUS_CONFIG[props.status]);
const icon = computed(() => config.value.icon);
const title = computed(() => config.value.title);
</script>

<style lang="scss" scoped>
.notification {
  width: 527px;
  height: 160px;
  padding: 24px;
  border-radius: 5px;
  border: 2px solid;

  &--success {
    background-color: #e4f7e8;
    border-color: #89b291;
  }

  &--error {
    background-color: #f7e4e4;
    border-color: #d29393;
  }

  &--warning {
    background-color: #f7f2e4;
    border-color: #d4c296;
  }

  &--info {
    background-color: #e4e9f7;
    border-color: #96a8d8;
  }
}

.notification-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  .notification-title {
    font-weight: 500;
    font-size: 20px;
    flex: 1;
  }

  img {
    margin-right: 16px;
  }

  .close-button {
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    width: 20px;
    height: 20px;
  }
}

.notification-content {
  font-size: 14px;
  padding-left: 48px;
  color: #757575;
}
</style>
