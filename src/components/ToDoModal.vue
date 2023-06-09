<template>
  <div v-if="show" class="modal-task">
    <div class="modal-task__card" elevation="5">
      <div class="modal-task__header">
        <h3 class="modal-task__title">Task: {{ task.title }}</h3>
        <h4 class="modal-task__dates">{{ task.start_date }} - {{ task.finish_date }}</h4>
      </div>
      <div class="modal-task__body">
        <p class="modal-task__description">{{ task.description }}</p>
      </div>
      <div class="modal-task__footer">
        <p class="modal-task__state" @click.prevent>{{ task.state }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { task, show } = defineProps({
		task: {
			type: Object,
			default: {},
		},
    show: Boolean
	})
</script>

<style lang="scss" scoped>
  .modal-task {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100vw - (2.5rem * 2));
    max-width: 100rem;
    background: white;
    z-index: 2;
    -webkit-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    &__body {
      padding: 2rem 0;
    }
    &__description {
      font-size: 1.4rem;
      max-height: 31rem;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }

    &__title,
    &__dates,
    &__state {
      font-size: 1.8rem;
    }
    .modal-task__card {
      padding: 2rem;
    }
  }
</style>