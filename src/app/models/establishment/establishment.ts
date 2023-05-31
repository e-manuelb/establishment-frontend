export class Establishment {
  private _id: bigint;
  private _name: string;
  private _phone: string;
  private _address: string;
  private _number: string;
  private _complement: string;
  private _neighborhood: string;
  private _cep: string;
  private _city: string;
  private _state: string;

  get id(): bigint {
    return this._id;
  }

  set id(value: bigint) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get number(): string {
    return this._number;
  }

  set number(value: string) {
    this._number = value;
  }

  get complement(): string {
    return this._complement;
  }

  set complement(value: string) {
    this._complement = value;
  }

  get neighborhood(): string {
    return this._neighborhood;
  }

  set neighborhood(value: string) {
    this._neighborhood = value;
  }

  get cep(): string {
    return this._cep;
  }

  set cep(value: string) {
    this._cep = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  constructor(id: bigint, name: string, phone: string, address: string, number: string, complement: string, neighborhood: string, cep: string, city: string, state: string) {
    this._id = id;
    this._name = name;
    this._phone = phone;
    this._address = address;
    this._number = number;
    this._complement = complement;
    this._neighborhood = neighborhood;
    this._cep = cep;
    this._city = city;
    this._state = state;
  }
}


