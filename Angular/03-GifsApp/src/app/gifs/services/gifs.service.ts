import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'//Se encuentra a nivel global
})
export class GifsService {

  private apiKey     : string = 'CtbSNZMFPFlbWl1x5KQjtqPOHnE1ema5';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';

  private _historial : string [] = [];

  get historial(){ return [...this._historial]; }

  constructor(private http: HttpClient){ }

  buscarGifs( query: string ) : void{
    query = query.trim().toLowerCase();
    if(!this._historial.includes( query )){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10);
    }
    
    console.log(this._historial);

    //Peticion Http
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=CtbSNZMFPFlbWl1x5KQjtqPOHnE1ema5&q=dragon ball z&limit=10')
      .subscribe( (resp: any ) => {
        console.log(resp.data);
      });
  }

  
}
