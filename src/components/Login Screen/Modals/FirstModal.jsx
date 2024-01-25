import {
	Box,
	Button,
	Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Spinner,
	Stack,
	Text
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const slideIn = keyframes`
	from{
		transform: translateY(80%);
	}to{
		transform: translateY(100%);
	}
`;

const FirstModal = ({ isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent
				css={{
					animation: `${slideIn} 0.5s ease-out`,
					transformOrigin: 'bottom',
					position: 'absolute',
					bottom: '-4rem',
					left: 0,
					right: 0,
					height: '19rem'
				}}
			>
				<ModalBody>
					<Stack spacing="0.8rem" alignItems="center" justifyContent="center" textAlign="center">
						<Spinner size="xl" color="red.500" />

						<Heading>Hold up Champ!!</Heading>
						<Text color="#667085">
							We are setting up your account, this usually takes less than 5 mintues.s
						</Text>
						<Button
							size="md"
							height="48px"
							width="330px"
							border="2px"
							bg="linear-gradient(148.17deg, #f9bedc 9.62%, rgba(251, 235, 243, 0) 100%)"
							borderRadius="7px"
							color="white"
							variant="unstyled"
						>
							Start exploring
						</Button>
					</Stack>
				</ModalBody>
				<ModalCloseButton />
			</ModalContent>
		</Modal>
	);
};

export default FirstModal;
