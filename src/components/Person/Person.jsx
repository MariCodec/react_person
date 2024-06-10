const MALE = 'm';
const partner = sex => (sex === MALE ? 'wife' : 'husband');

export const Person = ({ person }) => {
  const { name, age, sex, partnerName, isMarried } = person;
  const partnerInfo = isMarried
    ? `${partnerName} is my ${partner(sex)}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{partnerInfo}</p>
    </section>
  );
};
