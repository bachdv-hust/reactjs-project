import { FC } from "react";
import {
  AppStyle,
  background,
  circleImage,
  flexCenter,
  height,
  margin,
  overFlow,
  paddingHori,
  paddingVerti,
  semiBold,
  minHeight,
  borderWidth,
  radius,
  weightItem,
  width,
  marginVertical,
  maxWidth,
  flexShrink,
  maxHeight,
} from "../../AppStyle";
import Column from "../../components/Column";
import { ImageView } from "../../components/ImageView";
import Rows from "../../components/Row";
import TextView from "../../components/Text";
import User, { } from "../../models/User";
interface CommentFormProp {}

const CommentForm = (props: CommentFormProp) => {
  let lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi debitis eos sunt veritatis maiores cupiditate optio suscipit quo? Sequi dolorum cum voluptate libero voluptatum quam recusandae eveniet minima consequuntur aliquam!";

  // let fakeCommentUsers: CommentItemProp[] = Array.from(Array(10).keys()).map(
  //   () => {
  //     return {
  //       user: getRandomFakeUser(),
  //       lastComment: lorem,
  //     };
  //   }
  // );


  return (
    <div style={AppStyle(weightItem(1))}>
      {/*{fakeCommentUsers.map((item) => {*/}
      {/*  return <CommentItem user={item.user} lastComment={item.lastComment} />;*/}
      {/*})}*/}
      <input
        type="text"
        id="comment"
        placeholder="Bình luận..."
        style={AppStyle(
          width("auto"),
          borderWidth(0),
          paddingHori(15),
          radius(20),

          minHeight(40),
          background("#f4f4f8"),
          width("100%"),
          maxWidth("100%")
        )}
      />
    </div>
  );
};

export default CommentForm;

interface CommentItemProp {
  user: User;
  lastComment: string;
}

const CommentItem: FC<CommentItemProp> = (props) => {
  let user = props.user;

  return (
    <Rows
      style={AppStyle(
        paddingVerti(8),
        paddingHori(12),
        marginVertical(12),
        flexCenter(),
        maxWidth("100%"),
        radius(30),
        background("#F1F2F5"),
        maxHeight("auto")
      )}
    >
      <div style={AppStyle(width(60), height(60), margin(15))}>
        <ImageView style={AppStyle(circleImage(60))} src={user.avatar} />
      </div>

      <Column
        style={AppStyle(background("#f4f4f8"), height("100%"), flexShrink())}
      >
        <TextView style={AppStyle(semiBold(17))}>{user.name}</TextView>

        <TextView style={AppStyle(overFlow())}>{props.lastComment}</TextView>
      </Column>
    </Rows>
  );
};
