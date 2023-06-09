<template>
  <div>
    <ul class="to-do-list" :class="{'is-open': setModal}" @click="(evt) => closeModal(evt.target)">
      <li class="item" v-for="task in toDoList" :key="task.id" @click="modalOpen(task)">
        <div class="item__card">
          <h3 class="item__title">{{ task.title }}</h3>
          
          <div elevation="5" class="item__data-float">
            <div class="item__dates">
              {{ task.start_date }} - {{ task.finish_date }}
            </div>
          </div>
        </div>
      </li>
    </ul>

    <ToDoModal :task="myTask" :show="setModal"/>
  </div>
</template>

<script setup>
  import { useToDoList } from '@/stores/toDoList'
  import ToDoModal from '@/components/ToDoModal.vue';
  import { storeToRefs } from 'pinia'
  import { ref } from 'vue'
  
  const setModal = ref(false)
  const myTask = ref({})
  
  const usetoDoList = useToDoList()
  const { toDoList } = storeToRefs(usetoDoList)
  
  const closeModal = (target) => { 
    if(target.classList.contains('is-open'))setModal.value = !setModal.value
  }

  const modalOpen = (task) => {
    setModal.value = !setModal.value
    myTask.value = task
  }
</script>

<style lang="scss" scoped>
  .to-do-list {
    list-style: none;

    &.is-open {
      &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 1;
      background: rgba($color: #000000, $alpha: .2);
      cursor: pointer;
    }
    }
    .item {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &__card {
        width: 100%;
        padding: 1rem 1.6rem;
        cursor: pointer;
        position: relative;
      }

      &__title {
        font-size: 1.8rem;
        margin: 0;
      }
      &__data-float {
        height: 100%;
        text-align: right;

        position: absolute;
        top: 50%;
        right: 2rem;
        transform: translateY(-50%);
        z-index: 1;
        max-width: 30rem;
        width: 100%;
      }
      &__dates,
      &__state {
        font-size: 1.4rem;
      }
    }
  }
</style>