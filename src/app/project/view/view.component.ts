import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  fourthFormGroup:FormGroup;
  // fiveFormGroup:FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    $('.value').each(function() {
      var text = $(this).text();
      $(this).parent().css('width', text);
    });
    
    $('.block').tooltip();

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    // this.fiveFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }
}
