import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';




@Injectable({
  providedIn: 'root'//Se encuentra a nivel global
})
export class GifsService {

  private apiKey     : string = 'CtbSNZMFPFlbWl1x5KQjtqPOHnE1ema5&q';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private limit : number = 10;

  public resultados : Gif [] = [];

  private _historial : string [] = [];

  get historial(){ return [...this._historial]; }

  constructor(private http: HttpClient){ }

  buscarGifs( query: string ) : void{
    query = query.trim().toLowerCase();
    if(!this._historial.includes( query )){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10);
    }
    
    //Peticion Http
    this.http.get <SearchGifsResponse>(`${this.servicioUrl}/search?api_key=${this.apiKey}=${query}&limit=${this.limit}`)
      .subscribe( (resp ) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });
  }
}
