import style from './Button.module.css'
export default function Button({ data }) {

    return (
        <button className={style.btn}>{data.title}</ button >
    )
}