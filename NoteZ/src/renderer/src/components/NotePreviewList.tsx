import { notesMock } from "@/store/mocks";
import { ComponentProps } from "react";

export const NotePreviewList = ({...props}:ComponentProps<'ul'>) => {
	return (
		<ul {...props}>
			{
				notesMock.map((note) => (
					<li className='text-[#222] dark:text-[#EFEFEF]' key={note.title}>{note.title}</li>
				))
			}
		</ul>
	);
};