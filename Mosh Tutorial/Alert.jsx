function Alert({children,onClick}){
    return <div className="alert alert-warning alert-dismissible fade show">
        {children}
    <button type="button" onClick={onClick} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
}
export default Alert;