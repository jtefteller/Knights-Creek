import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp, doc } from "firebase/firestore";

export default class Message {
	constructor({ first, last, email, message }) {
		this.first = first;
		this.last = last;
		this.email = email;
		this.message = message;
		this.createdAt = serverTimestamp();
	}

	async save() {
		const message = {};
		const messagesCollectionRef = collection(
			doc(db, "knights-creek/contactForm"),
			"messages"
		);

		try {
			const docRef = await addDoc(messagesCollectionRef, {
				first: this.first,
				last: this.last,
				email: this.email,
				message: this.message,
				createdAt: this.createdAt,
			});
			message.object = docRef;
		} catch (err) {
			console.error("Error adding document: ", err);
			message.error = err;
		}
		return message;
	}
}
