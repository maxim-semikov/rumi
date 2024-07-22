export type SERVICE_LIST = {
    name: string;
    description?: string;
}

type PRICE_LIST = {
    name: string,
    cost: string
}

type SERVICE_TYPE<T> = {
    serviceName: T,
    serviceImg: string,
    serviceList: SERVICE_LIST[],
    priceList?: PRICE_LIST[];
}

export type DOGS_SERVICE_NAME = 'Стрижка' | 'Триминг' | 'Экспресс-линька' | 'Дополнительно';

export type DOG_SERVICES_TYPE = SERVICE_TYPE<DOGS_SERVICE_NAME>;

export type CAT_SERVICES_TYPE = Omit<SERVICE_TYPE<string>, 'serviceName' | 'priceList'>
