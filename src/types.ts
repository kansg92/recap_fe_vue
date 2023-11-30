
/** 자산 type 선언 */
export interface asset {
    name : string,
    dsc  : '카드' | '현금' | '계좌' | '증권' | '부채'
    amount : number
    img : string
    user : string
    share : boolean
    pauDate? : string
    cntn : string
}


export interface tag{
    name : string,
    user : string,
    share : boolean
}