export interface IRecapture {
    siteKey: string;
    theme: string;
    language: string;
    size: string;
    type: string;
    useGlobalDomain: boolean;
    
    reset(): any;
    expire(): any;
    error(): any;
    load(): any;
    success(): any;
   
}
