export enum Status {
   LOADING = 'loading',
   SUCCESS = 'success',
   ERROR = 'error'
}

//types
export interface InitialStateType {
   items: PizzaType[]
   status: Status
}

//types
export type PizzaType = {
   id: string;
   title: string;
   price: number;
   imageUrl: string;
   sizes: number[];
   types: number[];
   rating: number;
   count: number
}