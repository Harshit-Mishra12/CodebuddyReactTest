// Form2.js
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
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { ArrowBackIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Form2 = ({ onNext, onPrevious, errors, initialValues }) => {
  const formik = useFormik({
    initialValues: {
      firstName: initialValues.firstName || '',
      lastName: initialValues.lastName || '',
      address: initialValues.address || '',
    },
  // ...

validationSchema: Yup.object({
    firstName: Yup.string()
      .required('Required')
      .min(2, 'Must be at least 2 characters')
      .max(50, 'Must be at most 50 characters')
      .matches(/^[A-Za-z]+$/, 'Only alphabets allowed'),
    lastName: Yup.string()
      .min(2, 'Must be at least 2 characters')
      .max(50, 'Must be at most 50 characters')
      .matches(/^[A-Za-z]+$/, 'Only alphabets allowed'),
    address: Yup.string()
      .required('Required')
      .min(10, 'Must be at least 10 characters')
      .test('is-valid-address', 'Invalid address', value => value.length >= 10),
  }),
  // ...

    onSubmit: () => {
      onNext(formik.values);
    },
  });

  return (
    <Box p={4} maxW="400px" mx="auto" borderWidth={1} borderRadius={8} boxShadow="lg">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Step 2: Personal Information
      </Text>
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={4}>
          <FormControl
            id="firstName"
            isInvalid={formik.touched.firstName && formik.errors.firstName}
          >
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <Text color="red" fontSize="sm">
                {formik.errors.firstName}
              </Text>
            ) : null}
          </FormControl>
          <FormControl
            id="lastName"
            isInvalid={formik.touched.lastName && formik.errors.lastName}
          >
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <Text color="red" fontSize="sm">
                {formik.errors.lastName}
              </Text>
            ) : null}
          </FormControl>
          <FormControl
            id="address"
            isInvalid={formik.touched.address && formik.errors.address}
          >
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.address && formik.errors.address ? (
              <Text color="red" fontSize="sm">
                {formik.errors.address}
              </Text>
            ) : null}
          </FormControl>
          <Flex>
            <IconButton
              icon={<ArrowBackIcon />}
              aria-label="Back"
              variant="outline"
              onClick={onPrevious}
            />
            {/* spacing */}
           <Box width={'20px'} />
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

export default Form2;
