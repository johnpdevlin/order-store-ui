/** @format */

import { Address } from './address';
import { CountryCode } from './country';
import { Customer } from './customer';
import { OrderLine } from './OrderLine';

export type Order = {
	'@seq': number;
	ReferenceNum: string;
	CountryCode: CountryCode;
	Address: Address;
	Customer: Customer;
	OrderLines: OrderLine[];
};
