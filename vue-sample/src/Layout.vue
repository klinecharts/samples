<template>
  <div class="k-line-chart-container">
    <h3 class="k-line-chart-title">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ChartLayout",
  props: {
    title: String,
  },
};
</script>
