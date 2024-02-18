import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit{

  @ViewChild('input_search') input: ElementRef<HTMLInputElement> | undefined;
  InputValue = 'johnpapa'
  params: string|null = null
  readonly window = window;

  constructor(  private apiService: ApiService,private route: ActivatedRoute) {
    this.params = this.route.snapshot.params['username']
  }

  ngOnInit() {
    // alert(this.params)
  }


  OnClickFn = () =>{
    if (!this.InputValue){
      if (this.input){

        this.input.nativeElement.focus()
      }
    }else{
      alert(this.InputValue)
    }
  }

  UserInfo = this.apiService.getUser(this.InputValue).result
}
