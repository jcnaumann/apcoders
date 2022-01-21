
/**
 * Obj Despesa
 */
export class Despesa {
    
    private _id!: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _descricao!: string;
    public get descricao(): string {
        return this._descricao;
    }
    public set descricao(value: string) {
        this._descricao = value;
    }

    private _tipoDespesa!: TipoDespesa;
    public get tipoDespesa(): TipoDespesa {
        return this._tipoDespesa;
    }
    public set tipoDespesa(value: TipoDespesa) {
        this._tipoDespesa = value;
    }

    private _valor!: number;
    public get valor(): number {
        return this._valor;
    }
    public set valor(value: number) {
        this._valor = value;
    }

    private _vencimentoFatura!: Date;
    public get vencimentoFatura(): Date {
        return this._vencimentoFatura;
    }
    public set vencimentoFatura(value: Date) {
        this._vencimentoFatura = value;
    }

    private _statusPagamento!: boolean;
    public get statusPagamento(): boolean {
        return this._statusPagamento;
    }
    public set statusPagamento(value: boolean) {
        this._statusPagamento = value;
    }

}

export class TipoDespesa {
    //id!: number;
    
    private _descricao_1!: string;
    public get descricao(): string {
        return this._descricao_1;
    }
    public set descricao(value: string) {
        this._descricao_1 = value;
    }
}