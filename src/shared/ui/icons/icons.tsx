import { BackIcon } from "./back-icon";
import { ErrorIcon } from "./error-icon";
import { EyeIcon } from "./eye-icon";
import { KeyIcon } from "./key-icon";
import { PlusIcon } from "./plus-icon";
import { SearchIcon } from "./search-icon";
import { UserIcon } from "./user-icon";
import { ChatsIcon } from "./chats-icon";
import { ContactsIcon } from "./contacts-icon";
import { EyeSlashIcon } from "./eye-slash-icon";
import { EmailIcon } from "./email-icon";
/*
1. копіюємо свгшки із фігми
2. вставляємо те що скопіювали у прекрасний сайт https://transform.tools/svg-to-react-native
3. вставляємо те що вийшло 
4. прибираємо те що нам не треба (fill, xmlns, width, height, ) (viewbox- оставляем)
5. змінюємо назви та !експортуємо!
6. імпортуємо їх сюди та в константу закидуємо
7. радіємо ^0^
*/
export const ICONS = {
	BackIcon,
	ChatsIcon,
	EyeIcon,
    EyeSlashIcon,
	KeyIcon,
	PlusIcon,
	SearchIcon,
	UserIcon,
	ErrorIcon,
	ContactsIcon,
	EmailIcon,
};
