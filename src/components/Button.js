import className from "classnames"


function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {

  const classes = className(rest.className, 'flex items-center px-3 py-1.5 text-white border', {
    'border-blue-600 bg-blue-500': primary,
    'border-gray-900 bg-gray-800': secondary,
    'border-green-600 bg-green-500': success,
    'border-yellow-500 bg-yellow-400': warning,
    'border-red-600 bg-red-500': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger,
  })

  return (
    <button className={classes} {...rest}>{children}</button>
  )
}

Button.propTypes = {
   checkVariationValue: ({primary, secondary,success,warning,danger}) => {
    const count = 
        Number(!!primary) + 
        Number(!!secondary) + 
        Number(!!success) + 
        Number(!!warning) + 
        Number(!!danger)


    if(count > 1){
        return new Error('only one of primary, secondary, success, warning, danger can be true')
    }


   } 
}

export default Button