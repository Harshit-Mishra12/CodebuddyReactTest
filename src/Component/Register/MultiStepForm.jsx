// MultiStepForm.js

import React, { useState } from 'react';
import { Container, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import { useDispatch } from 'react-redux';
import { submitRegisterForm } from '../../Redux/AuthReducer/Action';

function MultiStepForm() {
    const dispatch=useDispatch();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    countryCode: '',
    phoneNumber: '',
    acceptTermsAndCondition: false,
  });
  const [formErrors, setFormErrors] = useState({});

  const handleNext = (nextStep, data, errors) => {
    if (Object.keys(errors).length === 0) {
      setFormData((prevData) => ({ ...prevData, ...data }));
      setFormErrors({});
      setStep(nextStep);
    } else {
      setFormErrors(errors);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmitForm1 = (data) => {
    console.log('Form1 handleSubmitForm1:', data);
    handleNext(2, data, {});
  };

  const handleSubmitForm2 = (data) => {
    console.log('Form2 handleSubmitForm2:', data);
    handleNext(3, data, {});
  };

  const handleSubmitForm3 = (data) => {
    const updatedFormData = { ...formData, ...data };
    delete updatedFormData.acceptTermsAndCondition;

    console.log('Form3 handleSubmitForm3:', updatedFormData);
    dispatch(submitRegisterForm(updatedFormData));
    setFormData((prevData) => ({ ...prevData, ...data }));
    // handleNext(1, {}, {});
  };

  return (
    <Container maxW="container.md" mt={10}>
      <Tabs index={step - 1} isLazy isFitted>
        <TabList>
          <Tab flexGrow={1}>Account Info</Tab>
          <Tab flexGrow={1}>Personal Info</Tab>
          <Tab flexGrow={1}>Contact Info</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Form1 onNext={handleSubmitForm1} errors={formErrors} initialValues={formData} />
          </TabPanel>
          <TabPanel>
            <Form2
              onNext={handleSubmitForm2}
              onPrevious={handlePrevious}
              errors={formErrors}
              initialValues={formData}
            />
          </TabPanel>
          <TabPanel>
            <Form3
              onSubmit={handleSubmitForm3}
              onPrevious={handlePrevious}
              errors={formErrors}
              initialValues={formData}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default MultiStepForm;
