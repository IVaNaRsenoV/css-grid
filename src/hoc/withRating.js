import { Star } from "../components/Components-Content/Rating/Star";

export default function withRating(Component) {
  return function (props) {
    const { nums } = props;
    return (
      <Component {...props}>
        {nums.map((el) => (
          <Star key={el} num={el} />
        ))}
      </Component>
    );
  };
}
