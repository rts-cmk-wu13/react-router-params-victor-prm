import './LoadingAnimation.sass'

export default function LoadingAnimation(){
    let cname = "loading-animation"
    return (
        <div className={cname}>
            <img className={`${cname}__gif`} src="/loading.gif" alt="" />
        </div>
    )
}