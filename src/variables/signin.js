import { supabase } from 'lib/helper/supabaseClient';
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
        onSubmitSignIn(values)
        resolve()
      }, 3000)
    })
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

<FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
        <Button
            variant='brand'
            fontSize='10px'
            type='submit'
            w='100%'
            maxW='350px'
            h='45'
            mb='20px'
            mt='20px'>
            SIGN IN
        </Button>
    </form>
  )
}

async function onSubmitSignIn(values) {

    console.log(values)
    const displayName = values.displayName;
    const userName = values.userName;
    const email = values.email;
    const pass = values.pass;
  
    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: pass,
      options: {
        data: {
          uname: userName,
          dname: displayName,
        }
      }
      
    })
  }