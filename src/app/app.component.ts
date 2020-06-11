import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento: boolean = true;
  public TipoEncerramento: string;

  public encerrarJogo(tipo: string): void {
    //console.log('Tipo', tipo);
    this.jogoEmAndamento = false;
    this.TipoEncerramento = tipo;
  }

  public reiniciarJogo():void{
    this.jogoEmAndamento = true;
    this.TipoEncerramento = undefined;
  }
}
