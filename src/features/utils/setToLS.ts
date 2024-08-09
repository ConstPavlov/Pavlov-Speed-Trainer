export const setToLS = (newArr: any, keyObj: string) => {
	const jsonObj = JSON.stringify(newArr)
	localStorage.setItem(keyObj, jsonObj)
}
