import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import { DatePicker } from 'tns-core-modules/ui/date-picker';

@Component({
  selector: 'ns-datepicker-modal',
  templateUrl: './datepicker-modal.component.html',
  styleUrls: ['./datepicker-modal.component.css'],
  moduleId: module.id,
})
export class DatepickerModalComponent implements OnInit {

  public date: Date;



  constructor(private params: ModalDialogParams) { 
    this.date = new Date();
  }

  ngOnInit() {
  }

  public close(response: Date){
    this.params.closeCallback(response);
  }

  onPickerLoaded(args){
    let datePicker = <DatePicker>args.object
    
    datePicker.year = 2019;
    datePicker.month = 10;
    datePicker.day = 1;
    datePicker.minDate = new Date();
    datePicker.maxDate = new Date(2045, 12, 31);
  }

}
