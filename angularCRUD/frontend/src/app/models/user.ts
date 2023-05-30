export interface User {
    id: number,
    nume:string,
    prenume: string,
    email: string,
    datanastere: Date, //string
    dataadaugare?: Date,
    telefon: string
}
