import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ContatoService {

    public name: string = '';
    public phone: string = '';
    public email: string = '';
    public comment: string = '';
    private _headers;

    constructor(private http: HttpClient){
    }

    registrar(data) {
        this._headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
        return new Promise((resolve, reject) => {
            this.http.put('http://localhost:3000/contato/registrar', JSON.stringify(data), this._headers)                     
            .subscribe(
                res =>{
                    resolve(res);
                },  
                err => {
                    reject(err) 
                }                
            );            
        });
    }
}