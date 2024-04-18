import GradientBorder from "components/GradientBorder/GradientBorder";
import { useForm } from 'react-hook-form';
import { BsArrowRight } from 'react-icons/bs';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Icon,
  Text,
  Input,
  Button,
} from '@chakra-ui/react';


import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://gmrhlogdgjmlphtjxduk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdtcmhsb2dkZ2ptbHBodGp4ZHVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0MzY2NTYsImV4cCI6MjAyOTAxMjY1Nn0.-FgBaGmU2oVSeBJKAq2g3vmY7-_ertXO5Yp8XZbszBA");
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // onsubmitScrape(JSON.stringify(values, null, 2))
        onsubmitScrape(values)
        resolve()
      }, 3000)
    })
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>

      <Input mb='24px'
            w={{ base: "100%", lg: "fit-content" }}
            borderRadius='20px'
            color='white'
            bg='rgb(19,21,54)'
            border='transparent'
            fontSize='sm'
            size='lg'
            maxW='100%'
            h='46px'
            name='displayName'
            id='displayName'
            placeholder='Enter displayName'
            {...register('displayName', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
            <Input mb='24px'
            w={{ base: "100%", lg: "fit-content" }}
            borderRadius='20px'
            color='white'
            bg='rgb(19,21,54)'
            border='transparent'
            fontSize='sm'
            size='lg'
            maxW='100%'
            h='46px'
            name='userName'
            id='userName'
            placeholder='Enter userName'
            {...register('userName', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
        <Input mb='24px'
            w={{ base: "100%", lg: "fit-content" }}
            borderRadius='20px'
            color='white'
            bg='rgb(19,21,54)'
            border='transparent'
            fontSize='sm'
            size='lg'
            maxW='100%'
            h='46px'
            name='email'
            id='email'
            placeholder='Enter email'
            {...register('email', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
            <Input mb='24px'
            w={{ base: "100%", lg: "fit-content" }}
            borderRadius='20px'
            color='white'
            bg='rgb(19,21,54)'
            border='transparent'
            fontSize='sm'
            size='lg'
            maxW='100%'
            h='46px'
            name='pass'
            id='pass'
            placeholder='Enter pass'
            {...register('pass', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
            <Input mb='24px'
            w={{ base: "100%", lg: "fit-content" }}
            borderRadius='20px'
            color='white'
            bg='rgb(19,21,54)'
            border='transparent'
            fontSize='sm'
            size='lg'
            maxW='100%'
            h='46px'
            name='web'
            id='web'
            placeholder='Enter web'
            {...register('web', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
        
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <Button isLoading={isSubmitting} type='submit'
										p='0px'
										variant='no-hover'
										bg='transparent'
										my={{ sm: '1.5rem', lg: '0px' }}>
										<Text
											fontSize='sm'
											color='#fff'
											fontWeight='bold'
											cursor='pointer'
											transition='all .3s ease'
											my={{ sm: '1.5rem', lg: '0px' }}
											_hover={{ me: '4px' }}>
											Scrape Page
										</Text>
										<Icon
											as={BsArrowRight}
											w='20px'
											h='20px'
											color='#fff'
											fontSize='2xl'
											transition='all .3s ease'
											mx='.3rem'
											cursor='pointer'
											pt='4px'
											_hover={{ transform: 'translateX(20%)' }}
										/>
									</Button>
    </form>
  )
}



async function onsubmitScrape(values) {

  console.log(values)
  const displayName = values.displayName;
  const userName = values.userName;
  const email = values.email;
  const pass = values.pass;
  const web = values.web;

  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: pass,
    options: {
      data: {
        uname: userName,
        dname: displayName,
        web: web
      }
    }
    
  })
}


