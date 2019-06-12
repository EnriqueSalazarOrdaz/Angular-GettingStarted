import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    @Input() productName : string ;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    onClick(){
        this.ratingClicked.emit(this.productName);
    }
}