import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToDoList = defineStore('toDoList', () => {
  const toDoList = ref([
    {
      id: '1',
      title: 'Task 1',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, eum, reprehenderit, blanditiis exercitationem porro inventore quasi aspernatur quod corrupti ullam ipsum? Pariatur voluptatum recusandae magnam impedit maxime, sapiente adipisci voluptates.
      Quasi, facilis facere consequatur, temporibus unde eveniet perferendis eligendi distinctio quos voluptatum esse recusandae voluptate et alias harum amet laudantium cupiditate, voluptates fugit. Quasi eius sequi optio a animi excepturi.
      Tempore reprehenderit ratione quod natus eius repudiandae eveniet? Eligendi inventore assumenda consectetur nostrum quibusdam perferendis? Odio architecto ad ex voluptate quam! Est officiis vero ut minima accusamus obcaecati id minus.
      Ipsam, perspiciatis. Doloribus quis quibusdam rem explicabo dignissimos distinctio officia sit facere quasi nihil quidem debitis odio tempore non placeat, iusto voluptatibus amet voluptates impedit nisi ipsam! A, amet odit.
      Illo officiis, itaque unde necessitatibus ex nemo eos sed impedit ipsam omnis tempora amet magni dignissimos nam praesentium quo quae ullam adipisci officia qui eligendi velit! A neque nemo deleniti!
      Tempore molestias saepe mollitia architecto tenetur in adipisci inventore sequi itaque eaque aliquam excepturi, ad veritatis aut temporibus quaerat eligendi iure molestiae blanditiis quibusdam odit natus! Dolorem saepe assumenda perferendis!
      Libero dignissimos reiciendis blanditiis ipsa id quibusdam eaque ducimus impedit inventore dolore, autem maxime illum vero, laudantium aliquid? Illum numquam fugiat natus ratione ab possimus exercitationem, blanditiis et iusto. Perferendis?
      Doloremque, quia autem reprehenderit rem quis dolores consequatur exercitationem ipsa voluptates ipsam totam non veniam accusamus animi ullam deleniti, minima architecto magnam qui blanditiis cumque ducimus hic libero molestias! Ab!
      Id sunt facere dolore rerum error atque nemo nam ut officia ex, saepe facilis deserunt fugiat beatae quo vel quod natus magni debitis autem iste qui aut a? Veritatis, architecto?`,
      start_date: '04/05/2023',
      finish_date: '13/05/2023',
      currentState: 'Complete'
    },
    {
      id: '2',
      title: 'Task 2',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut nostrum voluptas veritatis ipsa. Laborum praesentium neque enim doloremque! Rem ullam nesciunt incidunt atque maiores temporibus consequatur corporis deleniti nisi.
      Facere, nesciunt consequatur, quam voluptatibus nemo neque doloribus modi illum ab omnis aperiam error quo rem sunt minus, unde laudantium aut doloremque? Animi similique velit doloremque cupiditate voluptas repudiandae voluptate!
      Est, dolorem. Accusantium placeat, id quibusdam minus dicta voluptas, maxime incidunt, vitae delectus commodi fuga at eaque error fugit doloremque ipsa porro aliquid voluptatum! Quasi reprehenderit aut et deleniti commodi.
      Harum consectetur sapiente voluptatem quas! Debitis eligendi natus beatae molestias ratione. Eum repellat eaque, quod voluptatibus autem expedita dolorum nesciunt ipsum dignissimos? Molestiae enim soluta, laboriosam qui quia maiores saepe.
      Suscipit ullam odit quam dolores aliquid dolorem libero magni? Consequatur quas culpa magni quidem ut quisquam repellat assumenda sed totam repellendus, itaque possimus illum dolorem libero ab, porro, ipsam eveniet!`,
      start_date: '08/06/2023',
      finish_date: '15/07/2023',
      currentState: 'Complete'
    },
    {
      id: '3',
      title: 'Task 3',
      description: `Reprehenderit soluta modi, dicta asperiores consequatur, doloremque quis qui velit nulla nobis dolores laborum. Voluptate, ut, sapiente rem laboriosam eum nesciunt quos magni minus quis aut incidunt quam beatae fugit!
      Recusandae tempora quidem maiores quae ratione maxime, rerum consectetur eum. Laboriosam corrupti, magnam, numquam qui nulla tempora voluptas sequi mollitia odit quidem harum voluptatibus, vero ipsa corporis asperiores incidunt. Soluta!
      Dolorem obcaecati corporis a nulla, amet molestiae eos beatae quo dolor veniam earum voluptas, nesciunt tempora doloremque possimus tempore! Facere placeat cumque, nostrum repellendus deleniti aliquam non nam rem doloremque?
      Repellat sint ullam odio odit quisquam, deserunt rerum harum quod fuga ad nobis a sunt recusandae earum assumenda aspernatur quo. A, eligendi reiciendis quod ut molestias iure fugit harum nesciunt?
      Obcaecati quod possimus iure error minima quidem vel dignissimos animi necessitatibus ipsa facilis quis consequatur, voluptatibus ea tenetur, commodi similique itaque, debitis aliquam nulla eum ullam et eos aspernatur! Nesciunt.`,
      start_date: '12/04/2023',
      finish_date: '28/08/2023',
      currentState: 'Blocked'
    },
    {
      id: '4',
      title: 'Task 4',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ducimus nesciunt expedita minima. Esse aspernatur, consequuntur debitis voluptatem distinctio architecto dicta ea! Rem reprehenderit ut doloribus libero tempora repudiandae dolores!
      Aliquam doloribus odio quaerat, soluta nostrum unde labore quidem dolor eligendi modi quis ab! Aspernatur atque neque architecto placeat ipsum ratione autem nesciunt expedita nulla delectus. Enim aliquid unde asperiores!
      Harum quos quaerat odio, cupiditate animi itaque at a quas laudantium iste? Consectetur quisquam, explicabo voluptas voluptatum deleniti ut dolorum sit distinctio qui dolore eaque consequuntur architecto? Ducimus, reprehenderit rerum.
      Labore ipsum quas, iure autem animi corrupti non adipisci nemo recusandae, facilis nam dolorem iste magnam eaque voluptates est ea fugiat, quo deserunt perspiciatis doloremque nesciunt ab praesentium. Unde, incidunt!
      Libero dolore suscipit, ipsam magnam nostrum laboriosam expedita aperiam id eos sint repudiandae provident voluptatem perferendis repellendus? Maxime veniam voluptas perspiciatis pariatur nisi repellat commodi, vel tenetur eligendi magnam ipsam.`,
      start_date: '24/04/2023',
      finish_date: '28/04/2023',
      currentState: 'In progress'
    },
    {
      id: '5',
      title: 'Task 5',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sapiente sequi, aut asperiores itaque, minus omnis placeat molestiae expedita nostrum aliquid, temporibus dolore. Consectetur eligendi nihil voluptatum. Ratione, consequatur molestias?
      Quos, et? Voluptates nulla aperiam ea voluptatum rerum accusamus perspiciatis corporis, iste autem sunt quos debitis eius blanditiis fugiat nostrum veniam laboriosam, excepturi sed! Earum quo temporibus dicta eum magni.`,
      start_date: '11/05/2023',
      finish_date: '17/05/2023',
      currentState: 'Complete'
    }
  ])

  const addToDo = (title, description, start_date, finish_date, currentState) => {
    const toDo = {
      id: 'x',
      title,
      description,
      start_date,
      finish_date,
      state: {
        currentState,
        states: [
          'Blocked',
          'Paused',
          'To do',
          'In progress',
          'Complete',
        ]
      }
    }
    toDoList.value.push(toDo)
  }

  const removeToDo = (id) => {
    toDoList.value = toDoList.value.filter(toDo => toDo.id != id)
  }

  return {
    toDoList,
    addToDo,
    removeToDo
  }
})