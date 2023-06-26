<template>
  <div>
    <button @click="$emit('setTask')" class="btn">Add</button>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .btn {
    border: none;
    padding: .5rem 1rem 0 1rem;
    background: transparent;
    min-width: 5rem;
    cursor: pointer;
    border-bottom: .1rem solid transparent;
    transition: all 350ms ease;

    &:hover {
      border-bottom: .1rem solid #DCDCDC;
    }
  }
</style>