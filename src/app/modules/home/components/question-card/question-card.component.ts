import { Component, Input, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/data/interfaces/iquestion';

@Component({
	selector: 'app-question-card',
	templateUrl: './question-card.component.html',
	styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent implements OnInit {

	selectedAccordionIndex: number = 0;
	@Input() questions!: IQuestion[];

	ngOnInit(): void {
	}
}
