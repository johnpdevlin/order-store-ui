/** @format */

import data from '../../getData';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import AddressCard from '../../components/AddressCard';
import CustomerCard from '../../components/CustomerCard';
import OrderCard from '../../components/OrderCard';
import { Order } from '../../models/Order';

function Customer(order: Order): JSX.Element {
	const { ReferenceNum, CountryCode, Address, OrderLines, Customer } =
		order.order;

	return (
		<>
			<Head>
				<title>Customer</title>
			</Head>
			<Container>
				<Row className='mb-4'>
					<Col xs={7}>
						<CustomerCard customer={Customer} />
					</Col>
					<Col xs={5}>
						<AddressCard address={Address} countryCode={CountryCode} />
					</Col>
				</Row>
				<Row>
					<Col>
						<OrderCard referenceNum={ReferenceNum} orderLines={OrderLines} />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Customer;

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [], //indicates that no page needs be created at build time
		fallback: 'blocking', //indicates the type of fallback
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params!;

	const parsedData = JSON.parse(data);

	const order = parsedData.filter((d: Order) => {
		return d.Customer.CustomerCode === id;
	});

	return {
		props: {
			order: order[0],
		},
	};
};
