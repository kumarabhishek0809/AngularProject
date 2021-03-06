import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 4;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<String>
    = new EventEmitter<String>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
    onClick(): void {
        this.ratingClicked.emit(`The Rating ${this.rating} was clicked `);
    }

}

