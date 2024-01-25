import {
	Container,
	Box,
	Heading,
	Text,
	Image,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Checkbox,
	Button,
	Link,
	Img
} from '@chakra-ui/react';
import img from '../../asserts/Rectangle 57.png';
import Google from '../../asserts/Social icon.png';
import { Link as ReactRouterLink } from 'react-router-dom';

const Login = () => {
	return (
		<Box>
			<Container maxW="2xl" centerContent>
				<Box padding="4" color="black" maxW="md" pb="1rem">
					<Heading as="h3">Welcome back!</Heading>
					<Text color="gray">Login with your details below</Text>
				</Box>
				<Box>
					<Image src={img} w="14rem" />
				</Box>
			</Container>
			<Box>
				<FormControl>
					<FormLabel>Email </FormLabel>
					<Input type="email" placeholder="Enter your email" />
				</FormControl>
				<FormControl mt="1rem">
					<FormLabel>Password </FormLabel>
					<Input type="password" placeholder="*******" />
				</FormControl>
			</Box>
			<Stack spacing="6rem" direction="row" my="1rem">
				<Checkbox colorScheme="red" defaultChecked>
					Checkbox
				</Checkbox>
				<Link color="#d43288" as={ReactRouterLink} to="/reset">Forget Password?</Link>
			</Stack>
			<Stack spacing={4}>
				<Button
					size="md"
					height="48px"
					width="330px"
					border="2px"
					bg="linear-gradient(92.66deg, #f0507a 0%, #971075 100%)"
					className="button"
					borderRadius="7px"
					color="white"
					variant="unstyled"
				>
					Login
				</Button>
				<Button
					size="md"
					height="48px"
					width="330px"
					border="1px"
					borderColor="gray"
					bg="transparent"
					display="flex"
					className="button"
					borderRadius="7px"
					color="black"
					leftIcon={<Img src={Google} />}
					variant="unstyled"
				>
					Sign in with Google
				</Button>
				<Text>
					<span color="grey">Don’t have account? </span>
					<Link as={ReactRouterLink} to="/signup" color="#d43288">
						Create account
					</Link>
				</Text>
			</Stack>
		</Box>
	);
};

export default Login;
