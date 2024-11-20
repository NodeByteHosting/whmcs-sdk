export interface AffiliateActivateParams {
    userid: number;
}

export interface GetAffiliatesParams {
    limitstart?: number;
    limitnum?: number;
    userid?: number;
    visitors?: number;
    paytype?: 'percentage' | 'fixedamount';
    payamount?: number;
    onetime?: number;
    balance?: number;
    withdrawn?: number;
}