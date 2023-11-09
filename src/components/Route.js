import useNav from "../Hooks/useNav"

function Route({path, children}) {
    const { currentPath } = useNav()

    if(path === currentPath){
        return children
    }

  return null
}

export default Route