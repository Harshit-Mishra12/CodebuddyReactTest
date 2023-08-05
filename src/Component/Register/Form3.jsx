// Form3.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Checkbox,
  Button,
  VStack,
  Box,
  Text,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { ArrowBackIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Form3 = ({ onSubmit, onPrevious, errors, initialValues }) => {
  const formik = useFormik({
    initialValues: {
      countryCode: initialValues.countryCode || '',
      phoneNumber: initialValues.phoneNumber || '',
      acceptTermsAndCondition: initialValues.acceptTermsAndCondition || false,
    },
    validationSchema: Yup.object({
      countryCode: Yup.string().required('Required'),
      phoneNumber: Yup.string()
        .required('Required')
        .matches(/^\d{10}$/, 'Must be a 10-digit number'),
      acceptTermsAndCondition: Yup.boolean()
        .oneOf([true], 'Must accept terms and conditions'),
    }),
    onSubmit: () => {
      onSubmit(formik.values, formik.errors);
    },
  });

  const countryOptions = [
    { value: '', label: 'Select' },
    { value: '+91', label: 'India (+91)' },
    { value: '+1', label: 'America (+1)' },
  ];

  return (
    <Box p={4} maxW="400px" mx="auto" borderWidth={1} borderRadius={8} boxShadow="lg">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Step 3: Contact Information
      </Text>
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={4}>
          <FormControl
            id="countryCode"
            isInvalid={formik.touched.countryCode && formik.errors.countryCode}
          >
            <FormLabel>Country Code</FormLabel>
            <Select
              name="countryCode"
              value={formik.values.countryCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            {formik.touched.countryCode && formik.errors.countryCode ? (
              <Text color="red" fontSize="sm">
                {formik.errors.countryCode}
              </Text>
            ) : null}
          </FormControl>
          <FormControl
            id="phoneNumber"
            isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
          >
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="text"
              name="phoneNumber"
              maxLength={10}
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <Text color="red" fontSize="sm">
                {formik.errors.phoneNumber}
              </Text>
            ) : null}
          </FormControl>
          <FormControl
            id="acceptTermsAndCondition"
            isInvalid={
              formik.touched.acceptTermsAndCondition &&
              formik.errors.acceptTermsAndCondition
            }
          >
            <Checkbox
              name="acceptTermsAndCondition"
              isChecked={formik.values.acceptTermsAndCondition}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              I accept the terms and conditions
            </Checkbox>
            {formik.touched.acceptTermsAndCondition &&
            formik.errors.acceptTermsAndCondition ? (
              <Text color="red" fontSize="sm">
                {formik.errors.acceptTermsAndCondition}
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
             <Box width={'20px'} />
            <Button
              type="submit"
              colorScheme="blue"
              rightIcon={<ChevronRightIcon />}
              isDisabled={!formik.isValid}
            >
              Save
            </Button>
          </Flex>
        </VStack>
      </form>
    </Box>
  );
};

export default Form3;
