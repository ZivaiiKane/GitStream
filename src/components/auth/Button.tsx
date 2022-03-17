import { IButton } from '../../interfaces/interfaces';

export default function Button({ text, bg, colour }: IButton) {
  return (
    <>
      <button
        className={`auth-button py-2 w-full ${colour}  ${bg}  font-medium my-8 transition-all`}
      >
        {text}
      </button>
    </>
  );
}
