
/** 자산 type 선언 */
export interface Asset {
    id   : number,
    name : string,
    dsc  : '신용' | '체크' | '현금' | '계좌' | '증권' | '부채'
    amount : number
    img : string
    user : string
    share : boolean
    sharedAsset : Asset | null
    modify : boolean
    payDate? : number
    cntn : string
}


export interface Tag{
    name : string,
    user : string,
    share : boolean,
    modify : boolean,
}