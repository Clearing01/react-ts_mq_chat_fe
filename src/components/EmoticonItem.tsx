import React, { useEffect, useState } from "react";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import styles from './ChatRoom.module.css';

function EmoticonItem(props: any) {
  const emoticonList = props.emoticonList;
  const setMessage = props.setMessage;

  const [emoticonGroupIndex, setEmoticonGroupIndex] = useState<any>(0);
  const [emoticonItemIndex, setEmoticonItemIndex] = useState<any>(0);

  const handleEmoticonGroup = (index: number) => {
    setEmoticonGroupIndex(index);
  };

  const handleEmoticonItem = (index: number) => {
    setEmoticonItemIndex(index);

    setMessage(emoticonList[emoticonGroupIndex].emoticonItems[index].imageUrl);

    // for (
    //   let i = 0;
    //   i < emoticonList[emoticonGroupIndex].emoticonItems.length;
    //   i++
    // ) {
    //   document.querySelector(`#emoticon-item-image-url-${i}`).style.opacity =
    //     "1";
    // }
    //
    // document.querySelector(`#emoticon-item-image-url-${index}`).style.opacity =
    //   "0.5";
  };

  return (
    <div className={styles.emoticonItemContainer}>
      <Stack
        direction="row"
        spacing={1}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ paddingBottom: "30px" }}
      >
        {emoticonList &&
          emoticonList.map((emoticonGroup: any, index: any) => {
            return (
              <div
                key={emoticonGroup.id}
                onClick={() => handleEmoticonGroup(index)}
                className={styles.divCursorPointer}
              >
                {emoticonGroup.name}
              </div>
            );
          })}
      </Stack>

      <Stack
        direction="row"
        spacing={1}
        sx={{ overflowY: "scroll", maxHeight: "320px" }}
        useFlexGap
        flexWrap="wrap"
      >
        {emoticonList[emoticonGroupIndex].emoticonItems.map(
          (emoticonItem: any, index: any) => {
            return (
              <div
                key={emoticonItem.id}
                onClick={() => handleEmoticonItem(index)}
                className={styles.divCursorPointer}
              >
                <img
                  id={"emoticon-item-image-url-" + index}
                  src={emoticonItem.imageUrl}
                  alt=""
                />
              </div>
            );
          }
        )}
      </Stack>
    </div>
  );
}

export default EmoticonItem;
