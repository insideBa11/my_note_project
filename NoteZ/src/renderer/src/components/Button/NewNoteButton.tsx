import { ActionButton, ActionButtonProps } from "@/components";
import { LuFileSignature } from "react-icons/lu";

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
	return <ActionButton {...props}><LuFileSignature
		className="w-4 h-4  text-[#222] dark:text-zinc-300"></LuFileSignature></ActionButton>;
};