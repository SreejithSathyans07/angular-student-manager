export class Table{
    constructor(){
        this.header = [],
        this.data = []
    }
    header:string[];
    data: data[];
}

export class data{
    constructor(){
        this.key = '';
        this.value = ''
    }
    key: string;
    value: string;
}