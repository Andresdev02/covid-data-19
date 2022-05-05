export interface DataConfirmedProps {
    Country: string;
    CountryCode: string;
    Province: string;
    City: string;
    CityCode: string;
    Lat: string;
    Lon: string;
    Cases: number;
    Status: string;
    Date: string;
}


export interface DataCasesProps {
    ID: string;
    Country: string;
    CountryCode: string;
    Province: string;
    City: string;
    CityCode: string;
    Lat: string;
    Lon: string;
    Confirmed: number;
    Deaths: number;
    Recovered: number;
    Active: number;
    Date: string;
}



export interface DataChart {
    name: string;
    Confirmed: number;
}

