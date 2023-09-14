import { useState } from "react";

export const useLikeBtn: Function = (likeNum: number, dislikeNum: number, isClicked: 'like' | 'dislike' | false, type: 'like' | 'dislike') => {
    const [likes, setLikes] = useState(likeNum)
    const [disLikes, setDisLikes] = useState(dislikeNum)
    const [isPressed, setIsPressed] = useState(isClicked);

    if (isPressed == "dislike" || isPressed == 'like') {
        setDisLikes(disLikes - 1);
        setIsPressed(false)
        console.log('кнопа отжата')
    } else if (type == 'like') {
        setLikes(likes + 1);
        setIsPressed('like')
        console.log('кнопа нажата')
    } else if (type == 'dislike') {
        setDisLikes(disLikes + 1);
        setIsPressed('dislike')
        console.log('кнопа нажата')
    }

    return [likes, disLikes, isPressed]
}
