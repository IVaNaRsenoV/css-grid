import { Star } from "../components/Components-Content/Rating/Star";

export default function withRating(Component) {
  return function (props) {
    const { nums } = props;
    const ratingArr = [...new Array(nums).keys()].map((el) => el + 1);
    return (
      <Component {...props}>
        {ratingArr.map((el) => (
          <Star key={el} num={el} />
        ))}
      </Component>
    );
  };
}
