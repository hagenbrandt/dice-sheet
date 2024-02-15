export type CheckboxProps = {
  id: string;
  content: string;
  name: string;
  hasIcon?: boolean;
};

export const Checkbox = ({ id, content, name, hasIcon }: CheckboxProps) => (
  <label
    htmlFor={`checkbox-${id}`}
    className='flex flex-col w-fit items-center bg-gray-400 h-fit py-1 px-2 rounded-xl border-solid border-2 border-white'
  >
    <span className='bg-white text-black px-1 rounded-xl'>{content}</span>
    <input
      type='checkbox'
      name={name}
      id={`checkbox-${id}`}
      className='hidden'
    />
    {hasIcon ? (
      <span className='bg-black w-auto block mt-1 p-1 rounded-md'>
        <svg
          className='h-2 w-2'
          fill='white'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='m21.897 13.404.008-.057v.002c.024-.178.044-.357.058-.537.024-.302-.189-.811-.749-.811-.391 0-.715.3-.747.69-.018.221-.044.44-.078.656-.645 4.051-4.158 7.153-8.391 7.153-3.037 0-5.704-1.597-7.206-3.995l1.991-.005c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-4.033c-.414 0-.75.336-.75.75v4.049c0 .414.336.75.75.75s.75-.335.75-.75l.003-2.525c1.765 2.836 4.911 4.726 8.495 4.726 5.042 0 9.217-3.741 9.899-8.596zm-19.774-2.974-.009.056v-.002c-.035.233-.063.469-.082.708-.024.302.189.811.749.811.391 0 .715-.3.747-.69.022-.28.058-.556.107-.827.716-3.968 4.189-6.982 8.362-6.982 3.037 0 5.704 1.597 7.206 3.995l-1.991.005c-.414 0-.75.336-.75.75s.336.75.75.75h4.033c.414 0 .75-.336.75-.75v-4.049c0-.414-.336-.75-.75-.75s-.75.335-.75.75l-.003 2.525c-1.765-2.836-4.911-4.726-8.495-4.726-4.984 0-9.12 3.654-9.874 8.426z' />
        </svg>
      </span>
    ) : null}
  </label>
);
