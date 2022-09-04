import {Heading} from '@chakra-ui/react'
import {Todolist} from './Components/TodoList/Todolist'
import {Addtodo} from './Components/AddTodo/Addtodo'
import {VStack, IconButton,useColorMode} from '@chakra-ui/react'
import {FaSun, FaMoon} from 'react-icons/fa'
import Spline from '@splinetool/react-spline';
import {useState, useEffect} from 'react'


function App() {
  const [todos,setTodos]=useState(()=> JSON.parse(localStorage.getItem('todos')) || [])

                                       // DELETE FROM THE LIST

  function deleteTodo(id){
    const newTodo= todos.filter((todo) =>{
      return todo.id !== id;
    } )
    setTodos(newTodo);
  }

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

                                          // ADD TO THE LIST

  function addTodo(todo){
    setTodos([...todos,todo])

  }

                                        //TOGGLE THEME
  const {colorMode,toggleColorMode}= useColorMode();
  return (
  <>
  <VStack p={5}>
  <IconButton icon={colorMode=== 'light' ? <FaSun/> : <FaMoon/>} isRound='true' size='lg' alignSelf='flex-end'  colorScheme='pink' variant='outline' onClick={toggleColorMode}/>
  <Heading mb="8" fontWeight="extrabold" size="2xl" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">ToDo Application</Heading>
  <Todolist todos={todos} deleteTodo={deleteTodo}/>
  <Addtodo addTodo={addTodo}/>
  </VStack>
  <div className='splineObject'>
  <Spline scene="https://prod.spline.design/qOpf4AY1oWU9M2lU/scene.splinecode" />
 
    </div>
 
  </>
  );
}

export default App;
