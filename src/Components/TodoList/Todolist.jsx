
import {VStack, HStack, Text, IconButton, StackDivider, Spacer, Badge} from '@chakra-ui/react'
import {FaTrash} from 'react-icons/fa'
import './Todos'

export const Todolist = ({todos, deleteTodo}) => {
   if(!todos.length){
    return(
        <Badge colorScheme='green' m='4' p='4' borderRadius="lg">
            No Todos Left...!!!
        </Badge>
    )
   }
    return(
    <>
        <VStack divider={<StackDivider/>} borderColor='gray.100' borderWidth='2px' p='4' borderRadius='lg' w='100%' alignItems="stretch" maxW={{base:'90vw', sm:'80vw', lg:'50vw', xl:'40vw' }}>
       {todos.map(todo => (
        <HStack key={todo.id}>
            <Text>{todo.body}</Text>
            <Spacer/>
            <IconButton icon={<FaTrash/>} isRound='true' onClick={() => deleteTodo(todo.id)}/>
        </HStack>
       )

       )}
        </VStack>
    </>
    )  
}

//export default Todolist;