export interface Usuario {
    id?: number,
    nome: string,
    sobrenome: string,
    user_name: string,
    senha: string,
    data_nasc?: {
        dia: number,
        mes_num: number,
        ano: number,
        mes_stg?: string
    }
    email: string,
    telefone?: number,

    endereco?: {
        cidade: string,
        bairro: string,
        logradouro: string,
        numero: number,
        cep: number,
        complemento?: any[]
    }
    listaDesejo?: Produto[]

    user_role?: string
    log?: boolean,

}


export interface Produto {
    img?:string[],
    id:string,
    nome:string,
    descricao:string,
    anoLancamento:string,
    marca:string,
    preco:string,
    precoDesconto:string,
    parcelas?:string,
    frete?:string,
    tamanho?:string,
    qtd:number,
    data?:string,
    categoria:string,

    especificacoes:Especificacao[]
    
    avaliacoes?: {
        media:number,
        totalAvaliacoes:number
    }

    disponibilidade?: boolean,
}

export interface Especificacao{
    especificacao:string,
    valor:string
}

//versão atualizada do produto


// produtos=[
//     {
//       img:[
//         "img/prod1.jpg"
//       ],
//       id:1,
//       nome:"Produto Legal",
//       descricao:"esto es un produto muy legal, que nosotros gostamos mucho",
//       anoLancamento:"10/11/2000",
//       marca:"Estrela",
//       preco:"00,00",
//       tamanho:"0",
//       qtd:0,
//       data:"02/10/2025",
//       categoria:"Uma categoria ai",
//       especificacoes:[
//         {
//           especificacao:"Espeficação",
//           valor:"valor"
//         },
//         {
//           especificacao:"Espeficação",
//           valor:"valor"
//         }
//       ]
//     }



// export interface Produto {
//     id?: number
//     nome: string,
//     marca: string,
//     modelo?: string,
//     forncedor: string,
//     valor: number,
//     quantidade: string,
//     categoria: string

//     tamanho?: {
//         largura: number,
//         altura: number,
//         comprimento?: number
//     }
//     anoL: {
//         dia: number,
//         mes_num: number,
//         ano: number,
//         mes_stg?: string
//     }

//     data_aqs: {
//         dia: number,
//         mes_num: number,
//         ano: number,
//         mes_stg?: string
//     }

//     disponibilidade?: boolean,
// }