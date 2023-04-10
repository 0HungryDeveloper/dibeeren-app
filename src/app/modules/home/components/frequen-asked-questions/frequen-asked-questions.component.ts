import { Component } from '@angular/core';
import { FREQUENT_ASKED_QUESTIONS } from 'src/app/data/constants/data';
import { IQuestion } from 'src/app/data/interfaces/iquestion';

@Component({
  selector: 'app-frequen-asked-questions',
  templateUrl: './frequen-asked-questions.component.html',
  styleUrls: ['./frequen-asked-questions.component.scss']
})
export class FrequenAskedQuestionsComponent {

	questions : IQuestion[] = FREQUENT_ASKED_QUESTIONS;
}
