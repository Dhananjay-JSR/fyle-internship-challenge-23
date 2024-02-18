import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  @ViewChild('input_search') input: ElementRef<HTMLInputElement> | undefined;
  constructor(
    private apiService: ApiService
  ) {


  }



  InputValue = 'johnpapa'

  OnClickFn = () =>{
    if (!this.InputValue){
      if (this.input){

      this.input.nativeElement.focus()
      }
    }else{
      alert(this.InputValue)
    }
  }

  ngOnInit() {
    this.apiService.getUser(this.InputValue).subscribe((e)=>{

    });
  }
}
