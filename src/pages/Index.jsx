import { useState } from "react";
import { Container, VStack, Heading, Text, Input, Button, FormControl, FormLabel, Alert, AlertIcon } from "@chakra-ui/react";
import { FaEnvelope, FaUser, FaPhone } from "react-icons/fa";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    setSubmitted(true);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          Capture Leads
        </Heading>
        <Text>Fill in the form below to get in touch with us.</Text>
        {submitted && (
          <Alert status="success">
            <AlertIcon />
            Your information has been submitted successfully!
          </Alert>
        )}
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone</FormLabel>
              <Input type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="100%">
              Submit
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Index;
