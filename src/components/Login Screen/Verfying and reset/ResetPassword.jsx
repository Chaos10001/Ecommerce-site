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
	Button,
	Link,
	FormHelperText
} from '@chakra-ui/react';
import img from '../../asserts/Rectangle 57.png';
import { Link as ReactRouterLink } from 'react-router-dom';

const ResetPassword = () => {
	return (
		<div>
			<Box>
				<Container maxW="2xl" centerContent>
					<Box padding="4" color="black" maxW="md" pb="1rem">
						<Heading as="h3">Reset password</Heading>
						<Text color="gray">Kindly create a new password you can easily remember.</Text>
					</Box>
					<Box>
						<Image src={img} w="14rem" />
					</Box>
				</Container>
				<Box mb="13rem">
					<FormControl mt="1rem">
						<FormLabel>Password </FormLabel>
						<Input type="password" placeholder="*******" />
						<FormHelperText mr="9rem">Must be atleast 8 characters </FormHelperText>
					</FormControl>
				</Box>

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
						Done
					</Button>
					<Link to="/" as={ReactRouterLink}>
						<Button
							size="md"
							height="48px"
							width="330px"
							border="1px"
							borderColor="gray"
							bg="transparent"
							className="button"
							borderRadius="7px"
							color="black"
							variant="unstyled"
						>
							Back
						</Button>
					</Link>
				</Stack>
			</Box>
		</div>
	);
};

export default ResetPassword;
