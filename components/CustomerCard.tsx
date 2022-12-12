/** @format */
import { Card, Table } from 'react-bootstrap';
import { Customer } from '../models/Customer';

function CustomerCard(props: { customer: Customer }): JSX.Element {
	const { CustomerCode, FirstName, LastName, Phone, Email } = props.customer;

	return (
		<>
			<Card>
				<Card.Header>
					<Card.Title>Customer Details</Card.Title>
				</Card.Header>
				<Card.Body>
					<Table striped>
						<tbody>
							<tr>
								<td>Customer Code:</td>
								<td>
									<b>{CustomerCode}</b>
								</td>
							</tr>
							<tr>
								<td>First Name:</td>
								<td>
									<b>{FirstName}</b>
								</td>
							</tr>
							<tr>
								<td>Last Name:</td>
								<td>
									<b>{LastName}</b>
								</td>
							</tr>
							<tr>
								<td>Phone:</td>
								<td>
									<b>{Phone}</b>
								</td>
							</tr>
							<tr>
								<td>Email:</td>
								<td>
									<b>{Email}</b>
								</td>
							</tr>
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</>
	);
}

export default CustomerCard;
