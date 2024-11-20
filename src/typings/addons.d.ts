export interface UpdateClientAddonParams{
    id: number;
    status?: string;
    addonid?: number;
    name?: string;
    setupfee?: number;
    recurring?: number;
    billingcycle?: string;
    nextduedate?: string;
    terminationdate?: string;
    notes?: string;
    autorecalc?: boolean;
}