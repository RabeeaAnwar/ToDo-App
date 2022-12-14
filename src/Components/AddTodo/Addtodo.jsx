import React, { useState } from 'react'
import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import {nanoid} from 'nanoid'

export const Addtodo = ({addTodo}) => {

  const toast=useToast()


  function handleSubmit(e){
    e.preventDefault()
    if(!content){
      toast({
        title: 'Cannot add empty todo',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      return;
    }
    const todo={
      id: nanoid(),
      body: content

  }
    addTodo(todo);
    setContent('');
  }

  const [content,setContent]= useState('')

  return (
   <>
    <form onSubmit={handleSubmit}>
    <HStack mt="8">
      <Input variant="filled" placeholder='What to do next...' value={content} onChange={(e)=> setContent(e.target.value)}/>
      <Button colorScheme="pink" px="8" type="submit">Add ToDo</Button>
    </HStack>
    </form>
   </>
  )
}





