import { ActionButton,ActionButtonProps } from "@/components";
import {FaRegTrashCan} from "react-icons/fa6";

export const DeleteNoteButton = ({...props}:ActionButtonProps) => {
	return <ActionButton {...props}>
		<FaRegTrashCan className='w-4 h-4 text-[#222] dark:text-zinc-300'/>
	</ActionButton>
};