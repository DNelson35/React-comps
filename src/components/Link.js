import classNames from "classnames";
import useNav from "../Hooks/useNav";


function Link({to, children, className, activeClassName}) {

    const { navigate, currentPath } = useNav()

    const classes = classNames(
      'text-blue-500',
       className,
       currentPath === to && activeClassName
      )

    const handleClick = (e) => {
      if(e.metakey || e.ctrlKey){
        return 
      }
        e.preventDefault();
        navigate(to)
    }

  return (
    <a href={to} onClick={handleClick} className={classes}>
        {children}
    </a>
  )
}

export default Link