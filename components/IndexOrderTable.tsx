/** @format */

import Link from 'next/link';
import { Table } from 'react-bootstrap';
import { Order } from '../models/Order';

function IndexOrderTable(props: { orders: Order[] }): JSX.Element {
	const orders: Order[] = props.orders;

	return (
		<>
			<Table striped>
				<thead>
					<tr>
						<th>Customer Code</th>
						<th>Name</th>
						<th>Order No.</th>
						<th>Items ordered</th>
					</tr>
				</thead>
				<tbody>
					{orders.map((o) => {
						return (
							<tr>
								<td>
									<Link href={`./customer/${o.Customer.CustomerCode}`}>
										{o.Customer.CustomerCode}
									</Link>
								</td>
								<td>
									{o.Customer.FirstName} {o.Customer.LastName}
								</td>
								<td>{o.ReferenceNum}</td>
								<td>{o.OrderLines.length}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</>
	);
}

export default IndexOrderTable;
