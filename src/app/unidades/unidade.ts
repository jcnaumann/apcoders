export class Unidade {
    private _id!: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _identificacao!: string;
    public get identificacao(): string {
        return this._identificacao;
    }
    public set identificacao(value: string) {
        this._identificacao = value;
    }

    private _proprietario!: string;
    public get proprietario(): string {
        return this._proprietario;
    }
    public set proprietario(value: string) {
        this._proprietario = value;
    }

    private _condominio!: string;
    public get condominio(): string {
        return this._condominio;
    }
    public set condominio(value: string) {
        this._condominio = value;
    }

    private _endereco!: Endereco;
    public get endereco(): Endereco {
        return this._endereco;
    }
    public set endereco(value: Endereco) {
        this._endereco = value;
    }

}

export class Endereco {
    private _id!: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _endereco!: string;
    public get endereco(): string {
        return this._endereco;
    }
    public set endereco(value: string) {
        this._endereco = value;
    }

    private _complemento!: string;
    public get complemento(): string {
        return this._complemento;
    }
    public set complemento(value: string) {
        this._complemento = value;
    }

    private _bairro!: string;
    public get bairro(): string {
        return this._bairro;
    }
    public set bairro(value: string) {
        this._bairro = value;
    }

    private _cidade!: string;
    public get cidade(): string {
        return this._cidade;
    }
    public set cidade(value: string) {
        this._cidade = value;
    }

    private _estado!: string;
    public get estado(): string {
        return this._estado;
    }
    public set estado(value: string) {
        this._estado = value;
    }

    private _cep!: string;
    public get cep(): string {
        return this._cep;
    }
    public set cep(value: string) {
        this._cep = value;
    }
}