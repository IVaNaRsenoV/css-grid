import { Star } from "../components/Components-Content/Rating/Star";

export default function withRating(Component) {
  return function ({ props }) {
    return (
      <Component {...props}>
        <Star num={5} />
        <Star num={4} />
        <Star num={3} />
        <Star num={2} />
        <Star num={1} />
      </Component>
    );
  };
}
