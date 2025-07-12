interface Question {
  id: number;
  title: string;
  shortAnswer: string;
  longAnswer: string;
}

interface Props {
  questions: Question[];
  answers: Record<number, 'know' | 'dontKnow' | null>;
}

export default function ResultsPage({ questions, answers }: Props) {
  const known = questions.filter((q) => answers[q.id] === 'know');
  const unknown = questions.filter((q) => answers[q.id] === 'dontKnow');

  return (
    <div>
      <h2>Результаты</h2>

      <h3 style={{ color: 'green' }}>Знаю</h3>
      {known.map((q) => (
        <div
          key={q.id}
          style={{ border: '2px solid green', margin: 10, padding: 10 }}
        >
          <h4>{q.title}</h4>
          <details>
            <summary>Ответ</summary>
            <div
              dangerouslySetInnerHTML={{
                __html: q.longAnswer || q.shortAnswer,
              }}
            />
          </details>
        </div>
      ))}

      <h3 style={{ color: 'red' }}>Не знаю</h3>
      {unknown.map((q) => (
        <div
          key={q.id}
          style={{ border: '2px solid red', margin: 10, padding: 10 }}
        >
          <h4>{q.title}</h4>
          <details>
            <summary>Ответ</summary>
            <div
              dangerouslySetInnerHTML={{
                __html: q.longAnswer || q.shortAnswer,
              }}
            />
          </details>
        </div>
      ))}
    </div>
  );
}
