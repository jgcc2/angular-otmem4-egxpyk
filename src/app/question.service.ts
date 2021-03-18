import { Injectable } from "@angular/core";

import { DropdownQuestion } from "./question-dropdown";
import { QuestionBase } from "./question-base";
import { TextboxQuestion } from "./question-textbox";
import { of } from "rxjs";

@Injectable()
export class QuestionService {
  // TODO: get from a remote source of question metadata
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: "brave",
        label: "Bravery Rating",
        options: [
          { key: "solid", value: "Solid" },
          { key: "great", value: "Great" },
          { key: "good", value: "Good" },
          { key: "unproven", value: "Unproven" }
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: "firstName",
        label: "First name",
        value: "Bombasto",
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: "emailAddress",
        label: "Email",
        type: "email",
        order: 2
      }),
      new TextboxQuestion({
        key: "otro",
        label: "otro",
        type: "text",
        order: 3
      }),
      new DropdownQuestion({
        key: "brave",
        label: "nuevo drop",
        options: [
          { key: "solid", value: "SolXid" },
          { key: "great", value: "GXreat" },
          { key: "good", value: "GooXd" },
          { key: "unproven", value: "UnXproven" }
        ],
        order: 3
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
