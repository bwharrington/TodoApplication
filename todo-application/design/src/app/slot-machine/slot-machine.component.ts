import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'slot-machine',
  templateUrl: './slot-machine.component.html',
  styleUrls: ['./slot-machine.component.css']
})
export class SlotMachineComponent implements OnInit {

  slotMachineData: any[] = [];
  one : string = "-";
  two : string = "-";
  three : string = "-";
  credits : number = 10;
  creditCookieName : string = "SlotMachineCredits";
  moveButton : boolean = true;

  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    this.setCookie(this.creditCookieName, this.credits.toString(), 1)
  }

  public getRoll(){
    
    let tempCredits = this.getCookie(this.creditCookieName);
    
    this.restApi.getSlotMachineRoll(tempCredits).subscribe((data) => {
        this.one = this.getSlotMachineSymbol(Number(data[0]));
        this.two = this.getSlotMachineSymbol(Number(data[1]));
        this.three = this.getSlotMachineSymbol(Number(data[2]));

        let addedCredits = this.getWinnerCredits();
        if(addedCredits > 0) {
          window.alert("Congradulations! You Won! Added " + addedCredits + " to your total.");
          this.credits = this.credits + addedCredits;
        } else {
          this.credits = this.credits - 1;
        }

        this.setCookie(this.creditCookieName, this.credits.toString(), 1)
    });

    if(Number(this.credits) === 0) {
      window.alert("Sorry you are out of credits. Better luck next time!");
    }
  
}

public cashOut() {
  let tempCredits = this.getCookie(this.creditCookieName);
  window.alert("Congradulations! You Cashed out with " + tempCredits);
}

public moveCashOutButton() {
  let randomNumber = Math.floor((Math.random() * 2) + 1);
  if(randomNumber == 1) {
    this.moveButton = !this.moveButton;
  } 
}

public getSlotMachineSymbol(symbolNumber : number) : string {
  //(C for cherry, L for lemon, O for orange, W for watermelon
  if(symbolNumber == 0){
    return "C";
  } else if(symbolNumber == 1){
    return "L";
  } else if (symbolNumber == 2) {
    return "O";
  } else if (symbolNumber == 3) {
    return "W";
  }

  return "";

}

public getWinnerCredits() : number {
  if(this.one === this.two && this.two === this.three && this.three === this.one)
  {
    if(this.one == "C") {
      return 10;
    } else if(this.one == "L") {
      return 20;
    } else if(this.one == "O") {
      return 30;
    } else if(this.one == "W") {
      return 40;
    }
  }

  return 0;
}

public setCookie(name : string ,value : string , days : number) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

public getCookie(name : string) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return "0";
}


}
