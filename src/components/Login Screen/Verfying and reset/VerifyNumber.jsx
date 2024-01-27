import {
	Container,
	Box,
	Heading,
	Text,
	Image,
	Stack,
	Button,
	Link,
	HStack,
	PinInput,
	PinInputField
} from '@chakra-ui/react';
import img from '../../asserts/Rectangle 57.png';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FirstModal from '../Modals/FirstModal';
import SecondModal from '../Modals/SecondModal';

const VerifyNumber = () => {
	const [ showFIrstModal, setshowFIrstModal ] = useState(false);
	const [ showSecondModal, setshowSecondModal ] = useState(false);

	const handleButtonClick = () => {
		setshowFIrstModal(true);
	};
	useEffect(
		() => {
			if (showFIrstModal) {
				const timer = setTimeout(() => {
					setshowFIrstModal(false);
					setshowSecondModal(true);
				}, 5000);
				return () => clearTimeout(timer);
			}
		},
		[ showFIrstModal ]
	);
	return (
		<Box>
			<Container maxW="2xl" centerContent>
				<Box padding="4" color="black" maxW="md" pb="1rem">
					<Heading size="lg">Verify your account</Heading>
					<Text color="gray">
						4-digirs code has been sent to your phone number <span className="defaultColor">(Change)</span>{' '}
					</Text>
				</Box>
				<Box>
					<Image src={img} w="14rem" />
				</Box>
				<HStack mt="2rem">
					<PinInput size="lg" otp>
						<PinInputField h="5rem" w="4rem" />
						<PinInputField h="5rem" w="4rem" />
						<span className="dash" />
						<PinInputField h="5rem" w="4rem" />
						<PinInputField h="5rem" w="4rem" />
					</PinInput>
				</HStack>
				<Box mt="2rem" mb="7rem">
					<Text color="gray">Resend Code in 04:05</Text>
					<Link as={ReactRouterLink} to="/verifyemail" textDecoration="underline">
						Resend code by email address
					</Link>
				</Box>
			</Container>

			<Stack spacing={4} justifyContent="center" alignItems="center">
				<Button
					size="md"
					height="48px"
					width="18.7rem"
					border="2px"
					bg="linear-gradient(92.66deg, #f0507a 0%, #971075 100%)"
					className="button"
					borderRadius="7px"
					color="white"
					variant="unstyled"
					onClick={handleButtonClick}
				>
					Submit
				</Button>
				<FirstModal isOpen={showFIrstModal} onClose={() => setshowFIrstModal(false)} />
				<SecondModal isOpen={showSecondModal} onClose={() => setshowSecondModal(false)} />
				<Link to="/signup" as={ReactRouterLink}>
					<Button
						size="md"
						height="48px"
						width="18.7rem"
						border="1px"
						borderColor="gray"
						bg="transparent"
						display="flex"
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
	);
};

export default VerifyNumber;
