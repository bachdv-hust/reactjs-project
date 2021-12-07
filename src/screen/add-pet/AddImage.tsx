import { FC, useState } from "react";
import { Colors } from "../../AppColor";
import {
  AppStyle,
  setOverFlowX,
  flexShrink,
  width,
  cursorPointer,
  height,
  radius,
  border,
  borderWidth,
  margin,
  flexCenterInParent,
  flexHori,
  marginHori,
  padding,
} from "../../AppStyle";
import Column from "../../components/Column";
import { ButtonImageView, ImageView } from "../../components/ImageView";
import Rows from "../../components/Row";
import TextView from "../../components/Text";

import "./AddImage.css";

import icCancle from "../../asset/ic_cancle.svg";

let imgDemo =
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg";

type ImageData = string | undefined;

export default function AddImage() {
  let [listImage, setListImage] = useState<ImageData[]>([]);

  return (
    <Rows style={AppStyle(setOverFlowX())}>
      <AddImageItem
        onChangeEvent={(event) => {
          console.log({ event });
          let newList = listImage;
          let files = event.target.files;
          if (files && files[0]) {
            let img = URL.createObjectURL(files[0]);
            newList.push(img);
            setListImage(Array.from(new Set(newList)));
          } else {
            // error handler
          }
        }}
      />

      <Rows >
        {listImage.map((imageItem, index) => (
          <ImageItem
          
            key={imageItem}
            position={0}
            item={imageItem}
            onItemDelete={() => {
              let _newList = [...listImage];
              _newList.splice(index, 1);
              setListImage(_newList);
            }}
          />
        ))}
      </Rows>
    </Rows>
  );
}

interface AddImageItemProps {
  onChangeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddImageItem: FC<AddImageItemProps> = (props) => {
  return (
    <div>
      <input
        id="file"
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        onChange={(e) => props.onChangeEvent(e)}
      />
      <label
        htmlFor="file"
        style={AppStyle(
          flexHori(),
          flexShrink(0),
          width(150),
          cursorPointer(),
          height(200),
          radius(10),
          border(Colors.color_8A8A8F),
          borderWidth(1),
          margin(12),
          flexCenterInParent()
        )}
      >
        <TextView>Thêm ảnh</TextView>
      </label>
    </div>
  );
};

interface ImageItemProps {
  item: string | undefined;
  position: number;
  onItemDelete: (position: number) => void;
}

const ImageItem: FC<ImageItemProps> = (props) => {
  return (
    <div
      className="container"

      style = {AppStyle(width(150), height(200), margin(12), padding(0),radius(8), borderWidth(1), border(Colors.color_E5E5E5))}
   
      onClick={() => {}}>
      <ImageView className="background-img" src={props.item} />
      <ButtonImageView
        className="ic-delete"
        src={icCancle}
        onClick={() => props.onItemDelete(props.position)}
      />
    </div>
  );
};
