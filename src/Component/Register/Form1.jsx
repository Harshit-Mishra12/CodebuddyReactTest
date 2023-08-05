// Form1.js

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
  Text,
  Flex,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Form1 = ({ onNext, errors, initialValues }) => {
    console.log("Form1: " + JSON.stringify(initialValues));
  const formik = useFormik({
    initialValues: {
      emailId: initialValues.emailId || '',
      password: initialValues.password || '',
    },
    validationSchema: Yup.object({
      emailId: Yup.string()
        .required('Required')
        .email('Invalid email format'),
      password: Yup.string()
        .required('Required')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/,
          'Must contain minimum 2 capital letters, 2 small letters, 2 numbers, and 2 special characters'
        ),
    }),
    onSubmit: (values) => {
      console.log('Form1 Submitting Form 1 data:', values); // Debugging line
      onNext(values );
    },
  });

  return (
    <Box p={4} maxW="400px" mx="auto" borderWidth={1} borderRadius={8} boxShadow="lg">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Step 1: Account Information
      </Text>
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={4}>
          <FormControl
            id="emailId"
            isInvalid={formik.touched.emailId && formik.errors.emailId}
          >
            <FormLabel>Email ID</FormLabel>
            <Input
              type="email"
              name="emailId"
              value={formik.values.emailId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.emailId && formik.errors.emailId ? (
              <Text color="red" fontSize="sm">
                {formik.errors.emailId}
              </Text>
            ) : null}
          </FormControl>
          <FormControl
            id="password"
            isInvalid={formik.touched.password && formik.errors.password}
          >
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <Text color="red" fontSize="sm">
                {formik.errors.password}
              </Text>
            ) : null}
          </FormControl>
          <Flex justify="flex-end">
            <Button
              type="submit"
              colorScheme="blue"
              rightIcon={<ChevronRightIcon />}
              isDisabled={!formik.isValid}
            >
              Save and Next
            </Button>
          </Flex>
        </VStack>
      </form>
    </Box>
  );
};

export default Form1;
