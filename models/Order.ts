/** @format */

import { Address } from './Address';
import { CountryCode } from './Country';
import { Customer } from './Customer';
import { OrderLine } from './OrderLine';

export type Order = {
	'@seq': number;
	ReferenceNum: string;
	CountryCode: CountryCode;
	Address: Address;
	Customer: Customer;
	OrderLines: OrderLine[];
};
