export const useLikeBtn: Function = (item: number, itemRef: HTMLInputElement | null, setItem: Function, isClicked: boolean, setIsClicked: Function, itemClass: string) => {
    if (isClicked) {
        setItem(item - 1);
        itemRef?.classList.toggle(itemClass)
    } else {
        setItem(item + 1);
        itemRef?.classList.toggle(itemClass)
    }
    setIsClicked(!isClicked);
}

