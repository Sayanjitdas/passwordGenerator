import { Component } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password Generator';
  generatedPass = '';
  passLength = 0;
  useLetters = false;
  useSymbols = false;
  useNumbers = false;

  getLength(event){
    this.passLength = parseInt(event.target.value)
  }

  onChangeUseLetters(event){
    if (event.target.checked){
      this.useLetters = true
    }else{
      this.useLetters = false
    }
  }


  onChangeUseNumbers(){
    this.useNumbers = !this.useNumbers
  }


  onChangeUseSymbols(){
    this.useSymbols = !this.useSymbols
  }


  onGenerateClick(){

    //Generating password
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$&*.^'

    let validChars = ''
    if(this.useNumbers){
      validChars += numbers
    }
    if(this.useLetters){
      validChars += letters
    }
    if(this.useSymbols){
      validChars += symbols
    }

    let passGen = '';
    for(let i = 0;i<this.passLength;i++){
      const index = Math.floor(Math.random() * validChars.length)
      passGen += validChars[index]
    } 

    this.generatedPass = passGen
  }
}
