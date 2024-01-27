import {
	Button,
	Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
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

const SecondModal = ({ isOpen, onClose }) => {
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
						{/* <Spinner size="xl" color="red.500" /> */}
						<svg
							width="87"
							height="90"
							viewBox="0 0 87 90"width="18.7rem"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<rect x="0.5" width="86" height="89.0767" fill="url(#pattern0)" />
							<defs>
								<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
									<use
										xlink:href="#image0_2297_25019"
										transform="matrix(0.0136286 0 0 0.0131579 -0.620102 -0.355263)"
									/>
								</pattern>
								<image
									id="image0_2297_25019"
									width="150"
									height="150"
									xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAXNSR0IArs4c6QAAAqFJREFUeF7t0jENAAAMw7CVP+mhyOcC6BF5ZwoEBRZ8ulTgwIIgKQBWktUpWAwkBcBKsjoFi4GkAFhJVqdgMZAUACvJ6hQsBpICYCVZnYLFQFIArCSrU7AYSAqAlWR1ChYDSQGwkqxOwWIgKQBWktUpWAwkBcBKsjoFi4GkAFhJVqdgMZAUACvJ6hQsBpICYCVZnYLFQFIArCSrU7AYSAqAlWR1ChYDSQGwkqxOwWIgKQBWktUpWAwkBcBKsjoFi4GkAFhJVqdgMZAUACvJ6hQsBpICYCVZnYLFQFIArCSrU7AYSAqAlWR1ChYDSQGwkqxOwWIgKQBWktUpWAwkBcBKsjoFi4GkAFhJVqdgMZAUACvJ6hQsBpICYCVZnYLFQFIArCSrU7AYSAqAlWR1ChYDSQGwkqxOwWIgKQBWktUpWAwkBcBKsjoFi4GkAFhJVqdgMZAUACvJ6hQsBpICYCVZnYLFQFIArCSrU7AYSAqAlWR1ChYDSQGwkqxOwWIgKQBWktUpWAwkBcBKsjoFi4GkAFhJVqdgMZAUACvJ6hQsBpICYCVZnYLFQFIArCSrU7AYSAqAlWR1ChYDSQGwkqxOwWIgKQBWktUpWAwkBcBKsjoFi4GkAFhJVqdgMZAUACvJ6hQsBpICYCVZnYLFQFIArCSrU7AYSAqAlWR1ChYDSQGwkqxOwWIgKQBWktUpWAwkBcBKsjoFi4GkAFhJVqdgMZAUACvJ6hQsBpICYCVZnYLFQFIArCSrU7AYSAqAlWR1ChYDSQGwkqxOwWIgKQBWktUpWAwkBcBKsjoFi4GkAFhJVqdgMZAUACvJ6hQsBpICYCVZnYLFQFIArCSrU7AYSAqAlWR1ChYDSQGwkqxOwWIgKQBWktUpWAwkBcBKsjp9QYIAl6bSsVAAAAAASUVORK5CYII="
								/>
							</defs>
						</svg>

						<Heading>Welcome to Nova!</Heading>
						<Text color="#667085">
							Your Nova Express account is now live – unlock universe of opportunities for your business.
						</Text>
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
							Start exploring
						</Button>
					</Stack>
				</ModalBody>
				<ModalCloseButton />
			</ModalContent>
		</Modal>
	);
};

export default SecondModal;
