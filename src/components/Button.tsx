
interface ButtonProps {
  id: string;
  containerClass: string;
  title: string;
  leftIcon?: any;
  rightIcon?: any;
}

const Button = ({id, title, containerClass, leftIcon, rightIcon}:ButtonProps) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
      {leftIcon}
      <a href="mailto:manish39x@gmail.com">
      <span className='relative incline-flex overflow-hidden font-general text-xs uppercase'>
        <div>
          {title}
        </div>
      </span>
      </a>
      {rightIcon}
    </button>
  )
}

export default Button
