import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";
import {storage} from "../components/firebase/FirebaseApp";

class FirebaseHelper {
	private constructor() {
	}

	static getInstance() {
		return new FirebaseHelper()
	}

	/**
	 * return a promise, url of image if success
	 * */
	uploadImageFile(image: File): Promise<string> {
		let refImg = ref(storage, `images/${image.name}`)

		let uploadTask = uploadBytesResumable(refImg, image);
		return new Promise<string>((resolve, reject) => {
			uploadTask.on(
				"state_changed",
				undefined,
				(error) => {
					reject(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						resolve(downloadURL);
					});
				}
			);
		})
	}
}

const firebaseHelperInstance = FirebaseHelper.getInstance()

export default firebaseHelperInstance
