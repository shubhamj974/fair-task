import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Ifairs } from 'src/app/shared/models/fairinterface';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {
  @Input() fairDataToChild !: Array<Ifairs>;
  @Output("fairDataToParent") fairDataToParent: EventEmitter<any> = new EventEmitter();
  public id: any = '62f63b4caa0bf10009d0d86a'
  public startDt: Array<string> = [];
  constructor() { }

  ngOnInit(): void {

  }

  onCardClick(id: any) {
    let fairId = id.getAttribute('id');
    this.id = fairId
    this.fairDataToParent.emit(fairId)
  }
}
