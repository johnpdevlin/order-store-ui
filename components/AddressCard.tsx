/** @format */
import { Card, Table } from 'react-bootstrap';
import { Address } from '../models/Address';
import { CountryCode } from '../models/Country';

function AddressCard(props: {
	countryCode: CountryCode;
	address: Address;
}): JSX.Element {
	const CountryCode = props.countryCode;
	const { FullName, AddressType, AddressLine1, AddressLine2 } = props.address;

	return (
		<>
			<Card>
				<Card.Header>
					<Card.Title>Address Details</Card.Title>
				</Card.Header>
				<Card.Body>
					<Card.Text>
						{FullName} (<i>{AddressType} Address</i>)
						<br />
						{AddressLine1}
						<br />
						{AddressLine2}
						<br />
						{CountryCode}
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}

export default AddressCard;
