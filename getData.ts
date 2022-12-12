/** @format */

import { Address } from './models/Address';
import { Customer } from './models/Customer';
import { Order } from './models/Order';

const Customer1: Customer = {
	CustomerCode: 'KM-01',
	FirstName: 'John',
	LastName: 'Hope',
	Phone: '+35312345678',
	Email: 'john@xyz.com',
};

const Customer2: Customer = {
	CustomerCode: 'KM-05',
	FirstName: 'Alan',
	LastName: 'Key',
	Phone: '+35312345678',
	Email: 'alan@xyz.com',
};

const Customer3: Customer = {
	CustomerCode: 'KM-02',
	FirstName: 'Luke',
	LastName: 'Mac',
	Phone: '+35312345678',
	Email: 'luke@xyz.com',
};

const Address1: Address = {
	FullName: 'Office A',
	AddressType: 'Private',
	AddressLine1: '1A, Airport Business Park',
	AddressLine2: 'Cloghran, Swords, Co. Dublin',
};

const Address2: Address = {
	FullName: 'FAO BG',
	AddressType: 'Private',
	AddressLine1: '1A, Airport Business Park, Itassca',
	AddressLine2: 'Chicago, Illinois',
};

const Address3: Address = {
	FullName: 'Office B',
	AddressType: 'Private',
	AddressLine1: '2A, Airport Business Park',
	AddressLine2: 'Cloghran, Swords, Co. Dublin',
};

const order1: Order = {
	'@seq': 1,
	ReferenceNum: 'o1234567',
	CountryCode: 'IRL',
	Address: Address1,
	Customer: Customer1,
	OrderLines: [
		{
			'@seq': 1,
			ItemNum: 'R457739',
			ItemDescription: 'iPhone 8',
		},
		{
			'@seq': 1,
			ItemNum: 'R457739X',
			ItemDescription: 'iPhone 10',
		},
	],
};

const order2: Order = {
	'@seq': 2,
	ReferenceNum: 'o1234999',
	CountryCode: 'USA',
	Address: Address2,
	Customer: Customer2,
	OrderLines: [
		{
			'@seq': 1,
			ItemNum: 'R457734',
			ItemDescription: 'iPad Mini',
		},
	],
};

const order3: Order = {
	'@seq': 3,
	ReferenceNum: 'o1234555',
	CountryCode: 'IRL',
	Address: Address3,
	Customer: Customer3,
	OrderLines: [{ '@seq': 1, ItemNum: 'R457710', ItemDescription: 'iPhone 4' }],
};

const orders = JSON.stringify([order1, order2, order3]);

export default orders;
