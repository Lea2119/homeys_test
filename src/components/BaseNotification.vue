<template>
  <div class="notification">
    <div class="notification-header">
      <img :src="successIcon" alt="icon" />
      <p class="notification-title">Success</p>
      <button class="close-button">
        <img :src="closeIcon" alt="close" />
      </button>
    </div>
    <div class="notification-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import closeIcon from "@/assets/icons/Close.svg";
import successIcon from "@/assets/icons/CheckCircle.svg";
</script>

<style lang="scss" scoped>
.notification {
  width: 527px;
  height: 160px;
  padding: 24px;
  border-radius: 5px;
  background-color: #e4f7e8;
  border: 2px solid #89b291;

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
}
</style>
