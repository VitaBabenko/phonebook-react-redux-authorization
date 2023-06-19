import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/auth/authOperations';
import { selectVerify, selectError } from '../redux/auth/authSelectors';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
} from '@chakra-ui/react';

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const verify = useSelector(selectVerify);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const onHandleSubmit = data => {
    dispatch(registerUser(data));
    reset();
  };

  return (
    <>
      <Box display="flex" justifyContent="center">
        <FormControl
          as="form"
          width="400px"
          onSubmit={handleSubmit(onHandleSubmit)}
        >
          <FormLabel requiredIndicator>
            Username
            <Input
              variant="filled"
              size="md"
              type="text"
              {...register('name', {
                required: 'The field is required!',
                minLength: {
                  value: 2,
                  message: 'At least 2 characters are required!',
                },
                pattern: {
                  value:
                    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                  message:
                    'Name may contain only letters, apostrophe, dash and spaces!',
                },
              })}
            />
          </FormLabel>
          {errors?.name && (
            <Text fontSize="15px" color="red">
              {errors?.name?.message}
            </Text>
          )}
          <FormLabel requiredIndicator>
            Email
            <Input
              variant="filled"
              size="md"
              type="email"
              {...register('email', {
                required: 'The field is required!',
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Please enter correct email!',
                },
              })}
            />
          </FormLabel>
          {errors?.email && (
            <Text fontSize="15px" color="red">
              {errors?.email?.message}
            </Text>
          )}
          <FormLabel requiredIndicator>
            Password
            <Input
              variant="filled"
              size="md"
              type="password"
              {...register('password', {
                required: 'The field is required!',
                minLength: {
                  value: 8,
                  message: 'At least 8 characters are required!',
                },
              })}
            />
          </FormLabel>
          {errors?.password && (
            <Text fontSize="15px" color="red">
              {errors?.password?.message}
            </Text>
          )}
          {error && <h1>User with this email is already registered!</h1>}
          {verify === false && (
            <h1>Please, visit your email address and active your account!</h1>
          )}
          <Button
            display="flex"
            marginLeft="auto"
            marginRight="auto"
            type="submit"
            size="lg"
            colorScheme="purple"
            variant="solid"
          >
            Register
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default RegisterForm;
