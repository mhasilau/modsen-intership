export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address?: { // TODO: IUserAddress
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo?: {
      lat: string,
      lng: string,
    }
  },
  phone: string,
  website: string,
  company: { // TODO: IUserCompany
    name: string,
    catchPhrase?: string,
    bs?: string,
  }
}

export interface IUserSignIn {
  id: number,
  password: string,
  email: string,
  avatar: string
}
