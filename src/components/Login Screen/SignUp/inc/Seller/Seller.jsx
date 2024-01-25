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
	Img,
	Select,
	FormHelperText
} from '@chakra-ui/react';
import img from '../../../../asserts/Rectangle 57.png';
import Google from '../../../../asserts/Social icon.png';

import { Link as ReactRouterLink } from 'react-router-dom';

const Seller = () => {
	return (
		<Box>
			<Container maxW="2xl" centerContent>
				<Box padding="4" color="black" maxW="md" pb="1rem">
					<Heading as="h3">Let’s get started</Heading>
					<Text color="gray">Sign up and let your products shine in a vibrant community of buyers!</Text>
				</Box>
				<Box>
					<Image src={img} w="14rem" />
				</Box>
			</Container>
			<Box>
				<FormControl>
					<FormLabel>FullName </FormLabel>
					<Input type="text" placeholder="Enter your FullName" />
				</FormControl>
				<FormControl mt="1rem">
					<FormLabel>Email </FormLabel>
					<Input type="email" placeholder="Enter your email" />
				</FormControl>
				<FormControl mt="1rem">
					<FormLabel>Store name </FormLabel>
					<Input type="text" placeholder="Enter your store name" />
				</FormControl>
				<FormControl mt="1rem">
					<FormLabel>Phone number </FormLabel>
					<Input type="tel" placeholder="Enter your phone number" />
				</FormControl>
				<FormControl mt="1rem">
					<FormLabel>Address </FormLabel>
					<Input type="email" placeholder="Enter your address" />
				</FormControl>
				<FormControl mt="1rem">
					<FormLabel>Gender </FormLabel>
					<Select placeholder="Select Gender">
						<option>Male</option>
						<option>Female</option>
					</Select>
				</FormControl>
				<FormControl mt="1rem">
					<FormLabel>Create Password </FormLabel>
					<Input type="password" placeholder="*******" />
					<FormHelperText mr="9rem">Must be atleast 8 characters </FormHelperText>
				</FormControl>
			</Box>
			<Stack spacing="6rem" direction="row" my="1rem">
				<Checkbox colorScheme="red" defaultChecked>
					<Text fontWeight="semibold">
						I agree to <span className="defaultColor">Terms,</span>{' '}
						<span className="defaultColor"> Privacy Policy</span> and{' '}
						<span className="defaultColor">Fees</span>
					</Text>
				</Checkbox>
			</Stack>
			<Stack spacing={4}>
				<Link to='/verifynumber' as={ReactRouterLink}>
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
						Create account
					</Button>
				</Link>
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
					<span color="grey">Already have an account? </span>
					<Link as={ReactRouterLink} to="/" color="#d43288">
						Login
					</Link>
				</Text>
			</Stack>
		</Box>
	);
};

export default Seller;
