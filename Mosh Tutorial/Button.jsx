function Button({children,color="primary",onClick}){
return <button onClick={onClick} type="button" class={"btn btn-"+color}>{children}</button>

}
export default Button;