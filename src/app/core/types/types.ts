export interface Usuario {
    id?: number,
    nome: string,
    sobrenome: string,
    user_name: string,
    data_nasc: {
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
    id?: number
    nome: string,
    marca: string,
    modelo?: string,
    forncedor: string,
    valor: number,
    quantidade: string,
    categoria: string
    tamanho?: {
        largura: number,
        altura: number,
        comprimento?: number
    }
    anoL: {
        dia: number,
        mes_num: number,
        ano: number,
        mes_stg?: string  
    }

    data_aqs: {
        dia: number,
        mes_num: number,
        ano: number,
        mes_stg?: string  
    }

    disponibilidade?: boolean,
}