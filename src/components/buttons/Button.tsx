
import './ButtonStyles.css'
export const Button = ({name, onClick, isActive = false}: {name: string, onClick: ()=>void, isActive?: boolean}) => (
    <button className={`button${isActive ? ' button__active' : ''}`} onClick={onClick}>
        {name}
    </button>
)
