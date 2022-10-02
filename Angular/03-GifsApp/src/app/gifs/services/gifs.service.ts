import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';




@Injectable({
  providedIn: 'root'//Se encuentra a nivel global
})
export class GifsService {

  private apiKey     : string = 'CtbSNZMFPFlbWl1x5KQjtqPOHnE1ema5';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  public resultados : Gif [] = [];
  private _historial : string [] = [];

  get historial(){ return [...this._historial]; }

  constructor(private http: HttpClient){ 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    // if( localStorage.getItem('historial')){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
    // if( localStorage.getItem('resultados')){
    //   this._historial = JSON.parse(localStorage.getItem('resultados')!);
    // }
  }

  buscarGifs( query: string = '' ) : void{
    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes( query )){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query );

    //Peticion Http
    this.http.get <SearchGifsResponse>(`${this.servicioUrl}/search`,{ params })
      .subscribe( (resp ) => {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }

}
