/** @format */

import { Card, Table } from 'react-bootstrap';
import { OrderLine } from '../models/OrderLine';

type OrderCardProps = {
	referenceNum: string;
	orderLines: OrderLine[];
};

function OrderCard({ referenceNum, orderLines }: OrderCardProps): JSX.Element {
	return (
		<>
			<Card>
				<Card.Header>
					<Card.Title>Order {referenceNum}</Card.Title>
				</Card.Header>
				<Card.Body>
					<Table striped>
						<thead>
							<tr>
								<th>Item Number</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							{orderLines.map((o) => {
								return (
									<tr>
										<td>{o.ItemNum}</td>
										<td>{o.ItemDescription}</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</>
	);
}

export default OrderCard;
