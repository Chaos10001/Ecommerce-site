import {
	Container,
	Box,
	Heading,
	Text,
	Image,
	Stack,
	Checkbox,
	Button,
	Link,
	Card,
	Flex,
	CardFooter
} from '@chakra-ui/react';
import img from '../../asserts/Rectangle 57.png';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
	const [ isChecked1, setisChecked1 ] = useState(false);
	const [ isChecked2, setisChecked2 ] = useState(false);

	const navigate = useNavigate();
	const handleSubmit = () => {
		if (isChecked1 && !isChecked2) {
			navigate('/seller');
		} else if (!isChecked1 && isChecked2) {
			navigate('/buyer');
		} else {
			console.error('invalid combination. please click one check box');
		}
	};

	return (
		<Box>
			<Container maxW="2xl" centerContent>
				<Box padding="4" color="black" maxW="md" pb="1rem">
					<Heading size="lg" fon>
						Which one are you?
					</Heading>
					<Text color="gray">Discovering or selling? Choose buyer or seller for a personalized journey.</Text>
				</Box>
				<Box>
					<Image src={img} w="14rem" />
				</Box>
			</Container>

			<Flex mt="19px">
				<Card mr="9px" h="8rem" w="12rem">
					<Box alignItems="end">
						<Checkbox
							colorScheme="red"
							ml="8.8rem"
							checked={isChecked1}
							onChange={() => setisChecked1(!isChecked1)}
						/>
					</Box>
					<CardFooter pt="5rem">
						<Text fontWeight="bold">I’m a Seller</Text>
					</CardFooter>
				</Card>
				<Card w="12rem" h="8rem">
					<Box alignItems="end">
						<Checkbox
							colorScheme="red"
							ml="8.8rem"
							checked={isChecked2}
							onChange={() => setisChecked2(!isChecked2)}
						/>
					</Box>
					<CardFooter pt="5rem">
						<Text fontWeight="bold">I’m a Buyer</Text>
					</CardFooter>
				</Card>
			</Flex>

			<Stack mt="12rem" spacing={4}>
				<Button
					size="md"
					height="48px"
					width="330px"
					border="2px"
					bg="linear-gradient(92.66deg, #f0507a 0%, #971075 100%)"
					borderRadius="7px"
					color="white"
					variant="unstyled"
					onClick={handleSubmit}
					type="submit"
				>
					Continue
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

export default SignUp;
