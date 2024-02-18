import React, { useState } from "react";
import { Reader } from "../../Reader";
import { PythonTutor } from "../../PythonTutor";
import { LifeOfMooseQuestions } from "../../../util/QuestionBank";
import { MultipleChoiceQuestion, Styles } from "../../Question";
import { QuestionSet } from "../../QuestionSet";

export interface IMooseChallengingYearProps {
  pageNumber: number;
}

const code =
  "moose_birth = 2012\npassed_away = 2020\nmoose_age = passed_away - moose_birth\nprint(moose_age)\nmoose_started = 2014\nyears_worked = passed_away - moose_started\nprint(years_worked)";

export function MooseChallengingYear({
  props,
  setAllowNext,
}: {
  props: any | IMooseChallengingYearProps;
  setAllowNext: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const q1 = LifeOfMooseQuestions["MooseChallengingYearQ1"];
  const q2 = LifeOfMooseQuestions["MooseChallengingYearQ2"];
  const q3 = LifeOfMooseQuestions["MooseChallengingYearQ3"];
  const q4 = LifeOfMooseQuestions["MooseChallengingYearQ4"];

  const [q1Correct, setQ1Correct] = useState(false);
  const [q2Correct, setQ2Correct] = useState(false);
  const [q3Correct, setQ3Correct] = useState(false);
  const [q4Correct, setQ4Correct] = useState(false);

  React.useEffect(() => {
    if (props.pageNumber === 2) {
      setAllowNext(q1Correct && q2Correct && q3Correct && q4Correct);
    }
  }, [
    q1Correct,
    q2Correct,
    q3Correct,
    q4Correct,
    props.pageNumber,
    setAllowNext,
  ]);

  if (props.pageNumber === 1) {
    return getPage1();
  } else {
    return getPage2();
  }

  function getPage1() {
    return (
      <div className="flex flex-col w-full h-full items-center font-semibold text-lg text-center gap-3">
        <Reader text="A challenging year for Moose." />
        <img
          width={300}
          height={300}
          src={"/LifeOfMoose/moose_with_hokie_bird.jpg"}
          alt="Moose graduating"
        />
        <PythonTutor props={{ code: code }} />
        <Reader text="Take a look at the code! What do you think will printed throughout the program?" />
      </div>
    );
  }

  function getPage2() {
    return (
      <div className="flex flex-col w-full h-full text-center items-center gap-5">
        <PythonTutor props={{ code: code }} />
        <QuestionSet
          correctAnswers={[q1Correct, q2Correct, q3Correct, q4Correct]}
        >
          <MultipleChoiceQuestion
            question={q1.question}
            answers={q1.answers}
            style={Styles.HORIZONTAL}
            setCorrect={setQ1Correct}
          />
          <MultipleChoiceQuestion
            question={q2.question}
            answers={q2.answers}
            style={Styles.HORIZONTAL}
            setCorrect={setQ2Correct}
          />
          <MultipleChoiceQuestion
            question={q3.question}
            answers={q3.answers}
            style={Styles.HORIZONTAL}
            setCorrect={setQ3Correct}
          />
          <MultipleChoiceQuestion
            question={q4.question}
            answers={q4.answers}
            style={Styles.HORIZONTAL}
            setCorrect={setQ4Correct}
          />
        </QuestionSet>
      </div>
    );
  }
}
