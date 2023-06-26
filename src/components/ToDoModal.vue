<template>
  <div class="modal-task" :class="{ 'is-open': show && show }">
    <div class="modal-task__card">
      <form @submit.prevent="handleSubmit">
        <header class="header">
          <div class="title hover-underline">
            <input 
              v-model="reactiveProps.task.title"
              name="title" 
              type="text" 
              placeholder="Title" 
              class="header__title input"
            />
          </div>
          <div class="dates">
            <div class="hover-underline">
              <input 
                v-model="reactiveProps.task.start_date"
                name="date_start" 
                type="text" 
                placeholder="Start date" 
                class="dates__start input" 
              />
            </div>
            <span class="header__separator">-</span>
            <div class="hover-underline">
              <input 
                v-model="reactiveProps.task.finish_date"
                name="date_end" 
                type="text" 
                placeholder="Finish date" 
                class="dates__end input" 
              />
            </div>
          </div>
        </header>
        <main>
          <section class="section">
            <textarea 
              v-model="reactiveProps.task.description"
              name="description"
              col="30"
              rows="30"
              class="section__description" 
              placeholder="Description..." 
            >
            </textarea>
          </section>
        </main>
        <footer class="footer">
          <div class="footer__buttons">
            <button 
              @click="$emit('setModal', false)" 
              class="footer__back button" 
              data-action="back"
              type="reset"
            >
              Back
            </button>
            <button 
              @click="$emit('setModal', false)" 
              type="submit" 
              class="footer__save button" 
              data-action="save"
            >
              Save
            </button>
          </div>
          <!-- <p class="footer__state">Temporary State</p> -->

          <!-- <select class="footer__state">
            <option v-for="(state, index) in task.state.states" :key="index" :value="state" :selected="task.state.currentState === state">{{ state }}</option>
          </select> -->
        </footer>
      </form>
    </div>
  </div>
</template>

<script setup>
  import { ref, toRefs } from 'vue'
  import { useToDoList } from '@/stores/toDoList'
import { computed } from '@vue/reactivity';

  const props = defineProps({
    action: String,
		task: {
      type: Object,
			default: {},
		},
    show: Boolean
	})

  const reactiveProps = computed(() => props)  

  const usetoDoList = useToDoList()
  const { addToDo } = usetoDoList

  const handleSubmit = () => {
    if (title.value != '' && description.value != '' && date_start.value != '' && date_end.value != '') {
      addToDo(title.value, description.value, date_start.value, date_end.value, currentState.value)
      title.value = ''
      description.value = ''
      date_start.value = ''
      date_end.value = ''
      currentState.value = ''
    }
  }
</script>

<style lang="scss" scoped>
  .input {
    border: none;
    line-height: 2.8rem;
    &:focus-visible {
      outline: 0;
    }
  }
  .button {
    border: none;
    padding: .5rem 1rem;
    background: none;
    cursor: pointer;
    transition: background 400ms ease;
    cursor: url('../assets/close-icon.png');
  }
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
    transition: all 600ms cubic-bezier(0.82, 0.09, 0.33, 1.03);

    &:not(.is-open) {
      top: -100%;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.1rem solid #EFEFEF;
      padding-bottom: 2rem;

      &__title {
        line-height: 2.8rem;
        font-size: 1.8rem;
        flex-grow: 1;
      }
      .title {
        padding-bottom: 0.7rem;
      }
      .dates {
        display: flex;
        align-items: stretch;

        &__start,
        &__end {
          font-size: 1.8rem;
          width: 100%;
          max-width: 11rem;
          text-align: center;
        }
      }
      &__separator {
        padding: 0 1rem;
        font-size: 1.8rem;
      }
    }
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: .1rem solid #EFEFEF;
      padding-top: 2rem;

      &__state {
        font-size: 1.8rem;
        padding: 0 1rem;
        border: none;
        &:focus-visible {
          outline: none;
        }
      }
      &__buttons {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0 1rem;
      }
      &__back {
        &:hover {
          background: rgb(235, 79, 2);
          color: #FFFFFF;
        }
      }
      &__save {
        &:hover {
          background: rgb(0, 175, 0);
          color: #FFFFFF;
        }
      }
    }
    &__body {
      padding: 2rem 0;
    }
    .section {
      padding: 1rem 0;
      &__description {
        border: none;
        font-size: 1.4rem;
        max-height: 31rem;
        width: 100%;
        overflow-y: scroll;

        &::-webkit-scrollbar {
          display: none;
        }
        &:focus-visible {
          outline: 0;
        }
      }
    }

    .modal-task__card {
      padding: 2rem;
    }
  }
</style>