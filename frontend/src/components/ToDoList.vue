<template>
  <AddToDo @setTask="setTask({}, 'add')" />
  <div>
    <ul class="to-do-list" :class="{'is-open': show}" @click="(evt) => closeModal(evt.target)">
      <li class="item" v-for="task in toDoList" :key="task.id">
        <div class="item__card">
          <h3 class="item__title">{{ task.title }}</h3>
          <div class="item__data-float">
            <div class="item__dates">
              {{ task.start_date }} - {{ task.finish_date }} 
            </div>
            <button 
              class="button button--modify" 
              @click="setTask(task, 'modify')
            ">
              <img src="../assets/edit-icon.png" alt="modify task">
            </button>
            <button 
              class="button button--delete" 
              @click="setTask(task, 'delete')
            ">
              <img src="../assets/close-icon.png" alt="delete task">
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <ToDoModal :task="currentTask" :show="show" @setModal="setModal(show)" />
</template>

<script setup>
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useToDoList } from '@/stores/toDoList'
  import AddToDo from '@/components/AddToDo.vue'
  import ToDoModal from '@/components/ToDoModal.vue'
  
  const show = ref(false)
  const currentTask = ref({})
  const currentAction = ref('')

  const usetoDoList = useToDoList()
  const { toDoList } = storeToRefs(usetoDoList)

  const setTask = (task = {}, action = 'undefined') => { 
    currentAction.value = action
    currentTask.value = task
    if(action != 'delete')show.value = !show.value 
  }

  const closeModal = (target) => { 
    if(target.classList.contains('is-open'))show.value = !show.value
  }

  const setModal = () => { 
    show.value = !show.value 
  }
</script>

<style lang="scss" scoped>
  .button {
    margin-left: 2rem;
    border: 0;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 1.6rem;
    }
  }
  .to-do-list {
    list-style: none;
    padding-top: 3rem;

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
      cursor: url('../assets/close-icon.png'), auto;
    }
    }
    .item {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &__card {
        width: 100%;
        padding: 1rem 0;
        position: relative;
      }

      &__title {
        font-size: 1.8rem;
        margin: 0;
        max-width: 26rem;
      }
      &__data-float {
        height: 100%;
        text-align: right;
        position: absolute;
        top: 50%;
        right: 2rem;
        transform: translateY(-50%);
        z-index: 1;
        max-width: 36rem;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      &__dates,
      &__state {
        font-size: 1.4rem;
      }
    }
    .item:not(:last-child) {
      border-bottom: 0.1rem solid #EFEFEF;
    }
  }
</style>